import {getImagen} from '../../base-pruebas/11-async-await';

describe('Pruebas de async await', () => {
    test('debe de retornar el url de la imagen', async () => {
        
        const url = await getImagen();

        expect(typeof url).toBe('string');

    })
    test('la url debe empezar con https', async () => {
        
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true);

    })
})