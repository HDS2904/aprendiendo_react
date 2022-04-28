import { prettyDOM, render } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
	
	// beforeEach contiene lo que se ejecutara antes de cada test
	beforeEach( () => {
		useCounter.mockReturnValue({
			state: 10,
			increment: () => {}
		})
	})

	test('Debe mostrarse correctamente', () => {

		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null
		})
		
		const wrapper = render( <MultipleCustomHooks /> );

		expect( wrapper.container ).toMatchSnapshot()

		// const etiqueta = wrapper.container.querySelector( 'button' );
		// console.log( prettyDOM( etiqueta ) ); // mostrar la etiqueta extraida de 

	})

	test('Debe de mostrar la información', async () => {

		useFetch.mockReturnValue({
			data: [{
				author: 'Jonathan',
				quote: 'Programando un mundo'
			}],
			loading: false,
			error: null
		})

		const wrapper = render( <MultipleCustomHooks /> );
		const items = wrapper.container.getElementsByClassName( 'alert' ) // extrae un array de los items con clase 'alert'
		expect( items.length ).toBe( 0 );

		// wrapper.getByText('Programando un mundo') // Forma mas sencilla de evaluar que exista una etiqueta con el contenido
		expect( wrapper.container.querySelector( 'p' ).textContent ).toBe( 'Programando un mundo' ) // selecciona la equiqueta p y trae su contenido para luego evaluar con el expect.tobe
		expect( wrapper.container.querySelector( 'footer' ).textContent ).toBe( 'Jonathan' );
	})
	
})


// Nota:
// existe un problema con el render de @testing-library/react, pues no toma una foto
// de los onclick="" de las etiquetas como lo hace el shallow de enzyme