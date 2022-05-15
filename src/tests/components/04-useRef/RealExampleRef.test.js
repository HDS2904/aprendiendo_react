import { fireEvent, render } from "@testing-library/react"
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe('Prueba en <RealExampleRef />>', () => {
	let wrapper
	beforeEach( () => {
		wrapper = render( <RealExampleRef /> )
	})

	test('Debe mostrarse correctamente', () => {

		// const wrapper = render( <RealExampleRef /> )
		expect( wrapper.container ).toMatchSnapshot()
		expect( wrapper.queryByText(  'BreakingBad Quotes' ) ).toBe( null )

	})

	test('Debe de mostrar el componente <MultipleCustomHooks />', () => {
		// const wrapper = render( <RealExampleRef /> )
		const button = wrapper.getByRole('button', { name: /Ocultar/i });
		fireEvent.click(button)
		// wrapper.queryByText( 'BreakingBad Quotes' ) // prueba suficiente para saber si existe
		expect( !!wrapper.queryByText( 'BreakingBad Quotes' ) ).toBe( true )
		
	})

})