import React from 'react';
import Form from './Form.jsx';
import PaymentList from './PaymentList.jsx';
import Chart from './Chart.jsx';

const SubSection = props => (
  <div className="grid-container">
    <div className="grid-item">
      <Form item = {props.item} onChange={props.onChangeHandler} onClick={props.onClick} />
    </div>
    <div className="grid-item">
      <div className="sub-grid-container">
        <div className="grid-item">
          <PaymentList items={props.payments}/>
        </div>
        <div className="grid-item">
          <Chart/>
        </div>
      </div>
    </div>
  </div>
);

export default SubSection;
