import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"


describe('Pruebas en useFetch', () => {

	test('Debe retornar la información por defecto', () => {

		const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
		const { data, loading, error } = result.current;
		expect( data ).toBe( null );
		expect( loading ).toBe( true );
		expect( error ).toBe( null );

	})

	test('Debe de tener la información deseada: loading false, error null', async () => {

		const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

		await waitForNextUpdate({
			timeout: 1500
		});

		const { data, loading, error } = result.current;
		expect( data.length ).toBe( 1 );
		expect( loading ).toBe( false );
		expect( error ).toBe( null );

	})

	test('Debe de manejar el error', async () => {

		const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/a6pi/users?page=2'));

		await waitForNextUpdate();

		const { data, loading, error } = result.current;
		expect( data ).toBe( null );
		expect( loading ).toBe( false );
		expect( error ).toBe( 'No se pudo cargar la info' );

	})

})

// NOTA
// Ocurre un evento extraño en waitForNextUpdate pues la respuesta demora
// saltando error y se debe asignar un tiempo de espera pero imprime el console.log
// de si no tubieramos respuesta