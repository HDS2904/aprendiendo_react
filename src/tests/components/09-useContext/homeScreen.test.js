import { render, screen } from "@testing-library/react"
import { HomeScreen } from "../../../components/09-useContex/HomeScreen"
import { UserContext } from "../../../components/09-useContex/UserContext"

describe('Pruebas en <HomeScreen />', () => {

	let wrapper;
	const user = {
		name: 'Jonathan',
		email: 'jonathan.canales.hds@gmail.com'
	}

	beforeEach(() => {
		wrapper = render(
			<UserContext.Provider value={{
				user
			}}
			>
				<HomeScreen />
			</UserContext.Provider>
		)
	})

	test('Debe mostrarse correctamente', () => {

		expect( wrapper.container ).toMatchSnapshot()

	})

})