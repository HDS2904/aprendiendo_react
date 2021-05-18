import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Prueba del componente GifGridItem', () => {
    
  const title = 'Animes temporada'
  const url = 'https://hdsdevelop.com.pe'
  
  test('Retorna codigo HTML correctamente', () => {
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )
      expect( wrapper ).toMatchSnapshot()
  })

})