import { shallow } from "enzyme"
import { CategoryAdd } from "../../components/CategoryAdd"

describe('Pruebas del componente CategoryAdd.js', () => {

  const setCategory = () => {}

  test('Retorna la estructura HTML correcta del compoente', () => {
    const wrapper = shallow( <CategoryAdd setCategory={setCategory} /> )
    expect( wrapper ).toMatchSnapshot()
  })
  

})
