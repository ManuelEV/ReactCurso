import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones'


describe('Pruebas de 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Juanito';
        const userTest = {
            'uid': 'ABC567',
            username: name,
        }
        const user = getUsuarioActivo(name);

        expect(user).toEqual(userTest);
    })
})