import React, { Component } from 'react';

class StandardForm extends Component {
    constructor(props) {
        super(props);
        this.state = { answer: '', wager: '', disabled: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleWagerChange = this.handleWagerChange.bind(this);
    }
    handleAnswerChange(event) { this.setState({answer: event.target.value}); }
    handleWagerChange(event) { this.setState({wager: event.target.value}); }
    handleSubmit(event) {
        alert('A name was submitted: ' + event);
        this.setState({ disabled: 'disabled' });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} name={this.props.type}>
                <label>Answer: <input type="text" value={this.state.answer} disabled={this.state.disabled} onChange={this.handleAnswerChange} /></label>
                <label>Wager: <input type="text" value={this.state.points} disabled={this.state.disabled} onChange={this.handleWagerChange} /></label>
                <input type="submit" value="Submit" disabled={this.state.disabled} />
            </form>
        );
    }
}

export default StandardForm;