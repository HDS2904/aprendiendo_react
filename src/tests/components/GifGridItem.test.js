import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Prueba del componente GifGridItem', () => {
    
    test('Retorna codigo HTML correctamente', () => {
      const wrapper = shallow( <GifGridItem /> )
        expect( wrapper ).toMatchSnapshot()
    })
    
})