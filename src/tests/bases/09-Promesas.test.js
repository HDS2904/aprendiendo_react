import { getHeroeByIdAsync } from '../../bases/09-Promesas';
import heroes from "../../data/heroes";

//Poner done como argumento hace que las pruebas reconozcan que hay operaciones asyncronas
describe('Pruebas con ela rchivo 09-Promesas', () => {

    test('función getHeroeByIdAsync que retorna un heroe', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( (heroe) => {
                expect( heroe ).toBe( heroes[0] )
                done()
            })
    })

    test('función getHeroeByIdAsync que retorna mensaje de error al no existir el id', ( done ) => {
        const id = 10;
        getHeroeByIdAsync( id )
            .catch((error) => {
                expect( error ).toBe( 'error al encontrar datos' )
                done()
            })
    })
    
})
