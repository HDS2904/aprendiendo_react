
export const todoReducer = ( state = [], action) => {
	switch (action.type) {

		case 'add':
			return [ ...state, action.payload ]

		case 'delete':
			return state.filter( item => item.id !== action.payload);

		case 'toggle':
			return state.map( item => 
				item.id === action.payload
					? {...item, done: !item.done}
					: item
			);
	
		default:
			return state;
			
	}
}