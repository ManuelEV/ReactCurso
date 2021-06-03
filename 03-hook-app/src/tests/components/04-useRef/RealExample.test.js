import React from 'react';
import {shallow} from 'enzyme';
import { RealExample } from "../../../components/04-examples/RealExample"

describe('Pruebas en RealExample', () => {

    const wrapper = shallow(<RealExample />)

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('debe de mostrar el componente MultipleCustomHooks', () => {

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

})