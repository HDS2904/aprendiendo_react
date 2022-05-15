import { render } from "@testing-library/react"
import { LoginScreen } from "../../../components/09-useContex/LoginScreen"
import { UserContext } from "../../../components/09-useContex/UserContext";

describe('Pruebas en <LoginScreen />', () => {

	const user = {
		id: 777,
		name: 'Jonathan Canales Chavez',
	}
	const wrapper = render( 
			<UserContext.Provider value={{
				user
			}}>
				<LoginScreen />
			</UserContext.Provider>
		 )

	test('Debe de mostrarse correctamente', () => {

		expect( wrapper.container ).toMatchSnapshot() ;

	})

})