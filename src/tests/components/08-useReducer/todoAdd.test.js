import { fireEvent, prettyDOM, render, screen } from "@testing-library/react"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"

describe('Prueba en <TodoAdd />', () => {

	const handleAddTodo = jest.fn();

	beforeEach( ()=> {
		handleAddTodo.mockClear()
		render(<TodoAdd 
			handleAdd={handleAddTodo}
		/>)
	})
	
	test('Deberia de mostrarse correctamente', () => {

		const wrapper = render( <TodoAdd handleAdd={handleAddTodo} /> )
		expect( wrapper.container ).toMatchSnapshot()

	})

	test('No debe de llamar el handleAddTodo', () => {

		const fun = screen.getByText('Agregar')
		fireEvent.submit(fun)
		expect( handleAddTodo ).toHaveBeenCalledTimes(0)
		
	})

	test('Debe de llamar el handleAddTodo', () => {
		const value = 'Aprendiendo React';
		const input = screen.getByPlaceholderText(/Actividad/i);
		fireEvent.change(input,{
			target: {
				value,
				name: 'description'
			}
		})
		const fun = screen.getByText('Agregar');
		fireEvent.submit(fun);
		expect( handleAddTodo ).toHaveBeenCalledTimes(1)
		expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) )
		expect( handleAddTodo ).toHaveBeenCalledWith({
			id: expect.any(Number),
			desc: value,
			done: false
		})

		expect( input.value ).toBe( '' )
		
	})
	
})