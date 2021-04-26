
describe('Pruebas en demo.test.js', () => {
    test('debe pasar', () => {
        // inicialización
        const mensaje1 = 'Hola mundo';
        // estímulo
        const mensaje2 = `Hola mundo`;
        //Observar el comportamiento (toBe())
        expect( mensaje1 ).toBe( mensaje2 )
    
    })    
})
