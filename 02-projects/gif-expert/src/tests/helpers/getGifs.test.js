import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs - Fetch', () => {
    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('Bojack');

        expect(gifs.length).toBe(10);
    })

    test('debe gestionar la category vacía', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })
})