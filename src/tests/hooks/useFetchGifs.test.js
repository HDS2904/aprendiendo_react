import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Prueba del hook del proyecto', () => {
  
  test('debe verificar el contenido inicial de la variable en hook', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('one piece') )
    const { data, loading } = result.current
    await waitForNextUpdate()

    expect( data ).toEqual( [] )
    expect( loading ).toBe( true )
  })

  test('Evalua el numero de elementos cargados en el componente', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('one piece') )
    await waitForNextUpdate()
    const { data, loading } = result.current

    expect( data.length ).toBe( 10 )
    expect( loading ).toBe( false )
  })
  
})
