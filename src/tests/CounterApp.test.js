import React from 'react'
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prueba del componente CounterApp', () => {
    test('El componente debe tener una estructura HTML correcta', () => {
        const wrapper = shallow( <CounterApp /> )
        expect( wrapper ).toMatchSnapshot()
    })
    test('Compoenete debe retornar la linea evaluada segun el valor enviado 100', () => {
        const lineEval = shallow( <CounterApp value={ 100 } /> )
        const line = lineEval.find('h2').text().trim()
        expect( line ).toBe( '100' )
    })
    
    
})
