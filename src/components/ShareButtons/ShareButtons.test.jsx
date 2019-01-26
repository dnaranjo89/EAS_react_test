import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ShareButtons from './ShareButtons.jsx';

describe('ShareButtons', () => {
  it('should render all buttons by default', () => {
    const wrapper = shallow(<ShareButtons url="the_cool_url" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should only render the specified types', () => {
    const wrapper = shallow(<ShareButtons url="the_cool_url" types={['facebook']} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the title if given', () => {
    const wrapper = shallow(<ShareButtons sectionTitle="The title" url="the_cool_url" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
