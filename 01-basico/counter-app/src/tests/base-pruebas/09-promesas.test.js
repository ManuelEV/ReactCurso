import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas de Promesas', () => {
    test('debe de retornar un Heroe async', (done) => {
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                expect(heroe).toEqual(heroes[0]);
                done();
            });
    });
    test('debe de obtener un error si heroe no existe', (done) => {
        const id = 10;

        getHeroeByIdAsync( id )
            .catch(error => {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
})