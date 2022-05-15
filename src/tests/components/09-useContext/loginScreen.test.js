import { fireEvent, render, screen } from "@testing-library/react"
import { LoginScreen } from "../../../components/09-useContex/LoginScreen"
import { UserContext } from "../../../components/09-useContex/UserContext";

describe('Pruebas en <LoginScreen />', () => {

	const setUser = jest.fn();
	let wrapper;
	beforeEach(() => {
		wrapper = render( 
			<UserContext.Provider value={{
				setUser
			}}>
				<LoginScreen />
			</UserContext.Provider>
		 )
	})

	test('Debe de mostrarse correctamente', () => {

		expect( wrapper.container ).toMatchSnapshot() ;

	})

	test('Debe ejecutar el setUser con el argumento esperado', () => {

		const btn = screen.getByRole("button",/login/i);
		fireEvent.click(btn)
		expect( setUser ).toHaveBeenCalledWith( {
			id: 123,
			name: 'Jonathan',
		} )

	})

})