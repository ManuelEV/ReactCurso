import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {GifGrid} from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente GifGid', () => {

    const category = 'Rick and Morty'
    

    test('debe de coincidir el SnapShot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'abc',
                url: 'http://localhost',
                title: 'Cualquier cosa'
            },
            {
                id: '123',
                url: 'http://localhost',
                title: 'Cualquier cosa 2'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        
        expect(wrapper.find('p').exists()).toBe(false);

        // revisa que la cantidad de gifs sea igual a las veces que se renderiza GifGridItem
        
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })

})

