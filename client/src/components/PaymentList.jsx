import React from 'react';

const PaymentList = props => (
  <div className="grid-item list">
    <ul>
      <li>
        <div className="circle ci-1"/>
        P&I <b>{props.items.PI}</b>
      </li>
      <li>
        <div className="circle ci-2"/>
        Insurance <b>{props.checked.taxesChecked === true ? props.items.insurance : "$--"}</b>
      </li>
      <li>
        <div className="circle ci-3"/>
        Taxes <b>{props.checked.taxesChecked === true ? props.items.taxes : "$--"}</b>
      </li>
      <li>
        <div className="circle ci-4"/>
        PMI <b>{props.checked.pmiChecked === true ? props.items.PMI : "$--"}</b>
      </li>
      <li>
        <div className="circle ci-5"/>
        HOA <b>{props.items.HOA}</b>
      </li>
    </ul>
  </div>
);

export default PaymentList;
