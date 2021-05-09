import React from 'react';
import PrimeraApp from '../PrimeraApp'
import {render} from '@testing-library/react'

describe('Pruebas en PrimeraApp', () => {

    test('debe de mostrar el mensaje "Hola soy Juan"', () => {

        const saludo = 'Hola, soy Juan'
        const {getByText} = render ( <PrimeraApp saludo= {saludo}/> );

        expect(getByText(saludo)).toBeInTheDocument();
    })

})