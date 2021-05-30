import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock("../../hooks/useFetchGifs")

describe('Prueba del componente GifGrid', () => {

  const category = 'One piece'
  
  test('Evaluación del contenido del componente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })
    const wrapper = shallow( <GifGrid category={category} /> )
    expect( wrapper ).toMatchSnapshot()
  })
  
  test('Retorna los items cuando se carga las imagenes de useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'hhtp://jonathan-hds.com.pe',
      title: 'lo que sea'
    }]
    useFetchGifs.mockReturnValue({
      loading: false,
      data: gifs
    })
    const wrapper = shallow( <GifGrid category={category} /> )
    expect( wrapper ).toMatchSnapshot()

    
  })
  

})
