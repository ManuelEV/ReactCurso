import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo =  {
            id: new Date().getTime(),
            description,
            done: false,
        };

        handleAddTodo(newTodo);
        
        reset();
    }





    return (
        <>
            <h4>Agregar tarea</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="nombre de tu tarea"
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>   
        </>
    )
}
