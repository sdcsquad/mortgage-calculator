import React from 'react';
import PaymentList from './PaymentList.jsx';
import Chart from './Chart.jsx';
import Form from'./Form.jsx';
import Button from'./Button.jsx';
import styles from './styles/SubSection.css';

const SubSection = props => (
  <div className={styles.gridContainer}>
    <div className={styles.gridItem}>
      <Form item={props.items} onChangeHandler={props.onChangeHandler} onClick={props.onClick} selectedValue={props.selectedValue} onSelectChange={props.onSelectChange} checked={props.checked} onCheckHandler={props.onCheckHandler} popStatus={props.popStatus} />
    </div>
    <div className={styles.gridItem}>
      <div className={styles.subGridContainer}>
        <div className={styles.gridItemSm}>
          <PaymentList items={props.payments} checked={props.checked}/>
        </div>
        <div className={styles.gridItemSm}>
          <Chart items={props.paymentsPercentage} monthlyPayment={props.payments.monthlyPayment} checked={props.checked}/>
        </div>
      </div>
      <Button />
    </div>
  </div>
);

export default SubSection;

