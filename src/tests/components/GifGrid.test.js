import React from 'react';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
    
    const gifs = [
        {
            id: 'ABC',
            url: 'https://sth.com/uwu.jpg',
            title: 'uwu',
        },
        {
            id: 'XYZ',
            url: 'https://sth.com/owo.jpg',
            title: 'owo',
        },
    ];

    const category = 'Pokémon'; 

    test('Debe mostrar el contenido correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        })
        const wrapper = shallow(<GifGrid category={category} />); 
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        })
        const wrapper = shallow(<GifGrid category={category} />);

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    })

})