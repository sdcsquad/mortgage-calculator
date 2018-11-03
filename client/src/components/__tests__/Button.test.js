import React from 'react';
import { shallow } from '../../setupTests.js';
import Button from './../Button';

describe('Mortgage Component tests', () => {

  it('should have qualified-button class', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.hasClass('qualified-button')).toBe(true);
  });

});
