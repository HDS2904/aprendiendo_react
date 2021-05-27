import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { CategoryAdd } from "../../components/CategoryAdd"

describe('Pruebas del componente CategoryAdd.js', () => {

  const setCategories = jest.fn()
  let wrapper = shallow( <CategoryAdd setCategories={setCategories} /> )
  
  beforeEach( () => { //función del ciclo de vida del componente
    jest.clearAllMocks()  //Limpiesa del componente ante simulaciones
    wrapper = shallow( <CategoryAdd setCategories={setCategories} /> ) // inicialización del componente
  }) 

  test('Retorna la estructura HTML correcta del compoente', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('Debe de cambiar la caja de texto', () => {
    const tagInput = wrapper.find('input')
    const textValue = 'Mi linea de texto'
    tagInput.simulate('change', { target: { value: textValue } }) //simula cambio en la etiqueta input
    expect( wrapper.find('p').text().trim() ).toBe( textValue )
  })

  test('No debe ejecutar la función submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} }) // simulación de submit
    expect( setCategories ).not.toHaveBeenCalled() //evalua si la función setCategories no se ejecuto
  })

  test('Llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Nuevo texto'
    // Simular el camvio del atributo value del input
    wrapper.find('input').simulate('change',{ target: { value } })
    // Simular el submit del formulario
    wrapper.find('form').simulate('submit',{ preventDefault(){} })
    // Verificar si fue llamada la función setCategories
    expect( setCategories ).toHaveBeenCalled()
    // expect( setCategories ).toHaveBeenCalledTimes(2) // Evalua si la función se llamo 2 veces
    // expect( setCategories ).toHaveBeenCalledWith() // Evalua si la función se llamo con otra función (y no enteros o numeros por arguemnto)

    expect( setCategories ).toHaveBeenCalled()

    // Evaluar si el input esta vacio luego del submit
    expect( wrapper.find('input').prop('value') ).toBe( '' )

  })

})
