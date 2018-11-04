import React from 'react';
import styles from './styles/Chart.css';

const Chart = props => (
  <svg width="80%" height="80%" viewBox="0 0 42 42" className={styles.donut}>
    <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"/>
    <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
            stroke="#d9f0f9" strokeWidth="3"/>
    <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
            stroke="#0074e4" strokeWidth="3"
            strokeDasharray={props.items.PI + " " + (100 - props.items.PI)}
            strokeDashoffset="25"/>
    <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
            stroke="#62aef7" strokeWidth="3"
            strokeDasharray={props.items.insurance + " " + (100 - props.items.insurance)}
            strokeDashoffset={(100 - props.items.PI) + 25}/>
    <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
            stroke="#3390e9" strokeWidth="3"
            strokeDasharray={props.items.taxes + " " + (100 - props.items.taxes)}
            strokeDashoffset={(100 - (props.items.PI + props.items.insurance)) + 25}/>
    <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
            stroke="#1b5098" strokeWidth="3"
            strokeDasharray={props.items.PMI + " " + (100 - props.items.PMI)}
            strokeDashoffset={(100 - (props.items.PI + props.items.insurance + props.items.taxes)) + 25}/>
    <g className={styles.chartText}>
      <text x="50%" y="50%" className={styles.chartLabel}>
        YOUR PAYMENT
      </text>
      <text x="50%" y="50%" className={styles.chartNumber}>
        {props.monthlyPayment}
      </text>
    </g>
  </svg>
);

export default Chart;