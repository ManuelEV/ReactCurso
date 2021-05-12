import React from 'react';
import CounterApp from '../CounterApp'
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en componente CounterApp', () => {
    // esto se hace solamente para no perder las sugerencias del vscode
    let wrapper = shallow(<CounterApp />);
    // let wrapper;   <----------

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el número inicial enviado por props', () => {

        const number = 100;
        const wrapper = shallow(<CounterApp value= {number} />);

        // trim() borra los espacios en ambos lados
        const textoParrafo = wrapper.find('h2').text().trim();

        expect(Number(textoParrafo)).toBe(number);

    })

    test('debe de incrementar con el botón de +1', () => {

        wrapper.find('button').at(0).simulate('click');
        // btn1.html  --> para ir viendo el contenido del botón
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    })

    test('debe de decrementar con el botón de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
    })

    test('debe de colocar el valor por defecto con btn reset', () => {
        const number = 105;
        const wrapper = shallow(<CounterApp value= {number} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
    })

})