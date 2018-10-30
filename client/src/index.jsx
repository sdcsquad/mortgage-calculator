import React from 'react';
import ReactDOM from 'react-dom';
import SubSection from './components/SubSection.jsx';
import MortgageSection from './components/MortgageSection.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValues: {},
            payments: {},
            open: false
        };
        this.handleCollapse = this.handleCollapse.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.calculatePayments = this.calculatePayments.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // console.log(window.location.pathname);
        let id = 2;
        fetch('/api/homes/'+id+'/prices')
            .then((res) => res.json())
            .then((res) => {
                res[0]['loan_program'] = '30-year fixed';
                res[0]['down_payment_percentage'] = 20;
                res[0]['property_tax_percentage'] = ((res[0]['property_tax']/res[0]['home_price']) * 100).toFixed(2);
                res[0]['down_payment_amount']= Math.floor(res[0]['home_price'] * res[0]['down_payment_percentage']/100);
                res[0]['interest_rate'] = 4.5;
                this.setState({
                    currentValues: res[0]
                }, ()=>{this.calculatePayments()})
            })
            .catch((err) => console.log(err))
    }

    calculatePayments() {
        console.log(this.state.currentValues);
        let homePrice = this.state.currentValues.home_price;
        let propertyTax = this.state.currentValues.property_tax;
        let homeInsurance = this.state.currentValues.home_insurance;
        let hoaDues = this.state.currentValues.hoa_dues;
        let downPaymentAmount = this.state.currentValues.down_payment_amount;
        let interestRate = this.state.currentValues.interest_rate;

        let loanAmount = homePrice - downPaymentAmount;
        let firstMonthPrincipal = Math.floor((loanAmount * 1.2/100)/12);
        let firstMonthInterest = Math.floor((loanAmount * interestRate/100)/12);
        let firstYearPandI = firstMonthPrincipal + firstMonthInterest;
        let monthlyPayment = firstYearPandI + propertyTax + homeInsurance + hoaDues;

        let paymentObj ={
            PI : firstYearPandI,
            insurance: this.state.currentValues.home_insurance,
            taxes: this.state.currentValues.property_tax,
            PMI: 0,
            HOA: this.state.currentValues.hoa_dues,
            monthlyPayment: monthlyPayment,
        };
        this.setState({
            payments: paymentObj
        })
    }

    toggleClass(){
        let item = document.getElementsByClassName('fas');
        if(this.state.open === true) {
            item[0].classList.remove('fa-angle-up');
            item[0].classList.add("fa-angle-down");
        }else{
            item[0].classList.add('fa-angle-up');
            item[0].classList.remove("fa-angle-down");
        }
    }

    handleCollapse() {
        this.setState({
            open: !this.state.open
        }, ()=> this.toggleClass());
    }

    handleChange(e){
        let targetName = e.target.name;
        let targetValue = e.target.value;
        let currentValues = Object.assign({}, this.state.currentValues);

        if(targetName !== 'loan_program'){
            targetValue = parseFloat(targetValue);
        }

        if(targetName === 'down_payment_percentage'){
            currentValues['down_payment_amount'] = Math.floor(this.state.currentValues.home_price * targetValue/100);
        }else if(targetName === 'down_payment_amount'){
            currentValues['down_payment_percentage'] = ((targetValue/this.state.currentValues.home_price) * 100).toFixed(0);
        }else if(targetName === 'property_tax') {
            currentValues['property_tax_percentage'] = ((targetValue/this.state.currentValues.home_price) * 100).toFixed(2);
        }else if(targetName === 'property_tax_percentage') {
            currentValues['property_tax'] = Math.floor(this.state.currentValues.home_price * targetValue/100);
        }

        currentValues[targetName] = targetValue;
        this.setState({
            currentValues : currentValues
        }, ()=> this.calculatePayments());
    }

    render() {
        return (
            <div className="inner">
                <MortgageSection onClick={this.handleCollapse}/>
                {this.state.open === true ? <SubSection item={this.state.currentValues} payments = {this.state.payments} onChangeHandler={this.handleChange}/> : null}
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('app'));
