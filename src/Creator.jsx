import React, {useState} from 'react'


function Creator(props) {

    const [newCounter, setNewCounter] = useState('')
    const [newButtons, setNewButtons] = useState('')

    const createButtonHandler = (newCounter, newButtons) => {
        props.createNewCounter(newCounter, newButtons)
        setNewCounter('');
        setNewButtons('')
    }

    return (
        <div>
            <input
                value={newCounter}
                onChange={(e) => setNewCounter(e.target.value)}
                placeholder='input new counter'
            />
            <input
                value={newButtons}
                onChange={(e) => setNewButtons(e.target.value)}
                placeholder='input number of buttons'
            />
            <button onClick={() => createButtonHandler(newCounter, newButtons)}> Create</button>
        </div>
    );
}

export default Creator;
