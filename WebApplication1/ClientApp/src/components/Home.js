import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0,
            fizzBuzz: this.determineFizzBuzzValue(0)
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
            fizzBuzz: this.determineFizzBuzzValue(event.target.value)
        });
    }

    determineFizzBuzzValue(integer) {
        if (integer.length === 0)
            return 'Please enter an input';

        if (integer % 3 === 0 && integer % 5 === 0)
            return 'FizzBuzz';

        if (integer % 3 === 0)
            return 'Fizz';

        if (integer % 5 === 0)
            return 'Buzz';

        return integer;
    }

    render() {
        return (
            <div>
                <p>Here are the rules of the game and it should be pretty simple. I'll give you a numeric input field and when you put a number in it you'll see one of four things.</p>
                <ul>
                    <li>Fizz if it's divisible by 3</li>
                    <li>Buzz if it's divisible by 5</li>
                    <li>FizzBuzz if it's divisible by 3 and 5</li>
                    <li>I'll just give you your number back if it's divisible by neither</li>
                </ul>
                    
                <form>
                    <TextField
                        id="standard-number"
                        label="Input"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                </form>
                <p>Result: {this.state.fizzBuzz}</p>
            </div>
        );
    }
}
