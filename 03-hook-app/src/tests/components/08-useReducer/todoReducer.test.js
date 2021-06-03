import { todoReducer } from "../../../components/08-useReducer/todoReducer"

import {demoTodos} from '../../fixtures/demoTodos'

describe('Pruebas en todoReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);

    })

    test('debe de agregar un TODO', () => {

        const newTodo = {
            id: 3,
            description: 'Aprender Node',
            done: false,
        }

        const state = todoReducer(demoTodos, {type: 'add', payload: newTodo});

        expect(state).toEqual([...demoTodos, newTodo]);

    })

    test('debe de borrar un TODO', () => {

        const todoId = 2;

        const state = todoReducer(demoTodos, {type: 'delete', payload: todoId});

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);

    })

    test('debe de marcar como done un TODO', () => {

        const todoId = 1;

        const state = todoReducer(demoTodos, {type: 'toggle', payload: todoId});

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);  

    })

})