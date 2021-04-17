import { getHeroeById } from './bases/09-export-and-import';

// PROMESAS
const promesa = new Promise( ( resolve, reject ) => {
    setTimeout( () =>{
        const heroe = getHeroeById(2);
        resolve(heroe);
        reject('error al encontrar datos')
    }, 2000 )
});

promesa.then( (res) => {
    console.log(res);
})
.catch( err => console.log(err))




const getHeroe = ( id ) =>{
    return new Promise( ( resolve, reject ) => {
        setTimeout( () =>{
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            }else {
                reject('error al encontrar datos')
            }
        }, 2000 )
    });
}

getHeroe(12)
    .then( console.log)     // ALGO NUEVO
    .catch( console.warn)   // ALGO NUEVO
