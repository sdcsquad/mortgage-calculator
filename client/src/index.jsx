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
        this.toggleClass = this.toggleClass.bind(this);
    }

    componentDidMount() {
        fetch('/prices?id=1')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    currentProperty: res[0]
                })
            })
            .catch((err) => {
                console.log(err);
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
        }, ()=>{this.toggleClass()});
    }

    render() {
        return (
            <div className="inner">
                <MortgageSection onClick={this.handleCollapse}/>
                {this.state.open === true ? <SubSection item={this.state.currentProperty}/> : null}
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('app'));
