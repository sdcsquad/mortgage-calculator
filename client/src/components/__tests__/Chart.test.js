import React from 'react';
import { shallow } from '../../setupTests.js';
import Chart from './../Chart';

describe('Payment List tests', () => {
    const items = {
      PI: 3398,
      insurance: 44,
      taxes: 341,
      PMI: 0,
      HOA: 450
    };
    const monthlyPayment = 2500;

  it('should have donut class', () => {
    const wrapper = shallow(<Chart items={items} monthlyPayment={monthlyPayment}/>);
    expect(wrapper.hasClass('donut')).toBe(true);
  });

  it('renders correct amount in chart', () => {
    const wrapper = shallow(<Chart items={items} monthlyPayment={monthlyPayment}/>);
    expect(wrapper.find('text.chart-number').text()).toEqual("2500");
  });

});