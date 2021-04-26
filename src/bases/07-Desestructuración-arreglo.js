//DESESTRUCTURRACIÓN de arreglos
const arregloPer = ['jonathan','javier','ariana','steve']
const [ , ,persona3, ] = arregloPer
console.log(persona3);

const getArreglo = () => ['ABC',123]

const [ letras , numeros ] = getArreglo()
console.log(letras, numeros);

const art = valor => [ valor , () => console.log("Hola mundo") ]

const arr = art('Jonathan')
arr[1]()

const [ nombre, saludo ] = art('Jonathan')
console.log(nombre);
saludo()