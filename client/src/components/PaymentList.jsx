import React from 'react';
import styles from './styles/PaymentList.css';

const PaymentList = props => (
  <div >
    <ul className={styles.list}>
      <li>
        <div className= {[styles.circle, styles.ci1].join(' ')}/>
        P&I <b>{props.items.PI}</b>
      </li>
      <li>
        <div className={[styles.circle, styles.ci2].join(' ')}/>
        Insurance <b>{props.checked.taxesChecked === true ? props.items.insurance : "$--"}</b>
      </li>
      <li>
        <div className={[styles.circle, styles.ci3].join(' ')}/>
        Taxes <b>{props.checked.taxesChecked === true ? props.items.taxes : "$--"}</b>
      </li>
      <li>
        <div className={[styles.circle, styles.ci4].join(' ')}/>
        PMI <b>{props.checked.pmiChecked === true ? props.items.PMI : "$--"}</b>
      </li>
      <li>
        <div className={[styles.circle, styles.ci5].join(' ')}/>
        HOA <b>{props.items.HOA}</b>
      </li>
    </ul>
  </div>
);

export default PaymentList;
