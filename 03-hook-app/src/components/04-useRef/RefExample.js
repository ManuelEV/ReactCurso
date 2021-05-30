import React, {useState} from 'react'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'
import './effect.css'

export const RefExample = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Ref example, real world :o</h1>

            <hr />

            { show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-5"
                onClick={() => setShow(!show)}
            >
                Toggle
            </button>
        </div>
    )
}
