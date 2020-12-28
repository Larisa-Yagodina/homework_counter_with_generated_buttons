import React from 'react'


function Buttons(props) {

    const {counter, button} = props;

    return (
        <>
            <button onClick={() => props.operationPlusMinus(counter.id, button)}> {button} </button>
        </>
    );
}

export default Buttons;
