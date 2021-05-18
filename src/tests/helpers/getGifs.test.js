import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs.js', () => {
  
  test('Debe de retornar el numero de imagenes trae la API', async() => {
    const data = await  getGifs('One Piece');
    expect( data.length ).toBe( 10 )
  })
  
  test('Retorna 0 como numero de elementos al no enviar parametros', async() => {
    const data = await getGifs('')
    expect( data.length ).toBe( 0 )
  })
  
})
