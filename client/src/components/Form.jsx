import React from 'react';
import styles from './styles/Form.css';

const Form = props => (
  <form className={styles.form}>
    <label>
      Home price
      <span className={styles.amountInput}>$
      <input type="text" name="home_price" pattern="[0-9]" value={props.item.home_price}
             onChange={props.onChangeHandler} className={styles.input} id="testW"/>
      </span>
    </label>
    <label>
      <span className={styles.doubleInput}>Down payment</span>
      <div className={styles.lgSmInput}>
        <span className={styles.doubleAmountInputLg}>$
        <input type="text" name="down_payment_amount" pattern="[0-9]"
               value={props.item.down_payment_amount} onChange={props.onChangeHandler}
               className={styles.inputLg}/>
        </span>
        <span className={styles.doubleAmountInputSm}>
        <input type="text" name="down_payment_percentage"
               value={props.item.down_payment_percentage}
               onChange={props.onChangeHandler} className={styles.inputSm}/><span className={styles.symbols}>%</span>
        </span>
      </div>
    </label>
    <label>
      Loan program
      <select className={styles.selectInput} value={props.selectedValue} onChange={props.onSelectChange}>
        <option value="30-year fixed">30-year fixed</option>
        <option value="15-year fixed">15-year fixed</option>
        <option value="5/1 ARM">5/1 ARM</option>
      </select>
    </label>
    <label>
      Interest rate
      <a className={styles.rateLink} href="javascript:void(0);">See current rates</a>
      <span className={styles.amountInput}>
      <input type="number" name="interest_rate" value={props.item.interest_rate}
             onChange={props.onChangeHandler} className={styles.input}/><span className={styles.symbols}>%</span>
      </span>
    </label>
    <div className={styles.checkboxDiv}>
      <label className={styles.check}>
        <input type="checkbox" checked={props.checked.pmiChecked} onChange={props.onCheckHandler}
               id="pmi-check"/>
        <span className={styles.checkInput}>Include PMI</span>
      </label>
      <a className={styles.help} onClick={props.onClick}>
        <i className="far fa-question-circle" id="help1"/>
        <span className={styles.popuptext} id="pmi-block">
          <b>PRIVATE MORTGAGE INSURANCE</b>
          <br/>
          Mortgage insurance is required primarily for borrowers with a down payment of less than 20% of the home's purchase price. It protects lenders against some or most of the losses that can occur when a borrower defaults on a mortgage loan.
        </span>
      </a>
    </div>
    <div className={styles.checkboxDiv}>
      <label className={styles.check}>
        <input type="checkbox" checked={props.checked.taxesChecked} onChange={props.onCheckHandler}
               id="taxes-check"/>
        <span className={styles.checkInput}>Include taxes/insurance </span>
      </label>
    </div>
    {props.checked.taxesChecked === true ?
      <div>
        <label>
          <div className={styles.doubleInput}>
            <span>Property tax</span>
            <a className={styles.help} onClick={props.onClick}>
              <i className="far fa-question-circle" id="help2"/>
              <span className={styles.popuptext} id="tax-block">
              <b>PROPERTY TAX</b>
              <br/>
              The mortgage payment calculator includes estimated property taxes. The value represents an annual tax on homeowners' property and the tax amount is based on the home's value. To convert an annual property tax in dollars to a percentage, divide the property tax by your home value and then multiply by 100.
            </span>
            </a>
          </div>
          <div className={styles.lgSmInput}>
            <span className={styles.doubleAmountInputLg}>$
               <input type="text" name="property_tax" pattern="[0-9]"
                      value={props.item.property_tax}
                      onChange={props.onChangeHandler} className={styles.inputLg}/>
            </span>
            <span className={styles.doubleAmountInputSm}>
              <input type="text" name="property_tax_percentage"
                     value={props.item.property_tax_percentage}
                     onChange={props.onChangeHandler} className={styles.inputSm}/><span className={styles.symbols}>%</span>
            </span>
          </div>
        </label>
        <label>
          Home insurance
          <a className={styles.help} onClick={props.onClick}>
            <i className="far fa-question-circle" id="help3"/>
            <span className={styles.popuptext} id="insurance-block">
            <b>HOMEOWNERS INSURANCE</b>
            <br/>
            Commonly known as hazard insurance, most lenders require insurance to provide damage protection for your home and personal property from a variety of events, including fire, lightning, burglary, vandalism, storms, explosions, and more. All homeowner's insurance policies contain personal liability coverage, which protects against lawsuits involving injuries that occur on and off your property.
          </span>
          </a>
          <span className={styles.amountInput}>$
        <input type="text" name="home_insurance" pattern="[0-9]" value={props.item.home_insurance}
               onChange={props.onChangeHandler} className={styles.inputMd}/><span className={styles.symbols}>/year</span>
        </span>
        </label>
      </div>
      : null}
    <label>
      HOA dues
      <a className={styles.help} onClick={props.onClick}>
        <i className="far fa-question-circle" id="help4"/>
        <span className={styles.popuptext} id="hoa-block">
           <b>HOMEOWNERS ASSOCIATION DUES</b>
           <br/>
          Typically, owners of condos or townhomes are required to pay homeowners association dues (known as HOA fees), to cover common amenities or services within the property such as garbage collection, landscaping, snow removal, pool maintenance, and hazard insurance.
        </span>
      </a>
      <span className={styles.amountInput}>$
      <input type="text" name="hoa_dues" pattern="[0-9]" value={props.item.hoa_dues}
             onChange={props.onChangeHandler} className={styles.inputMd}/><span className={styles.symbols}>/month</span>
      </span>
    </label>
  </form>
);

export default Form;