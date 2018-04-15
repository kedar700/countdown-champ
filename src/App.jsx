import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button, Alert } from 'react-bootstrap';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            deadline: 'December 16, 2018',
            newDeadLine: '',
            show: false
        }
    }

    changeDeadline() {
        if (this.state.newDeadLine) {
            this.setState({ deadline: this.state.newDeadLine });
        } else {
            this.handleShow();
        }

    }

    handleDismiss() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

    render() {
        if (this.state.show) {
            return (
              <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                <h4>Oh snap! You got an error!</h4>
                <p>
                  Please enter the date in the format that is given in the heading.
                </p>
                <p>
                  <Button onClick={this.handleDismiss}>Hide Alert</Button>
                </p>
              </Alert>
            );
          }


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