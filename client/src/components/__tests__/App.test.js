import React from 'react';
import { shallow, mount } from '../../setupTests.js';
import App from './../App';
import MortgageSection from "../MortgageSection";
import SubSection from "../SubSection";


describe('App component tests', () => {

  const items = {
    home_price : 10000,
    down_payment_amount : 1000,
    down_payment_percentage : 1,
    loan_program: '30-years-fixed',
    interest_rate: 4,
    property_tax: 300,
    property_tax_percentage: 2,
    home_insurance: 100,
    hoa_dues: 30,
  };

  const payments = {
    PI: 3398,
    insurance: 44,
    taxes: 341,
    PMI: 0,
    HOA: 450,
    monthlyPayment : 2500,
  };

  const checked = {
    pmiChecked: true,
    taxesChecked: true,
  };

  const paymentsPercentage = {
    PI: 3398,
    insurance: 44,
    taxes: 341,
    PMI: 0,
    HOA: 450,
  };

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          id: 0,
          json: () => {
            return [{id: 0, home_price: 100000, property_tax: 300, home_insurance: 200, hoa_dues: 50}];
          },
        });
      });
      return p;
    });
  });

  it('should have inner class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass('inner')).toBe(true);
  });

  it('render mortgage section component', () =>{
    const wrapper = mount(<App onClick = {()=>{}} />);
    expect(wrapper.find(MortgageSection).exists()).toBe(true);
  });

});