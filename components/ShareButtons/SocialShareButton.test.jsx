import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialShareButton from './SocialShareButton.jsx';

const mockTracking = jest.fn(() => {});
jest.mock('../withTracking/withTracking.jsx', () => Component => props => (
  <Component {...props} track={mockTracking} />
));

describe('SocialShareButton', () => {
  it('Facebook should render correctly', () => {
    const wrapper = mount(
      <SocialShareButton url="the_cool_url" socialType="facebook" drawType="groups" />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Whatsapp should render correctly', () => {
    const wrapper = mount(
      <SocialShareButton url="the_url" socialType="whatsapp" drawType="groups" />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Telegram should render correctly', () => {
    const wrapper = mount(
      <SocialShareButton url="the_url" socialType="telegram" drawType="groups" />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Twitter should render correctly', () => {
    const wrapper = mount(
      <SocialShareButton url="the_url" socialType="twitter" drawType="groups" />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Email should render correctly', () => {
    const wrapper = mount(<SocialShareButton url="the_url" socialType="email" drawType="groups" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should not be rendered if socialType not valid', () => {
    const wrapper = mount(
      <SocialShareButton url="the_url" socialType="not_valid_type" drawType="groups" />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
