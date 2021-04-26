const NAME = "jonathan";
let carrera = "ingeniero de sistemas"

const message = `${NAME} es un ${carrera}`

export function getName( NAME = 'Carlos' ) {
  return `Hola, me llamo ${NAME}`
}