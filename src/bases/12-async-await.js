const API_KEY = 'uGVVa23uqkXVnyco6Ztdkc5Xut4ZpaCL'

const getImagen = async () =>{

    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.log(error);
    }

}

getImagen()