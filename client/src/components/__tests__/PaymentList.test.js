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
      HOA: 8};
    const wrapper = shallow(<PaymentList items={items}/>);
    expect(wrapper.find('.grid-item ul li b').get(0).props.children).toEqual(10000);
  });

});