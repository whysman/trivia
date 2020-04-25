import React from 'react';
import StandardForm from './StandardForm';
import BonusForm from './BonusForm';

const FinalRound = () => (
    <div>
        <p>Final Round</p>
        <StandardForm type="" />
    </div>
);

const StandardRound = ({ type }) => (
    <div>
        <p>Round {type}</p>
        <ol>
            <li><StandardForm type={type + '-1'} /></li>
            <li><StandardForm type={type + '-2'} /></li>
            <li><StandardForm type={type + '-3'} /></li>
        </ol>
    </div>
);

const Round = ({ type }) => {
    if (type === "bonus") {
        return (<BonusForm />);
    } else if (type === "final") {
        return (<FinalRound />);
    } else {
        return (<StandardRound type={type} />);
    }
}
export default Round;