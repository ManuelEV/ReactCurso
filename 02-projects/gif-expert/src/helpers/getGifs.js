

export const getGifs = async( category ) => {
    const baseUrl = 'https://api.giphy.com/v1/gifs/search?limit=10';
    const apiKey = 'N2klpHspRpcd7vphx0sGYSeBlOd60YyH';
    const url = `${baseUrl}&q=${encodeURI(category)}&api_key=${apiKey}`;
    const response = await fetch(url);

    const {data} = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}