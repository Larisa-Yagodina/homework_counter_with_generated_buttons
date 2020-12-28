import React from 'react'
import Buttons from "./Buttons";
import {v4 as uuidv4} from 'uuid';
import Controller from "./Controller";


function Counter(props) {

    const counter = props.counter;

    return (
        <div>
            {counter.buttons.map(el => <Buttons
                counter={counter}
                button={-el}
                operationPlusMinus={props.operationPlusMinus}
                key={uuidv4()}
            />)}
            {counter.number}
            {counter.buttons.reverse().map(el => <Buttons
                counter={counter}
                button={el}
                operationPlusMinus={props.operationPlusMinus}
                key={uuidv4()}
            />)}
            <Controller
                counter={counter}
                deleteCounterById={props.deleteCounterById}
            />
        </div>
    );
}

export default Counter;
