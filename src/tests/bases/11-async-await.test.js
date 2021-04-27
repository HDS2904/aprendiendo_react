import { getImagen } from '../../bases/11-async-await';

describe('Prueba del archivo 11-async-await', () => {
    test('Función getImagen que retorna una URL valida', async () => {
        const url = await getImagen();
        expect( url.includes('https://') ).toBe( true );
    })
    
})
