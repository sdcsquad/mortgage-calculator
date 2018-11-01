import React from 'react';

const PaymentList = props => (
  <div className="grid-item">
    <ul>
      <li>
        <div className="circle ci-1"/>
        P&I <b>{props.items.PI}</b>
      </li>
      <li>
        <div className="circle ci-2"/>
        Insurance <b>{props.items.insurance}</b>
      </li>
      <li>
        <div className="circle ci-3"/>
        Taxes <b>{props.items.taxes}</b>
      </li>
      <li>
        <div className="circle ci-4"/>
        PMI <b>{props.items.PMI}</b>
      </li>
      <li>
        <div className="circle ci-5"/>
        HOA <b>{props.items.HOA}</b>
      </li>
      {/*<li>*/}
        {/*<div className="circle"/>*/}
        {/*Monthly Payment <b> {props.items.monthlyPayment}</b>*/}
      {/*</li>*/}
    </ul>
  </div>
);

export default PaymentList;
