import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 16, 2018',
            newDeadLine: ''
        }
    }

    changeDeadline() {
        if (this.state.newDeadLine) {
            this.setState({ deadline: this.state.newDeadLine });
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline} />
                <Form inline>
                    <FormControl
                        className="Deadline-input"
                        onChange={event => this.setState({ newDeadLine: event.target.value })}
                        type="text"
                        placeholder='new date' />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>



        )
    }
}

export default App;