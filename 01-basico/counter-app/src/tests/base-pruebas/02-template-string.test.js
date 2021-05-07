import '@testing-library/jest-dom';

import {getSaludo} from '../../base-pruebas/02-template-string';

describe('Pruebas del archivo 02-template-string', () => {
    test('getSaludo debe de retornar Hola Juan', () => {
        const nombre = 'Juan';
        
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');
    })
})