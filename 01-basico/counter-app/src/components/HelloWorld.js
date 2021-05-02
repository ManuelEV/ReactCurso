import React from 'react';
import PropTypes from 'prop-types';
// Functional component
const HelloWorld = ({ myProp }) => {
    const testVar = 'XD';
    const object = {
        name: 'Juan',
        age: 20,
    };
    return (
        <>
            <h1>Hello World</h1>
            <h1>{ myProp }</h1>
            <p>{ testVar }</p>
            <pre>{JSON.stringify(object, null, 3)}</pre>
        </>
    );
}

HelloWorld.propTypes = {
    myProp: PropTypes.string.isRequired,
}

export default HelloWorld;