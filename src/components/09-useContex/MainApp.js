import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {
	const user = {
		id: 120,
		name: 'Jonathan',
		email: 'jonathan.canales.hds@gmail.com',
	}
	return (
		<UserContext.Provider value={user} >
			<AppRouter/>
		</UserContext.Provider>
	)
}
