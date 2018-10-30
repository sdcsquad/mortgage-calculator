import React from 'react';
import PaymentList from "./PaymentList.jsx";

const SubSection = (props) => (
    <div className="grid-container">
        <div className="grid-item">
            <form className="form">
                <label>
                    Home price
                    <input type="text" name="home_price" value={props.item.home_price} onChange={props.onChangeHandler} className="input"/>
                </label>
                <label>
                    <span className="double-input">Down payment</span>
                    <input type="text" name="down_payment_amount" value={props.item.down_payment_amount} onChange={props.onChangeHandler} className="input-lg"/><input type="text" name="down_payment_percentage" value={props.item.down_payment_percentage} onChange={props.onChangeHandler} className="input-sm"/>
                </label>
                <label>
                    Loan program
                    <input type="text" name="loan_program" value={props.item.loan_program} onChange={props.onChangeHandler} className="input"/>
                </label>
                <label>
                    Interest rate
                    <input type="text" name="interest_rate" value={props.item.interest_rate} onChange={props.onChangeHandler} className="input"/>
                </label>
                <div className="checkboxDiv">
                    <label className="check">
                        <span className="check-input"> <input type="checkbox" checked/> Include PMI </span>
                    </label>
                    <a className="help"><i className="far fa-question-circle"></i></a>
                </div>
                <div className="checkboxDiv">
                    <label className="check">
                        <span className="check-input"><input type="checkbox" checked/> Include taxes/insurance</span>
                    </label>
                </div>
                <label>
                    <span className="double-input"><span>Property tax</span><a className="help"><i className="far fa-question-circle"></i></a></span>
                    <input type="text" name="property_tax" value={props.item.property_tax} onChange={props.onChangeHandler} className="input-lg"/><input type="text" name="property_tax_percentage" value={props.item.property_tax_percentage} onChange={props.onChangeHandler} className="input-sm"/>
                </label>
                <label>
                    Home insurance
                    <a className="help"><i className="far fa-question-circle"></i></a>
                    <input type="text" name="home_insurance" value={props.item.home_insurance} onChange={props.onChangeHandler} className="input"/>
                </label>
                <label>
                    HOA dues
                    <a className="help"><i className="far fa-question-circle"></i></a>
                    <input type="text" name="hoa_dues" value={props.item.hoa_dues} onChange={props.onChangeHandler} className="input"/>
                </label>
            </form>
        </div>
        <div className="grid-item">
            <div className="sub-grid-container">
                <PaymentList items = {props.payments}/>
                <div className="grid-item">3</div>
            </div>
        </div>
    </div>
);

export default SubSection;
