import { fireEvent, render, screen } from "@testing-library/react";
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en el <TodoList />', () => {

	const handleDelete = jest.fn();
	const handleToggle = jest.fn();

	beforeEach(() => {
		render( <TodoList 
			handleDelete={ handleDelete }
			handleToggle={ handleToggle }
			todos={ demoTodos }
		/>)
	})

	test('Debe de mostrar correctamente', () => {

		const wrapper = render( <TodoList 
			handleDelete={ handleDelete }
			handleToggle={ handleToggle }
			todos={ demoTodos }
		/>)
		expect( wrapper ).toMatchSnapshot()

	})

	test('Debe de tener dos <TodoListItem />', () => {

		const li = screen.getAllByRole("listitem",{})
		expect( li.length ).toBe( demoTodos.length )

		const btnDelele = screen.getAllByRole("button",{name: /borrar/i});

		// Evalua si se paso la función handleDelete viendo si responde a la cantidad de llamados
		fireEvent.click(btnDelele[0]);
		fireEvent.click(btnDelele[1]);
		expect( handleDelete ).toHaveBeenCalledTimes(2)

	})

})