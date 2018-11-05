import React from 'react';
import { shallow, mount } from '../../setupTests.js';
import App from './../App';
import MortgageSection from "../MortgageSection";

describe('App component tests', () => {
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