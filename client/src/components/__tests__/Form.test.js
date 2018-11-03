import React from 'react';
import { shallow } from '../../setupTests.js';
import Form from './../Form';
import jest from 'jest-mock';

describe('Form Component tests', () => {

  const item = {
    home_price : 10000,
    down_payment_amount : 1000,
    down_payment_percentage : 1,
    loan_program: '30-years-fixed',
    interest_rate: 4,
    property_tax: 300,
    property_tax_percentage: 2,
    home_insurance: 100,
    hoa_dues: 30
  };

  const checked = {
    pmiChecked: true,
    taxesChecked: true,
  };

  it('should render without throwing an error', () => {
    const wrapper = shallow(<Form item={item} checked={checked}/>);
    expect(wrapper.find('form').exists()).toBe(true)
  });

  it('renders a home price input', () => {
    const wrapper = shallow(<Form item={item} checked={checked}/>);
    const input =  wrapper.find('input').first();
    expect(input.length).toEqual(1);
  });

  it('should respond to change event and change the state of the Form Component', () => {
    const MockCallBack = jest.fn();
    const wrapper = shallow(<Form item={item} onChangeHandler={MockCallBack} checked={checked}/>);
    const input =  wrapper.find('input').first();
    input.simulate('change');
    input.simulate('change');
    expect(MockCallBack).toHaveBeenCalledTimes(2);
  });

});