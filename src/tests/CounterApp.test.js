import React from 'react'
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prueba del componente CounterApp', () => {
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    })

    // Prueba 1 del contenido del componente
    test('El componente debe tener una estructura HTML correcta', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    //Prueba d2 del contenido de la variable al inicio
    test('Compoenete debe retornar la linea evaluada segun el valor enviado por defecto 100', () => {
        const wrapper = shallow( <CounterApp value={ 100 } /> )
        const line = wrapper.find('h2').text().trim()
        expect( line ).toBe( '100' )
    })

    //Prueba del evento click en +1
    test('Compoenete debe incrementar el valor +1 segun el evento click', () => {
        wrapper.find('button').at(0).simulate('click')
        const line = wrapper.find('h2').text().trim()
        expect( line ).toBe( '1' )
    })

    //Prueba del evento click en -1
    test('Compoenete debe reducir el valor -1 segun el evento click', () => {
        wrapper.find('button').at(2).simulate('click')
        const line = wrapper.find('h2').text().trim()
        expect( line ).toBe( '-1' )
    })

    //Prueba del evento click reset
    test('Compoenete debe restablecer por defecto la cantidad', () => {
        let wrapper = shallow( <CounterApp value={100} /> );
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        const line = wrapper.find('h2').text().trim()
        expect( line ).toBe( '100' )
    })
})
