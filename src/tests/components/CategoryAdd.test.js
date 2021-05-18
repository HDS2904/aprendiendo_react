import { shallow } from "enzyme"
import { CategoryAdd } from "../../components/CategoryAdd"

describe('Pruebas del componente CategoryAdd.js', () => {

  const setCategory = () => {}
  const wrapper = shallow( <CategoryAdd setCategory={setCategory} /> )

  test('Retorna la estructura HTML correcta del compoente', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('Debe de cambiar la caja de texto', () => {
    const tagInput = wrapper.find('input')
    const textValue = 'Mi linea de texto'
    tagInput.simulate('change', { target: { value: textValue } })
    expect( wrapper.find('p').text().trim() ).toBe( textValue )
  })

})
