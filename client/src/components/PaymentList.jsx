import React from 'react';

const PaymentList = (props) => (
    <div className="grid-item">
        <ul>
            <li>P&I {props.items['PI']}</li>
            <li>Insurance {props.items['insurance']}</li>
            <li>Taxes {props.items['taxes']}</li>
            <li>PMI {props.items['PMI']}</li>
            <li>HOA {props.items['HOA']}</li>
            <li>Monthly Payment {props.items['monthlyPayment']}</li>
        </ul>
    </div>
);

export default PaymentList;