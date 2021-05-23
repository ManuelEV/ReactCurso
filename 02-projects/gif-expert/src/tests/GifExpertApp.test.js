import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {GifExpertApp} from '../GifExpertApp';


describe('Pruebas en el componente GifExpertApp', () => {


    test('debe de coincidir el SnapShot', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorías', () => {
        const categories = ['One Punch', 'Shingeki'];
        const wrapper = shallow(<GifExpertApp defaultCategories= {categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

})