import React from 'react';
import { shallow } from '../../setupTests.js';
import PaymentList from './../PaymentList';

describe('Payment List tests', () => {

  it('renders correct amount in list item', () => {
    const items = {
      PI: 10000,
      insurance: 100,
      taxes: 0,
      PMI: 0,
      HOA: 8
    };
    const checked = {
      pmiChecked: true,
      taxesChecked: true,
    };
    const wrapper = shallow(<PaymentList items={items} checked={checked}/>);
    // expect(wrapper.find('.grid-item ul li b').get(0).props.children).toEqual(10000);
    expect(wrapper.find('.list ul li b').get(0).props.children).toEqual(10000);
  });

});