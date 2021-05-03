import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(0);

    const onAdd = () => {
        setCounter(counter + 1)
        // setCounter( (c) => c + 1 );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ onAdd }>ADD</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;