import React, { Component } from 'react';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 16, 2018',
            newDeadLine: ''
        }
    }

    changeDeadline() {
        this.setState({ deadline: this.state.newDeadLine });
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <div>
                    <div className="Clock-days">14 days</div>
                    <div className="Clock-hours">30 hours</div>
                    <div className="Clock-minutes">15 minutes</div>
                    <div className="Clock-seconds">20 seconds</div>
                </div>
                <div>
                    <input onChange={event => this.setState({ newDeadLine: event.target.value })}
                        type="text"
                        placeholder='newdate' />
                    <button onClick={() => this.changeDeadline()}>Submit</button>
                </div>
            </div>



        )
    }
}

export default App;