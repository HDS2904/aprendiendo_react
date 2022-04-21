import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Prueba en useCounter', () => {

	test('Debe retornar por defecto', () => {

		const { result } = renderHook( () => useCounter(10) );
		
		expect( result.current.state ).toBe( 10 );
		expect( typeof result.current.decrement ).toBe( 'function' );
		expect( typeof result.current.increment ).toBe( 'function' );
		expect( typeof result.current.reset ).toBe( 'function' );
		
	})
	
	test('Debe incrementar el counter en 1', () => {
		const { result } = renderHook( () => useCounter(100) );

		// Incrementando el contador
		act( () => {
			result.current.increment();
		})
		expect( result.current.state ).toBe( 101 );
	})

	test('Debe decrementar el counter en 1', () => {
		const { result } = renderHook( () => useCounter(100) );

		// Decrementando el contador
		act( () => {
			result.current.decrement();
		})
		expect( result.current.state ).toBe( 99 );
	})

	test('Debe resetear el valor por default', () => {
		const { result } = renderHook( () => useCounter(100) );

		// Incrementando el contador
		act( () => {
			result.current.increment();
		})
		expect( result.current.state ).toBe( 101 );
		
		// Reseteando el contador
		act( () => {
			result.current.reset();
		})
		expect( result.current.state ).toBe( 100 );
	})

	test('Incrementando el contador dos veces', () => {
		const { result } = renderHook( () => useCounter(100) );

		// Incrementando el contador dos veces
		act( () => {
			result.current.increment();
		})
		act( () => {
			result.current.increment();
		})
		expect( result.current.state ).toBe( 102 );
	})

})

// ACT
// Dentro del act, cada funcipon se ejecutará de una misma base bloqueada
// del hook, por lo que no guarda los cambios ejecutados por mas de una
// función