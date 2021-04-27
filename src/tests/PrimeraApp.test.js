import React from 'react'
import { shallow } from 'enzyme';
// import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"

describe('Pruebas en <PrimeraApp/>', () => {
    // test('Prueba que retorna un string de saludo', () => {
    //     const saludo = 'Hola soy Jonathan'
    //     const { getByText } = render( <PrimeraApp saludo={saludo} /> )
    //     expect( getByText(saludo) ).toBeInTheDocument( )
    // })
    
    test('Prueba que retorna <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola soy Jonathan'
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> )
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Prueba con subtitulo del snapshot', () => {
        const greet = 'Hola soy Jonathan'
        const subtitle = 'Un subtitulo por defecto'
        const wrapper = shallow( <PrimeraApp saludo={greet} subtitulo={subtitle} /> )
        const textTest = wrapper.find('p').text();
        expect( textTest ).toBe( subtitle )
        
    })

})
