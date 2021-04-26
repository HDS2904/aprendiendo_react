//DESESTRUCTURRACIÓN
const persona = {
    id: 1,
    name: 'Jonathan',
    age: 28
}

const { name, age } = persona
const { name:copyName } = persona

console.log(name);
console.log(age);
console.log(copyName);


const getObject = ( { name, age, email = 'none' } ) => {
    console.log(name, age, email);
}

getObject(persona)



const getObject2 = ( { name, age, email = 'none' } ) => {
    return {
        nombre: name,
        correo : email,
        coordenada: {
            lat: 12.005,
            long: 2.223,
        }
    }
}
const newObject = getObject2(persona);

const { nombre: nombreClave, correo: contacto, coordenada:{lat: latitud,long: longitud}} = newObject

console.log(nombreClave , contacto, latitud, longitud);
