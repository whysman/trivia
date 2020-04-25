import React, { useState } from 'react';

const StandardForm = props => {

    const [answer, setAnswer] = useState();
    const [wager, setWager] = useState();
    const [disabled, setDisabled] = useState(false);

    const handleAnswerChange = event => { setAnswer(event.target.value); }
    const handleWagerChange = event => { setWager(event.target.value); }
    const handleSubmit = event => {
        alert(`Submitted Answer: ${answer} Wager: ${wager}`);
        setDisabled(true);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} name={props.type}>
            <label>Answer: <input type="text" value={answer} disabled={disabled} onChange={handleAnswerChange} /></label>
            <label>Wager: <input type="number" value={wager} disabled={disabled} onChange={handleWagerChange} min="1" step=".01" /></label>
            <input type="submit" value="Submit" disabled={disabled} />
        </form>
    );
}

export default StandardForm;