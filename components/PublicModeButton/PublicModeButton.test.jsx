import React from 'react';
import Router from 'next/router';
import { render, fireEvent } from '@testing-library/react';
import PublicModeButton from './PublicModeButton.jsx';

const mockedRouter = {
  push: jest.fn().mockResolvedValue(),
  prefetch: () => {},
};
Router.router = mockedRouter;

const mockTracking = jest.fn(() => {});
jest.mock('../../hocs/withTracking.jsx', () => Component => props => (
  <Component {...props} track={mockTracking} />
));

describe('PublicModeButton', () => {
  it('should render all buttons by default', () => {
    const trackingData = { something: 'yes' };
    const { getByText } = render(
      <PublicModeButton href="/somewhere" trackingData={trackingData}>
        click here
      </PublicModeButton>,
    );
    // component.find('a').simulate('click');
    fireEvent.click(getByText('click here'));
    // component.find('a').prop('onClick')();
    expect(mockTracking.mock.calls.length).toEqual(1);
    expect(mockTracking).toBeCalledWith(trackingData);
  });
});
