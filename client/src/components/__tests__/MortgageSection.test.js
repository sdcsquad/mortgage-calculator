import React from 'react';
import { shallow } from '../../setupTests.js';
import MortgageSection from './../MortgageSection';
import jest from 'jest-mock';

describe('Mortgage Component tests', () => {

  it('renders title', () => {
    const title = 'Mortgage';
    const wrapper = shallow(<MortgageSection onClick={() => {}}/>);
    expect(wrapper.find('.title')).toBeDefined();
    expect(title).toEqual('Mortgage');
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<MortgageSection onClick={mockCallBack}>Ok! </MortgageSection>));
    button.find('div.title').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});