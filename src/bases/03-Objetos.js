const estudent = {
    name: 'Jonathan',
    age: 29,
    email: 'hds@gmail.com',
    addres: {
        city: 'Lima',
        country: 'Perú'
    }
}

// asignación por valor (copia del objeto
const persona2 = {...estudent}
persona2.age = 35

console.log(persona2);
console.log(estudent);

//Asignación por referencia
const persona = estudent;
persona.age = 35

console.log(persona);
console.log(estudent);

