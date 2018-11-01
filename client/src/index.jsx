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
      open: false,
      popUpStatus: false,
      isChecked: true
    };
    this.handleCollapse = this.handleCollapse.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.calculatePayments = this.calculatePayments.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePopUp = this.handlePopUp.bind(this);
    this.formatCurrency = this.formatCurrency.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.state.popUpStatus === true && (!e.target.id || e.target.id !== 'help1' && e.target.id !== 'help2' && e.target.id !== 'help3' && e.target.id !== 'help4')) {
        this.setState({
          popUpStatus: false,
        }, () => {
          const popUp = document.getElementsByClassName('popuptext');
          for (let i = 0; i < popUp.length; i++) {
            popUp[i].classList.remove('show');
          }
        });
      }
    });
    const id = 2;
    fetch(`/api/homes/${id}/prices`)
      .then(res => res.json())
      .then((res) => {
        res[0].loan_program = '30-year fixed';
        res[0].down_payment_percentage = 20;
        res[0].property_tax_percentage = ((res[0].property_tax / res[0].home_price) * 100).toFixed(2);
        res[0].down_payment_amount = Math.floor(res[0].home_price * res[0].down_payment_percentage / 100);
        res[0].interest_rate = 4.5;
        this.setState({
          currentValues: res[0],
        }, () => {
          this.calculatePayments();
        });
      })
      .catch(err => console.log(err));
  }

  calculatePayments() {
    const homePrice = this.state.currentValues.home_price;
    const propertyTax = this.state.currentValues.property_tax;
    const homeInsurance = this.state.currentValues.home_insurance;
    const hoaDues = this.state.currentValues.hoa_dues;
    const downPaymentAmount = this.state.currentValues.down_payment_amount;
    const interestRate = this.state.currentValues.interest_rate;

    const loanAmount = homePrice - downPaymentAmount;
    const firstMonthPrincipal = Math.floor((loanAmount * 1.2 / 100) / 12);
    const firstMonthInterest = Math.floor((loanAmount * interestRate / 100) / 12);
    const firstYearPandI = firstMonthPrincipal + firstMonthInterest;
    const monthlyPayment = firstYearPandI + propertyTax + homeInsurance + hoaDues;

    const paymentObj = {
      PI: firstYearPandI,
      insurance: this.state.currentValues.home_insurance,
      taxes: this.state.currentValues.property_tax,
      PMI: 0,
      HOA: this.state.currentValues.hoa_dues,
      monthlyPayment,
    };
    this.setState({
      payments: paymentObj,
    }, () => {
      this.formatCurrency();
    });
  }

  formatCurrency() {
    const payments = Object.assign({}, this.state.payments);
    for (const key in payments) {
      payments[key] = payments[key].toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      });
    }
    this.setState({
      payments,
    });
  }

  toggleClass() {
    const item = document.getElementsByClassName('fas');
    if (this.state.open === true) {
      item[0].classList.remove('fa-angle-up');
      item[0].classList.add('fa-angle-down');
    } else {
      item[0].classList.add('fa-angle-up');
      item[0].classList.remove('fa-angle-down');
    }
  }

  handleCollapse() {
    this.setState({
      open: !this.state.open,
    }, () => this.toggleClass());
  }

  handleChange(e) {
    const targetName = e.target.name;
    let targetValue = e.target.value;
    const currentValues = Object.assign({}, this.state.currentValues);

    if (targetName !== 'loan_program') {
      targetValue = parseFloat(targetValue);
    }

    if (targetName === 'down_payment_percentage') {
      currentValues.down_payment_amount = Math.floor(this.state.currentValues.home_price * targetValue / 100);
    } else if (targetName === 'down_payment_amount') {
      currentValues.down_payment_percentage = ((targetValue / this.state.currentValues.home_price) * 100).toFixed(0);
    } else if (targetName === 'property_tax') {
      currentValues.property_tax_percentage = ((targetValue / this.state.currentValues.home_price) * 100).toFixed(2);
    } else if (targetName === 'property_tax_percentage') {
      currentValues.property_tax = Math.floor(this.state.currentValues.home_price * targetValue / 100);
    }
    currentValues[targetName] = targetValue;
    this.setState({
      currentValues,
    }, () => this.calculatePayments());
  }

  handlePopUp(e) {
    e.stopPropagation();
    const {id} = e.currentTarget.children[1];
    const popUpEl = document.getElementById(id);
    popUpEl.classList.toggle('show');
    const allPopUpEl = document.getElementsByClassName('popuptext');
    for (let i = 0; i < allPopUpEl.length; i++) {
      if (allPopUpEl[i].id !== id) {
        allPopUpEl[i].classList.remove('show');
      }
    }
    this.setState({
      popUpStatus: !this.state.popUpStatus,
    });
  }

  render() {
    return (
      <div className="inner">
        <MortgageSection onClick={this.handleCollapse}/>
        {this.state.open === true ?
          <SubSection item={this.state.currentValues} payments={this.state.payments}
                      onChangeHandler={this.handleChange}
                      onClick={this.handlePopUp} /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
