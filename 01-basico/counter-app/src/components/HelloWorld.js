import React from 'react';
// Functional component
const HelloWorld = () => {
    const testVar = 'XD';
    const object = {
        name: 'Juan',
        age: 20,
    };
    return (
        <>
            <h1>Hello World</h1>
            <p>{ testVar }</p>
            <pre>{JSON.stringify(object, null, 3)}</pre>
        </>
    );
}

export default HelloWorld;