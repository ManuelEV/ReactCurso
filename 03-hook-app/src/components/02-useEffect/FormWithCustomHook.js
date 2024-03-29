import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('cambios en el email')
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Fowm with custom hook</h1>
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
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="**********"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
