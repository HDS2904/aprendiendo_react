import { getUserAct, myObject } from "../../bases/05-Funciones"

describe('Prueba de 05-Funciones', () => {
    test('getMyObject que retorna un objeto', () => {
        const userTest = { 
            uid: 1, 
            name: 'jonathan'
        }

        const user = myObject()

        expect( user ).toEqual( userTest )
    })

    test('getUserName que retorna objeto de usuario', () => {
        const NOMBRE = 'Jonathan'
        const objTest = { id: 123, name: NOMBRE }

        const objPb = getUserAct(NOMBRE)
        expect( objTest ).toEqual( objPb )
    })
    
    
})
