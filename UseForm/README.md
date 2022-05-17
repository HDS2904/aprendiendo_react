# useCounter Hook
Este Hook nos ayuda en el control de los formularios.

## Input
initialForm : Valor inicial de los campos del formulario.

## Output
values					  : Valores del formulario.
handleInputChange	: Función para capturar y ejecutar el submit.
reset							: Limpia los campos del formulario.

Ejemplo de uso:
```
const initialForm = {
	name	: '',
	age		: 0,
	email	: ''
}
	const [ values, handleInputChange, reset] = useForm( initialForm );
```