//FUNCIONES
    //Posible problema
    function getName(name) {
        return `Hola sot ${name}`
    }

    getName('Jonathan')

    getName = 30

    //Declaraciones recomendadas
    const getNombre = function(name) {
        return `Hola sot ${name}`
    }
    const getAge = (age) => {
        return `Tengo ${age} años`
    }
    
    export const getUserAct = (userName) => ({ id: 123, name: userName })

    export const myObject = () => ({ uid: 1, name: 'jonathan'})
