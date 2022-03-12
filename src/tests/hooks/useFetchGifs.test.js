import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"


describe('Pruebas en el hook useFetchGifs', () => {

    const category = 'UwU';
     
    test('Debe obtener estado inicial', async() => { 
        // const { data, loading } = useFetchGifs( category );
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();
    })

    test('Debe retornar arreglo de imgs y loading false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        await waitForNextUpdate();
        
        const { data, loading } = result.current;
        
        expect( data.length ).toBe(10);
        expect( loading ).toBeFalsy();
    })
})