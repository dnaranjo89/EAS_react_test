import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PublicModeButton from './PublicModeButton.jsx';

const mockTracking = jest.fn(() => {});
jest.mock('../withTracking/withTracking.jsx', () => Component => props => (
  <Component {...props} track={mockTracking} />
));

describe('PublicModeButton', () => {
  it('should render all buttons by default', () => {
    const trackingData = { something: 'yes' };
    const wrapper = mount(
      <MemoryRouter>
        <PublicModeButton to="/somewhere" trackingData={trackingData}>
          click here
        </PublicModeButton>
      </MemoryRouter>,
    );
    wrapper.find('a').simulate('click');
    expect(mockTracking.mock.calls.length).toEqual(1);
    expect(mockTracking).toBeCalledWith(trackingData);
  });
});
