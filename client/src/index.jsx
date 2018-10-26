import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import Analytics from './components/Analytics.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProperty: {
                home_price: 0,
                down_payment: 0,
                loan_program: 0,
                interest_rate: 0,
                private_mortgage_insurance: 0,
                taxes_and_insurance: 0,
                property_tax: 0,
                home_insurance: 0,
                hoa_dues: 0
            },
            checked: {
                pmiChecked: true,
                taxInsuranceChecked: true
            }
        }
    }

    componentDidMount() {
        fetch('/prices?id=1')
            .then((res) => {
                    return res.json();
                }
            )
            .then((res) => {
                this.setState({
                    currentProperty: res[0]
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        console.log(this.state.currentProperty);
        return (
            <table>
                <thead>
                <tr>
                    <td><Form item={this.state.currentProperty} check={this.state.pmiChecked}/></td>
                    <td><Analytics/></td>
                </tr>
                </thead>

            </table>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));