import React from 'react';
import PaymentList from './PaymentList.jsx';
import Chart from './Chart.jsx';
import Form from'./Form.jsx';
import Button from'./Button.jsx';

const SubSection = props => (
  <div className="grid-container">
    <div className="grid-item">
      <Form item={props.items} onChangeHandler={props.onChangeHandler} onClick={props.onClick} selectedValue={props.selectedValue} onSelectChange={props.onSelectChange} checked={props.checked} onCheckHandler={props.onCheckHandler} />
    </div>
    <div className="grid-item">
      <div className="sub-grid-container">
        <div className="grid-item-sm">
          <PaymentList items={props.payments} checked={props.checked}/>
        </div>
        <div className="grid-item-sm">
          <Chart items={props.paymentsPercentage} monthlyPayment={props.payments.monthlyPayment} checked={props.checked}/>
        </div>
      </div>
      <Button />
    </div>
  </div>
);

export default SubSection;
