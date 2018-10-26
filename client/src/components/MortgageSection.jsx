import React from 'react';

const MortgageSection = (props) => (
        <div className="title" onClick={props.onClick}>
            <span className="collapsible">Mortgage </span><i className="fas fa-angle-up" id="icon-angle"></i>
        </div>
);


export default MortgageSection;