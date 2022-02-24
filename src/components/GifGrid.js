import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
    
    // useEffect( () => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category]) // Si la categoría cambia se actualiza el componente

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='gifItem-grid'> 
            {
                images.map( img => (
                    <GifGridItem key={img.id} {...img} />
                ))
            }
            </div>
        </>
    )
}
