import { fireEvent, render } from "@testing-library/react"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en <TodoListItem />', () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();
	let wrapper;
	
	beforeEach( ()=>{
		wrapper = render( <TodoListItem 
			todo={ demoTodos[1] }
			index={ 0 }
			handleDelete={ handleDelete }
			handleToggle={ handleToggle }
		/> )

	})

	test('Deberia de mostrarse correctamente', () => {

		expect( wrapper.container ).toMatchSnapshot();

	})

	test('Debe de llamar la función handleDelete', () => {

		const button = wrapper.getByText( "Borrar" );
		fireEvent.click( button );
		expect( handleDelete ).toHaveBeenCalledTimes( 1 ); // Evaluar la cantidad de veces llamada la función
		expect( handleDelete ).toHaveBeenCalledWith( demoTodos[1].id ); // Evaluar el argumento pasado a la función

	})

	test('Debe de llamar la función handleToggle', () => {

		const parr = wrapper.container.querySelector('p');
		fireEvent.click( parr );
		expect( handleToggle ).toHaveBeenCalledTimes( 1 );
		expect( handleToggle ).toHaveBeenCalledWith( demoTodos[1].id );

	})

	test('Debe de mostrar el texto correctamente', () => {

		const parr = wrapper.container.querySelector('p');
		fireEvent.click( parr );
		expect( parr.textContent ).toBe( `1. ${demoTodos[1].desc}` );

	})

	test('Debe de tener la clase complete si el TODO.done = true', () => {

		const todo = demoTodos[1];
		todo.done = true;

		const wrapper = render( <TodoListItem 
			todo={ todo }
		/> )

		const parr = wrapper.container.querySelector('p')
		expect( parr.className ).toBe( 'complete' );

	})

})