//Es mejor sacar la función fuera del componente al mismo archivo o a otro para que no vuelva a (ejecutar la petición http) asignar un espacio en memoria.
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=f8qquV9kt4BjX5TWd8HFNEcj1T8sGo5K&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs)
    return gifs;
}