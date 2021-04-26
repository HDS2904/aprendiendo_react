import { getHeroeById, getHeroeByOwner } from '../../bases/08-import-export-funciones';
import heroes from '../../data/heroes';

describe('Prueba del archivo 08-import-export-funciones', () => {
    test('función getHeroeById retorna un heroe', () => {
        const id = 10;
        const heroeBus = getHeroeById( id )
        const heroeTest = heroes.find( i => i.id === id )
        expect( heroeBus ).toBe( heroeTest )
    })

    test('función getHeroeById retorna undefine si no existe el id', () => {
        const id = 101;
        const heroeBus = getHeroeById( id )
        expect( heroeBus ).toBe( undefined )
    })

    test('función getHeroeByOwner retorna arreglo con heroes de DC', () => {
        const cadena = 'DC'
        const arregloTest = heroes.filter( item => item.owner === cadena)
        const arregloData = getHeroeByOwner(cadena)
        expect( arregloData ).toEqual( arregloTest )
    })

    test('función getHeroeByOwner retorna arreglo con heroes de Marbel', () => {
        const cadena = 'Marvel'
        const arregloData = getHeroeByOwner(cadena)
        expect( arregloData.length ).toBe( 2 )
    })

    test('función getHeroeByOwner retorna undefine si owner no existe', () => {
        const cadena = 'otros'
        const arregloData = getHeroeByOwner(cadena)
        expect( arregloData.length ).toBe( 0 )
    })
    
    
})
