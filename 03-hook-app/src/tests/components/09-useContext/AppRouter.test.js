import React from 'react';
import {mount} from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Pruebas en el componente AppRouter', () => {

    const user = {name: 'Juanito', email: 'juanito@gmail.com'};

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

});