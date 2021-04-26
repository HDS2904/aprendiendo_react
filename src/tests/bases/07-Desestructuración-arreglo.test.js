import { getArreglo } from "../../bases/07-Desestructuración-arreglo"

describe('Prueba del archivo 07-Desestructuración-arreglo.js', () => {
    test('Función getArreglo que devuelve un string y un numero', () => {
        
        const [ letras, numeros ] = getArreglo()

        expect( letras ).toBe( 'ABC' )
        expect( typeof letras ).toBe( 'string' )
        
        expect( numeros ).toBe( 123 )
        expect( typeof numeros ).toBe( 'number' )
    })
    
})
