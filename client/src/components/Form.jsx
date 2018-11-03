import React from 'react';

const Form = props => (
  <form className="form">
    <label>
      Home price
      <span className="amount-input">$
      <input type="text" name="home_price" pattern="[0-9]" value={props.item.home_price}
             onChange={props.onChangeHandler} className="input" id="testW"/>
      </span>
    </label>
    <label>
      <span className="double-input">Down payment</span>
      <div className="lg-sm-input">
        <span className="double-amount-input-lg">$
        <input type="text" name="down_payment_amount" pattern="[0-9]"
               value={props.item.down_payment_amount} onChange={props.onChangeHandler}
               className="input-lg"/>
        </span>
        <span className="double-amount-input-sm">
        <input type="text" name="down_payment_percentage"
               value={props.item.down_payment_percentage}
               onChange={props.onChangeHandler} className="input-sm"/>%
        </span>
      </div>
    </label>
    <label>
      Loan program
      <select className="select-input" value={props.selectedValue} onChange={props.onSelectChange}>
        <option value="30-year fixed">30-year fixed</option>
        <option value="15-year fixed">15-year fixed</option>
        <option value="5/1 ARM">5/1 ARM</option>
      </select>
    </label>
    <label>
      Interest rate
      <a className="rate-link" href="javascript:void(0);">See current rates</a>
      <span className="amount-input">
      <input type="number" name="interest_rate" value={props.item.interest_rate}
             onChange={props.onChangeHandler} className="input"/><span>%</span>
      </span>
    </label>
    <div className="checkboxDiv">
      <label className="check">
        <input type="checkbox" checked={props.checked.pmiChecked} onChange={props.onCheckHandler}
               id="pmi-check"/>
        <span className="check-input">Include PMI</span>
      </label>
      <a className="help" onClick={props.onClick}>
        <i className="far fa-question-circle" id="help1"/>
        <span className="popuptext" id="pmi-block">
          <b>PRIVATE MORTGAGE INSURANCE</b>
          <br/>
          Mortgage insurance is required primarily for borrowers with a down payment of less than 20% of the home's purchase price. It protects lenders against some or most of the losses that can occur when a borrower defaults on a mortgage loan.
        </span>
      </a>
    </div>
    <div className="checkboxDiv">
      <label className="check">
        <input type="checkbox" checked={props.checked.taxesChecked} onChange={props.onCheckHandler}
               id="taxes-check"/>
        <span className="check-input">Include taxes/insurance </span>
      </label>
    </div>
    {props.checked.taxesChecked === true ?
      <div>
        <label>
          <div className="double-input">
            <span>Property tax</span>
            <a className="help" onClick={props.onClick}>
              <i className="far fa-question-circle" id="help2"/>
              <span className="popuptext" id="tax-block">
              <b>PROPERTY TAX</b>
              <br/>
              The mortgage payment calculator includes estimated property taxes. The value represents an annual tax on homeowners' property and the tax amount is based on the home's value. To convert an annual property tax in dollars to a percentage, divide the property tax by your home value and then multiply by 100.
            </span>
            </a>
          </div>
          <div className="lg-sm-input">
            <span className="double-amount-input-lg">$
               <input type="text" name="property_tax" pattern="[0-9]"
                      value={props.item.property_tax}
                      onChange={props.onChangeHandler} className="input-lg"/>
            </span>
            <span className="double-amount-input-sm">
              <input type="text" name="property_tax_percentage"
                     value={props.item.property_tax_percentage}
                     onChange={props.onChangeHandler} className="input-sm"/><span>%</span>
            </span>
          </div>
        </label>
        <label>
          Home insurance
          <a className="help" onClick={props.onClick}>
            <i className="far fa-question-circle" id="help3"/>
            <span className="popuptext" id="insurance-block">
            <b>HOMEOWNERS INSURANCE</b>
            <br/>
            Commonly known as hazard insurance, most lenders require insurance to provide damage protection for your home and personal property from a variety of events, including fire, lightning, burglary, vandalism, storms, explosions, and more. All homeowner's insurance policies contain personal liability coverage, which protects against lawsuits involving injuries that occur on and off your property.
          </span>
          </a>
          <span className="amount-input">$
        <input type="text" name="home_insurance" pattern="[0-9]" value={props.item.home_insurance}
               onChange={props.onChangeHandler} className="input-md"/><span>/year</span>
        </span>
        </label>
      </div>
      : null}
    <label>
      HOA dues
      <a className="help" onClick={props.onClick}>
        <i className="far fa-question-circle" id="help4"/>
        <span className="popuptext" id="hoa-block">
           <b>HOMEOWNERS ASSOCIATION DUES</b>
           <br/>
          Typically, owners of condos or townhomes are required to pay homeowners association dues (known as HOA fees), to cover common amenities or services within the property such as garbage collection, landscaping, snow removal, pool maintenance, and hazard insurance.
        </span>
      </a>
      <span className="amount-input">$
      <input type="text" name="hoa_dues" pattern="[0-9]" value={props.item.hoa_dues}
             onChange={props.onChangeHandler} className="input-md"/><span>/month</span>
      </span>
    </label>
  </form>
)

export default Form;