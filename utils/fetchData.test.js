import fetchData from './fetchData';
import { URL_SLUG_LETTER } from '../constants/urlSlugs';

const mockLogApiError = jest.fn();
jest.mock('./logger', () => ({ logApiError: (...args) => mockLogApiError(...args) }));
const mockDate = new Date('1995-12-17T03:24:00.000Z');

const mockRead = jest.fn();
jest.mock('echaloasuerte-js-sdk', () => ({
  ...jest.requireActual('echaloasuerte-js-sdk'),
  LetterApi: jest.fn().mockImplementation(() => ({
    letterRead: mockRead,
  })),
}));

describe('fetchData', () => {
  it('Should fetch the data', async () => {
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

    const props = await fetchData({ urlSlug, drawId });
    expect(mockRead).toHaveBeenCalledWith(drawId);
    expect(props).toStrictEqual({
      draw: {
        id: '728efbc2-4d54-4702-98dd-f2cd18cbaa52',
        isQuickDraw: true,
        privateId: 'd7b5c0f9-8c76-4369-91bf-4eedd684b7b1',
        results: [{ created_at: '1995-12-17T03:24:00.000Z', schedule_date: null, value: [null] }],
        values: { allowRepeated: false, numberOfResults: '1' },
      },
    });
  });

  it('Should log an error when the fetch fails', async () => {
    mockRead.mockResolvedValue(undefined);
    const drawId = '12345';
    const req = {
      headers: {
        'x-forwarded-for': '3.3.3.3,2.2.2.2,5.5.5.5',
      },
    };

    await fetchData({ drawId, urlSlug: URL_SLUG_LETTER, req });

    expect(mockLogApiError).toHaveBeenCalledWith(
      new TypeError("Cannot destructure property 'private_id' of 'draw' as it is undefined."),
      {
        tags: {
          drawId: '12345',
          drawType: 'Letter',
        },
        userIp: '3.3.3.3',
      },
    );
  });
});
