import React from 'react';

const Form = (props) => {
    console.log(props.check);
    return (
        <form className="form">
            <label>
                Home price
                <input type="text" name="home price" value={props.item.home_price}/>
            </label>
            <label>
                <span>Down payment</span>
                <input type="text" name="down payment" value={props.item.down_payment} className="inline"/>
                <input type="text" name="down payment percentage" className="inline box"/>
            </label>
            <label>
                Loan program
                <input type="text" name="loan program" value={props.item.loan_program}/>
            </label>
            <label>
                Interest rate
                <input type="text" name="interest rate" value={props.item.interest_rate}/>
            </label>
            <label className="check">
                <input type="checkbox" name="include pmi" checked={props.check}/>
                Include PMI
            </label>
            <label className="check">
                <input type="checkbox" name="include taxes/insurance" checked={props.check}/>
                Include taxes/insurance
            </label>
            <label>
                <span>Property tax</span>
                <input type="text" name="property tax" value={props.item.property_tax} className="inline"/>
                <input type="text" name="property tax percentage" className="inline box"/>
            </label>
            <label>
                Home insurance
                <input type="text" name="home insurance" value={props.item.home_insurance}/>
            </label>
            <label>
                HOA dues
                <input type="text" name="hoa dues" value={props.item.hoa_dues}/>
            </label>
        </form>
    );
}

export default Form;


{/*<input type="text" name="home price" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: pointer;">*/
}