import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const baseUrl = 'https://api.giphy.com/v1/gifs/search?limit=10';
        const query = category;
        const apiKey = 'N2klpHspRpcd7vphx0sGYSeBlOd60YyH';
        const url = baseUrl + '&q=' + query + '&api_key=' + apiKey;

        const response = await fetch(url);

        const {data} = await response.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages(gifs);
    }

    getGifs();

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                    {
                        images.map((img) => (
                            <GifGridItem 
                                key = {img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}
