// import { RandomNumberApi, LetterApi, Letter, DrawTossPayload } from 'echaloasuerte-js-sdk';
import Router from 'next/router';
import { fetchDraw, toss, publish } from './api';
import { URL_SLUG_LETTER } from '../constants/urlSlugs';

const mockLogApiError = jest.fn();
jest.mock('./logger', () => ({ logApiError: (...args) => mockLogApiError(...args) }));

const mockDate = new Date('1995-12-17T03:24:00');

const mockResponseCreate = {
  id: 'd3ca7fd5-c632-45e5-a67f-ce237f7e72d4',
  created_at: '2020-06-05T13:35:43.227037Z',
  updated_at: '2020-06-05T13:35:43.227094Z',
  title: null,
  description: null,
  results: [],
  metadata: [{ client: 'web', key: 'isQuickDraw', value: 'true' }],
  private_id: 'ccf9f8d8-3524-48d5-81d3-d164226eadf8',
  number_of_results: 1,
  allow_repeated_results: false,
};

const mockResponseCreatePublic = {
  ...mockResponseCreate,
  title: 'Sorteo público',
  description: 'and some subtitle',
  metadata: [{ client: 'web', key: 'isQuickDraw', value: 'false' }],
};

const mockResponseToss = {
  created_at: '2020-06-05T14:18:44.498852Z',
  value: ['K'],
  schedule_date: null,
};

const mockFormValues = {
  title: '',
  description: '',
  numberOfResults: '2',
  allowRepeated: true,
  dateScheduled: mockDate,
};

const mockBaseTossObject = {
  values: mockFormValues,
  privateId: null,
  urlSlug: URL_SLUG_LETTER,
  setLoadingRequest: jest.fn(),
  track: jest.fn(),
  setAPIError: jest.fn(),
  setQuickResult: jest.fn(),
  t: jest.fn().mockReturnValue('translatedError'),
};

const mockCreate = jest.fn();
const mockRead = jest.fn();
const mockToss = jest.fn();

const mockRouterPush = jest.spyOn(Router, 'push');

jest.mock('next/router');

jest.mock('echaloasuerte-js-sdk', () => ({
  ...jest.requireActual('echaloasuerte-js-sdk'),
  LetterApi: jest.fn().mockImplementation(() => ({
    letterCreate: mockCreate,
    letterRead: mockRead,
    letterToss: mockToss,
  })),
  // RandomNumber: { constructFromObject: jest.fn().mockReturnValue(4) },
}));

