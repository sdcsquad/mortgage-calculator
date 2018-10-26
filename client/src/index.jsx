import React from 'react';
import ReactDOM from 'react-dom';
import SubSection from './components/SubSection.jsx';
import MortgageSection from './components/MortgageSection.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProperty: {},
            open: false
        };
        this.handleCollapse = this.handleCollapse.bind(this);
    }

    componentDidMount() {
        fetch('/prices?id=1')
            .then((res) => res.json())
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

    handleCollapse() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div>
                <MortgageSection onClick={this.handleCollapse}/>
                {this.state.open === true ? <SubSection item={this.state.currentProperty}/> : null}
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('app'));
