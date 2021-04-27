import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"

describe('Pruebas en <PrimeraApp/>', () => {
    test('Prueba que retorna un string de saludo', () => {
        const saludo = 'Hola soy Jonathan'
        const { getByText } = render( <PrimeraApp saludo={saludo} /> )
        expect( getByText(saludo) ).toBeInTheDocument( )
    })
    
})
