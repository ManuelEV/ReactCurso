import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes"

describe('Pruebas en funciones de Héroes', () => {
    test('debe de retornar un herore por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })
    test('debe de retornar undefined si herore no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual( undefined );
    })

    test('debe de retornar un arreglo de los heroes DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroeData = heroes.filter( (heroe) => heroe.owner === owner );

        expect(heroes).toEqual(heroeData);
    })
    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    })
})