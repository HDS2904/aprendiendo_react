//DESESTRUCTURRACIÓN de arreglos
const arregloPer = ['jonathan','javier','ariana','steve']
const [ , ,persona3, ] = arregloPer
 

export const getArreglo = () => ['ABC',123]

const [ letras , numeros ] = getArreglo()


const art = valor => [ valor , () => {console.log("Hola mundo")} ]


