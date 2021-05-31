import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Prueba del hook del proyecto', () => {
  
  test('debe verificar el contenido inicial de la variable en hook', () => {
    const { result } = renderHook( () => useFetchGifs('one piece') )
    const { data, loading } = result.current
    expect( data ).toEqual( [] )
    expect( loading ).toBe( true)
  })
  

})
