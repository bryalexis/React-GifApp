import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    })

    test('Debe mostrar el contenido correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe actualizar input de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hello';
        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe( value );
    })

    test('No debe hacer POST on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('Debe llamar a setCategories y limpiar input', () => {
        const value = 'OwO';
        wrapper.find('input').simulate('change', { target: { value }});
        wrapper.find('form').simulate('submit', { preventDefault(){} });
 
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    })

}) 