// const { RandomNumber } = jest.requireActual('echaloasuerte-js-sdk');
describe('Api', () => {
  beforeEach(() => {
    mockCreate.mockClear();
    mockRead.mockClear();
    mockToss.mockClear();
    mockRouterPush.mockClear();
  });
  it('Should fetch draw correctly', async () => {
    const mockResponse = {
      id: '728efbc2-4d54-4702-98dd-f2cd18cbaa52',
      created_at: mockDate,
      updated_at: mockDate,
      title: null,
      description: null,
      private_id: 'd7b5c0f9-8c76-4369-91bf-4eedd684b7b1',
      metadata: [{ client: 'web', key: 'isQuickDraw', value: 'true' }],
      number_of_results: 1,
      allow_repeated_results: false,
      results: [
        {
          created_at: mockDate,
          schedule_date: null,
          value: [Array],
        },
      ],
    };
    mockRead.mockResolvedValue(mockResponse);
    const urlSlug = URL_SLUG_LETTER;
    const drawId = '12345';

    await fetchDraw({ urlSlug, drawId });
    expect(mockRead).toHaveBeenCalledWith(drawId);
  });
  describe('Toss', () => {
    it('Should toss draw correctly', async () => {
      mockCreate.mockResolvedValue(mockResponseCreate);
      const mockSetAPIError = jest.fn();

      const mockTossObject = {
        ...mockBaseTossObject,
        setAPIError: mockSetAPIError,
      };
      const expectedValue = {
        allow_repeated_results: true,
        description: null,
        metadata: [{ client: 'web', key: 'isQuickDraw', value: 'true' }],
        number_of_results: 2,
        title: null,
      };

      await toss(mockTossObject);
      expect(mockCreate).toHaveBeenCalledWith(expectedValue);
      expect(mockToss).toHaveBeenCalledWith('ccf9f8d8-3524-48d5-81d3-d164226eadf8', {});
      expect(mockSetAPIError).not.toHaveBeenCalled();

      expect(mockRouterPush).toHaveBeenCalledWith(
        '/letter/[id]',
        '/letter/ccf9f8d8-3524-48d5-81d3-d164226eadf8',
      );
    });

    describe('If the configuration did not change since the last toss', () => {
      // If we have a private id it means that the configuration didn't change
      it('should not create a new draw', async () => {
        // If we have a privateId the draw wasn't modified to we can simply toss again
        const mockSetQuickResult = jest.fn();

        const mockTossObject = {
          ...mockBaseTossObject,
          privateId: '123456789',
          setQuickResult: mockSetQuickResult,
        };

        await toss(mockTossObject);
        expect(mockCreate).not.toHaveBeenCalled();
      });

      it('should update the quick result', async () => {
        mockCreate.mockResolvedValue(mockResponseCreate);
        mockToss.mockResolvedValue(mockResponseToss);
        const mockSetQuickResult = jest.fn();

        const mockTossObject = {
          ...mockBaseTossObject,
          privateId: '123456789',
          setQuickResult: mockSetQuickResult,
        };

        await toss(mockTossObject);
        expect(mockRouterPush).not.toHaveBeenCalled();
        expect(mockSetQuickResult).toHaveBeenCalledWith({
          created_at: '2020-06-05T14:18:44.498852Z',
          schedule_date: null,
          value: ['K'],
        });
      });
    });

    it('Should send analytics events when the toss was successful', async () => {
      mockCreate.mockResolvedValue(mockResponseCreate);
      const mockTrack = jest.fn();
      const mockTossObject = {
        ...mockBaseTossObject,
        track: mockTrack,
      };

      await toss(mockTossObject);
      expect(mockTrack).toHaveBeenCalledWith({
        ga: { action: 'Toss', category: 'Letter' },
        mp: { name: 'Toss - Letter', properties: { drawType: 'Letter' } },
      });
    });

    it('Should call the error function where there were errors', async () => {
      /* eslint-disable no-console */
      const originalError = console.log;

      console.log = jest.fn();
      mockCreate.mockResolvedValue(undefined);
      const mockSetAPIError = jest.fn();

      const mockTossObject = {
        ...mockBaseTossObject,
        setAPIError: mockSetAPIError,
      };

      await toss(mockTossObject);
      expect(mockSetAPIError).toHaveBeenCalledWith('translatedError');
      expect(mockLogApiError).toHaveBeenCalledWith(
        new TypeError("Cannot read property 'private_id' of undefined"),
        'Letter',
      );
      console.log = originalError;
      /* eslint-enable no-console */
    });
  });
  describe('Publish', () => {
    it('Should toss draw correctly', async () => {
      mockCreate.mockResolvedValue(mockResponseCreatePublic);
      const mockSetAPIError = jest.fn();

      const mockTossObject = {
        ...mockBaseTossObject,
        values: {
          ...mockBaseTossObject.values,
          title: 'Sorteo público',
          description: 'and some subtitle',
        },
        setAPIError: mockSetAPIError,
      };
      const expectedValue = {
        allow_repeated_results: true,
        description: 'and some subtitle',
        metadata: [{ client: 'web', key: 'isQuickDraw', value: 'false' }],
        number_of_results: 2,
        title: 'Sorteo público',
      };

      await publish(mockTossObject);
      expect(mockCreate).toHaveBeenCalledWith(expectedValue);
      expect(mockToss).toHaveBeenCalledWith('ccf9f8d8-3524-48d5-81d3-d164226eadf8', {
        schedule_date: mockDate,
      });
      expect(mockSetAPIError).not.toHaveBeenCalled();

      expect(mockRouterPush).toHaveBeenCalledWith(
        '/letter/[id]/success',
        '/letter/d3ca7fd5-c632-45e5-a67f-ce237f7e72d4/success',
      );
    });

    it('Should send analytics events when the toss was successful', async () => {
      mockCreate.mockResolvedValue(mockResponseCreatePublic);
      const mockTrack = jest.fn();
      const mockTossObject = {
        ...mockBaseTossObject,
        track: mockTrack,
      };

      await publish(mockTossObject);
      expect(mockTrack).toHaveBeenCalledWith({
        ga: {
          action: 'Publish',
          category: 'Letter',
          label: 'd3ca7fd5-c632-45e5-a67f-ce237f7e72d4',
        },
        mp: {
          name: 'Publish - Letter',
          properties: { drawType: 'Letter', drawId: 'd3ca7fd5-c632-45e5-a67f-ce237f7e72d4' },
        },
      });
    });

    it('Should call the error function where there were errors', async () => {
      /* eslint-disable no-console */
      const originalError = console.log;

      console.log = jest.fn();
      mockCreate.mockResolvedValue(undefined);
      const mockSetAPIError = jest.fn();

      const mockTossObject = {
        ...mockBaseTossObject,
        setAPIError: mockSetAPIError,
      };

      await publish(mockTossObject);
      expect(mockSetAPIError).toHaveBeenCalledWith('translatedError');
      console.log = originalError;
      /* eslint-enable no-console */
    });
  });
});
