
import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Pruebas en el useForm', () => {

	const initialForm = {
		name: 'Jonathan',
		email: 'hds@unmsm.edu.pe'
	}
	
	test('Debería de regresar el formulario por defecto', () => {
		const { result } = renderHook( () => useForm( initialForm ) );
		const [ values, handleInputChange, reset ] = result.current;
		expect( values ).toEqual( initialForm );
		expect( typeof handleInputChange ).toBe( 'function' );
		expect( typeof reset ).toBe( 'function' );
	})
	
	test('Debería cambiar el valor del formulario (cambiar nombre)', () => {
		const { result } = renderHook( () => useForm( initialForm ) );
		const [ ,handleInputChange ] = result.current;
		const target = { name: 'name', value: 'Emerzón' }
		act( () => handleInputChange({target}))
		const [ values ] = result.current;
		expect( values ).toEqual( { ...initialForm, name: 'Emerzón' } );
	})
	
	test('Debería de re-establecer el formulario con RESET', () => {
		const { result } = renderHook( () => useForm( initialForm ) );
		const [ ,handleInputChange, reset ] = result.current;
		const target = { name: 'name', value: 'Emerzón' }
		act( () => handleInputChange({target}))
		act( () => reset())
		const [ values ] = result.current;
		expect( values ).toEqual( initialForm );
	})

})

// Nota:
// Recordar que la deestructuración de arreglos es por posición
// const [,,tercero] = [1,2,3,4,5]
// tercero es igual a 3