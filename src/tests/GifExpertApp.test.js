import React from 'react'
import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Pruebas en el componente GifExpertApp', () => {
  
  test('Evalua si la estructura del componente es igual que la plantilla', () => {
    const wrapper = shallow( <GifExpertApp /> )
    expect( wrapper ).toMatchSnapshot()
  })

  test('Retorna si el numero de categoryas enviada por defauld es la misma', () => {
    const categories = [ 'one piece', 'saint seiya' ]
    const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> )
    expect( wrapper.find('GifGrid').length ).toBe( categories.length )
  })

})
