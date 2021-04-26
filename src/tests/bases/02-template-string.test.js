
import { getName } from '../../bases/02-template-string';

describe('Pruebas 02-template-string.js', () => {
    test('getName esperando presentación "Hola, me llamo Jonathan"', () => {
        const nombre = 'Jonathan';
        const presentacion = getName( nombre );
        expect( presentacion ).toBe( 'Hola, me llamo ' + nombre )
    })
    test('getName esperando presentación "Hola, me llamo Jonathan" si no hay argumentos', () => {
        const presentacion = getName( );
        expect( presentacion ).toBe( 'Hola, me llamo Carlos' )
    })
    
})
