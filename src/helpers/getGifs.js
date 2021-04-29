
export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=uGVVa23uqkXVnyco6Ztdkc5Xut4ZpaCL`;
    const resp = await fetch(URL);
    const {data} = await resp.json();
    const gifs = data.map( item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url,
        }
    })
    return gifs;
}