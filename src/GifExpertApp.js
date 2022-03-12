import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ({ defaultCategories = [] }) => {
    // const categories = ['Shingeki No Kyojin', 'Naruto', 'Nanatsu No Taizai'];
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Hajime No Ippo']);
    //     setCategories(cats => [...cats, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
