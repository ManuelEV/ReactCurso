import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter'

describe('Pruebas de useCounter', () => {

    test('debe de retornar valores por defecto', () => {
        const {result} = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    })

    test('el counter debe coincidir con el parámetro de la función', () => {
        const {result} = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);
    })

    test('debe de incrementar el counter en 1', () => {
        
        const {result} = renderHook(() => useCounter(100));

        const {increment} = result.current;

        act(() => increment());

        const {counter} = result.current;

        expect(counter).toBe(101);

    })

    test('debe de decrementar el counter en 1', () => {
        
        const {result} = renderHook(() => useCounter(100));

        const {decrement} = result.current;

        act(() => decrement());

        const {counter} = result.current;

        expect(counter).toBe(99);

    })

    test('debe de volver a 100 cuando se resetee el valor', () => {
        
        const {result} = renderHook(() => useCounter(100));

        const {increment, reset} = result.current;

        act(() => increment());

        act(() => reset());

        const {counter} = result.current;

        expect(counter).toBe(100);

    })

})