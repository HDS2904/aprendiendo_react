import { fireEvent, render, screen } from "@testing-library/react";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";

describe('Pruebas en <TodoApp/>', () => {

	beforeEach(()=>{
		Storage.prototype.setItem = jest.fn(()=>{})
		render(<TodoApp/>)
	})

	test('Debe de mostrarse correctamente', () => {
		const wrapper = render(<TodoApp/>)
		expect( wrapper.container ).toMatchSnapshot()

	})

	test('Debe de agregar un Todo', () => {
		let value = 'Aprendiendo React';
		const input = screen.getByPlaceholderText(/Actividad/i);
		fireEvent.change(input,{
			target: {
				value,
				name: 'description'
			}
		})
		const fun = screen.getByText('Agregar');
		fireEvent.submit(fun);
		value = 'Aprendiendo Node.js';
		fireEvent.change(input,{
			target: {
				value,
				name: 'description'
			}
		})
		fireEvent.submit(fun);
		const h1 = screen.getByRole('heading',{name: /todoapp/i });
		expect( h1.textContent ).toBe( 'TodoApp (2) ' );
		expect( localStorage.setItem ).toHaveBeenCalledTimes( 3 )

	})

	test('Debe de eliminar un Todo', () => {
		const value = 'Aprendiendo React';
		const input = screen.getByPlaceholderText(/Actividad/i);
		fireEvent.change(input,{
			target: {
				value,
				name: 'description'
			}
		})
		const h1 = screen.getByRole('heading',{name: /todoapp/i });

		const fun = screen.getByText('Agregar');
		fireEvent.submit(fun);
		expect( h1.textContent ).toBe( 'TodoApp (1) ' );
		
		const btnDelele = screen.getByRole("button",{name: /borrar/i});
		fireEvent.click(btnDelele);
		expect( h1.textContent ).toBe( 'TodoApp (0) ' );
	})

})