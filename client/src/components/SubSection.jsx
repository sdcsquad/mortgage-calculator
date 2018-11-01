import React from 'react';
import PaymentList from './PaymentList.jsx';
import Chart from './Chart.jsx';
import Form from'./Form.jsx';

const SubSection = props => (
  <div className="grid-container">
    <div className="grid-item">
      <Form item={props.items} onChangeHandler={props.onChangeHandler} onClick={props.onClick} checked={props.checked} onCheckHandler={props.onCheckHandler} />
    </div>
    <div className="grid-item">
      <div className="sub-grid-container">
        <div className="grid-item">
          <PaymentList items={props.payments}/>
        </div>
        <div className="grid-item">
          <Chart items={props.paymentsPercentage} monthlyPayment={props.payments.monthlyPayment}/>
        </div>
      </div>
    </div>
  </div>
);

export default SubSection;
