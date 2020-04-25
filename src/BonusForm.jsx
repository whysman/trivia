import React, { useState } from 'react';

const BonusForm = props => {

    const [answers, setAnswers] = useState({})
    const [disabled, setDisabled] = useState(false);

    const handleAnswerChange = event => {
        setAnswers(
            {
                ...answers,
                [event.target.name]: event.target.value
            });
        }

    const handleSubmit = event => {
        alert(`Answers: ${answers["1"]}, ${answers["2"]}, ${answers["3"]}, ${answers["4"]}`)
        setDisabled(true);
        event.preventDefault();
    }
    return (
        <div>
            <p>Bonus Round</p>
            <p>Fill out all fields before submitting</p>

            <form onSubmit={handleSubmit} name='bonus'>
                <ol>
                    <li><input type="text" name="1" value={answers["1"]} disabled={disabled} onChange={handleAnswerChange} /></li>
                    <li><input type="text" name="2" value={answers["2"]} disabled={disabled} onChange={handleAnswerChange} /></li>
                    <li><input type="text" name="3" value={answers["3"]} disabled={disabled} onChange={handleAnswerChange} /></li>
                    <li><input type="text" name="4" value={answers["4"]} disabled={disabled} onChange={handleAnswerChange} /></li>
                </ol>
                <input type="submit" value="Submit" disabled={disabled} />
            </form>
        </div>
    );
}

export default BonusForm;