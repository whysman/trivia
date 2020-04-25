import React, { Component } from 'react';
import StandardForm from './StandardForm';
import BonusForm from './BonusForm';

class Round extends Component {
    render() {
        if (this.props.type === "bonus") {
            return (
                <div>
                    <p>Bonus Round</p>
                    <p>Fill out all fields before submitting</p>
                    <BonusForm />
                </div>
            )
        } else if (this.props.type === "final") {
            return (
                <div>
                    <p>Final Round</p>
                    <form>
                        <label>Answer: <input type="text" name="b1" /></label>
                        <label>Wager: <input type="text" name="b1" /></label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Round {this.props.type}</p>
                    <ol>
                        <li><StandardForm type={this.props.type + '-1'}/></li>
                        <li><StandardForm type={this.props.type + '-2'}/></li>
                        <li><StandardForm type={this.props.type + '-3'}/></li>
                    </ol>
                </div>
            )
        }
    }
}
export default Round;