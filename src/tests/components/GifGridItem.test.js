import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Prueba del componente GifGridItem', () => {
    
  const title = 'Animes temporada'
  const url = 'https://hdsdevelop.com.pe'
  const wrapper = shallow( <GifGridItem title={title} url={url} /> )

  test('Retorna codigo HTML correctamente', () => {
      expect( wrapper ).toMatchSnapshot()
  })

  test('Debe retornar que title sea correcto', () => {
      const titleTest = wrapper.find('p')
      expect( titleTest.text().trim() ).toBe( title )
  })
  
  test('Debe confirmar que los parametros del img esten correctos', () => {
      const imgTest = wrapper.find('img')
      expect( imgTest.prop('src') ).toBe( url );
      expect( imgTest.prop('alt') ).toBe( title );
  })

  test('Etiqueta Div debe tener la clase animate__backInRight', () => {
      const tagDiv = wrapper.find('div')
      const className = tagDiv.prop('className')
      expect( className.includes('animate__backInRight') ).toBe(true)
  })
  
  
})