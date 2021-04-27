import { getHeroeById } from '../bases/08-import-export-funciones';

// PROMESAS
export const getHeroeByIdAsync = ( id ) =>{
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