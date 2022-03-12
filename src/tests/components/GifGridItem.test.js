import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Title';
    const url = 'https://localhost/uwu.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);   

    test('Debe mostrar el contenido correctamente', () => { 
        expect( wrapper ).toMatchSnapshot(); 
    }) 

    test('Debe tener un parrafo con el title', () => { 
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe tener la imagen con url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Animación de carga', () => { 
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__backInLeft')).toBe(true);
    })
})