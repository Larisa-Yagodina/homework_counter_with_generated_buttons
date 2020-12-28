import React from 'react'


function Controller(props) {


    return (
        <>
            <button onClick={() => props.deleteCounterById(props.counter.id)}> delete</button>
        </>
    );
}

export default Controller;
