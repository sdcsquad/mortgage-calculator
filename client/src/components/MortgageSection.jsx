import React from 'react';

const MortgageSection = props => (
  <div className="title" onClick={props.onClick}>
    <span className="collapsible"><b>Mortgage</b></span>
    <i className="fas fa-angle-up" id="icon-angle"/>
  </div>
);

export default MortgageSection;
