import React from 'react';
import { shallow, mount } from '../../setupTests.js';
import SubSection from './../SubSection';
import Form from "../Form";
import Chart from "../Chart";
import PaymentList from "../PaymentList";

describe('SubSection tests', () => {

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

  const monthlyPayment = 2500;

  it('should have grid-container class', () => {
    const wrapper = shallow(<SubSection items={items} payments={payments} />);
    expect(wrapper.hasClass('grid-container')).toBe(true);
  });

  it('render form component', () =>{
    const wrapper = mount(<SubSection items={items} monthlyPayment={monthlyPayment} paymentsPercentage={paymentsPercentage} payments={payments} checked={checked} onChangeHandler={()=>{}} onClick={()=>{}} selectedValue={'30-year fixed'} onSelectChange={()=>{}} onCheckHandler={()=>{}}
    />);
    expect(wrapper.find(Form).exists()).toBe(true);
  });

  it('render chart component', () =>{
    const wrapper = mount(<SubSection items={items} monthlyPayment={monthlyPayment} paymentsPercentage={paymentsPercentage} payments={payments} checked={checked} onChangeHandler={()=>{}} onClick={()=>{}} selectedValue={'30-year fixed'} onSelectChange={()=>{}} onCheckHandler={()=>{}}
    />);
    expect(wrapper.find(Chart).exists()).toBe(true);
  });

  it('render payment list component', () =>{
    const wrapper = mount(<SubSection items={items} monthlyPayment={monthlyPayment} paymentsPercentage={paymentsPercentage} payments={payments} checked={checked} onChangeHandler={()=>{}} onClick={()=>{}} selectedValue={'30-year fixed'} onSelectChange={()=>{}} onCheckHandler={()=>{}}
    />);
    expect(wrapper.find(PaymentList).exists()).toBe(true);
  });

});