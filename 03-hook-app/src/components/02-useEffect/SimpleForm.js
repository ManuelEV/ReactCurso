import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const {name, email} = formState;

    useEffect( () => {
        
    }, [] );

    useEffect( () => {
        
    }, [formState] );

    useEffect( () => {
        
    }, [email] );


    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="tucorreo@dominio.cl"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === 'probando') && <Message />}

        </>
    )
}
