# useCounter Hook
Este Hook nos ayuda en el control de los formularios.

## Input
1. initialForm : Valor inicial de los campos del formulario.

## Output
1. values					  	: Valores del formulario.
2. handleInputChange	: Función para capturar y ejecutar el submit.
3. reset							: Limpia los campos del formulario.

## Ejemplo de uso:
```
const initialForm = {
	name	: '',
	age		: 0,
	email	: ''
}
const [ values, handleInputChange, reset] = useForm( initialForm );
```