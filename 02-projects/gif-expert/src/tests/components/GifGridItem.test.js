import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';
import '@testing-library/jest-dom';
import React from 'react';


describe('Pruebas del componente GifGridItem', () => {

    const title = 'test title';
    const url = 'http://localhost/example';

    let wrapper = shallow(<GifGridItem title={title} url={url} />);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    });

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title)
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //  img.props()  ---> objeto con todos los props
        //  img.prop('src')  ---> directamente el prop que deseo

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');

        const className = div.prop('className');
        const expectedClassName = 'animate__fadeIn'
        expect(className.includes(expectedClassName)).toBe(true);

    })
    
})