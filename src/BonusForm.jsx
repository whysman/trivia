import React, { Component, useState } from 'react';

class BonusForm extends Component {
    constructor(props) {
        super(props);
        this.state = { answer1: '', answer2: '', answer3: '', answer4: '', disabled: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswer1Change = this.handleAnswer1Change.bind(this);
        this.handleAnswer2Change = this.handleAnswer2Change.bind(this);
        this.handleAnswer3Change = this.handleAnswer3Change.bind(this);
        this.handleAnswer4Change = this.handleAnswer4Change.bind(this);
    }
    handleAnswer1Change(event) { this.setState({ answer1: event.target.value }); }
    handleAnswer2Change(event) { this.setState({ answer2: event.target.value }); }
    handleAnswer3Change(event) { this.setState({ answer3: event.target.value }); }
    handleAnswer4Change(event) { this.setState({ answer4: event.target.value }); }

    handleSubmit(event) {
        this.setState({ disabled: 'disabled' });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <p>Bonus Round</p>
                <p>Fill out all fields before submitting</p>

                <form onSubmit={this.handleSubmit} name='bonus'>
                    <ol>
                        <li><input type="text" value={this.state.answer1} disabled={this.state.disabled} onChange={this.handleAnswer1Change} /></li>
                        <li><input type="text" value={this.state.answer2} disabled={this.state.disabled} onChange={this.handleAnswer2Change} /></li>
                        <li><input type="text" value={this.state.answer3} disabled={this.state.disabled} onChange={this.handleAnswer3Change} /></li>
                        <li><input type="text" value={this.state.answer4} disabled={this.state.disabled} onChange={this.handleAnswer4Change} /></li>
                    </ol>
                    <input type="submit" value="Submit" disabled={this.state.disabled} />
                </form>
            </div>
        );
    };
}

export default BonusForm;

const AnswerRow = (props) => {
    const [answer, setAnswer] = useState()

    const handleAnswerChange = (event) => { setAnswer(event.target.value); }
    return (
        <li>
            <input type="text" value={answer} disabled={props.disabled} onChange={handleAnswerChange} />
        </li>);
}