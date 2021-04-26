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
    const getUserName = (userName) => `Me llaman ${userName}`

    const myObject = () => ({ uid: 1, name: 'jonathan'})
