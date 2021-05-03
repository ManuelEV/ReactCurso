import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const onAdd = () => {
        setCounter(counter + 1)
        // setCounter( (c) => c + 1 );
    };
    const onSubtract = () => {
        setCounter(counter - 1)
    }
    const onReset = () => {
        setCounter(value)
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ onAdd }>ADD</button>
            <button onClick={ onSubtract }>SUBTRACT</button>
            <button onClick={ onReset }>RESET</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;