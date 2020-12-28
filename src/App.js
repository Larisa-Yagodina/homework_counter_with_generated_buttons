import React, {useState} from 'react'
import './App.css';
import Counter from "./Counter";
import Creator from "./Creator";
import {v4 as uuidv4} from 'uuid';

function App() {

    const [counters, setCounters] = useState([
        {id: 1, number: 1, buttons: [1,]},
        {id: 2, number: 2, buttons: [1, 2,]},
        {id: 3, number: 3, buttons: [1, 2, 3,]},
    ])

    const operationPlusMinus = (id, digit) => {
        const newCounter = counters.map(el => {
            if (el.id === id) {
                return {...el, number: el.number + digit}
            }
            return el;
        })
        setCounters(newCounter)
    }

    const createNewCounter = (newCounter, newButtons) => {
        const newArrayOfButtons = [];
        for (let i = 1; i <= newButtons; i++) {
            newArrayOfButtons.push(i)
        }
        const newCounters = [...counters, {id: uuidv4(), number: +newCounter, buttons: newArrayOfButtons}];
        setCounters(newCounters)
    }

    const deleteCounterById = (id) => {
        const newCounters = counters.filter(el => el.id !== id);
        setCounters(newCounters)
    }

    return (
        <div>
            <h1> Counter with how-much-you-want buttons</h1>
            <hr/>
            <Creator createNewCounter={createNewCounter}/>
            <hr/>
            {counters.map(el => <Counter
                counter={el}
                operationPlusMinus={operationPlusMinus}
                deleteCounterById={deleteCounterById}
                key={el.id}
            />)}
        </div>
    );
}

export default App;
