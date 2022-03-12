import { getGifs } from '../../helpers/getGifs';

describe('Tests para helper getGifs', () => { 
    
    test('Debe traer 10 elementos', async () => { 
        const gifs = await getGifs('all might');
        expect(gifs.length).toBe(10);
    })

    test('Categoría vacía', async () => { 
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})