import {render} from '@testing-library/react'
import React from 'react';
import PrimeraApp from '../PrimeraApp'
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en PrimeraApp', () => {

    // JEST WAY
    /*
    test('debe de mostrar el mensaje "Hola soy Juan"', () => {

        const saludo = 'Hola, soy Juan'
        const {getByText} = render ( <PrimeraApp saludo= {saludo}/> );

        expect(getByText(saludo)).toBeInTheDocument();
    })
    */


    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Juan';
        const wrapper = shallow(<PrimeraApp saludo= {saludo}/>);

        expect(wrapper).toMatchSnapshot();
    })

})