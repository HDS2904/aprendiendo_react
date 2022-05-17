# useCounter Hook
Este Hook nos ayuda a manejar un contador y nos provee de sus diferentes métodos para lograrlo.

## Input
cantidadInicial : cantidad con la que inicializará nuestro contador

## Output
state 			: Contador.
increment		: función para incrementar el contador de acuerdo al argumento que pase.
decrement		: función para reducir el contador de acuerdo al argumento que pase.
reset				: función para reiniciar el contador a la cantidad inicial que se le asignó.

Ejemplo de uso:
```
	const {state, increment, decrement, reset} = useCounter( cantidadInicial );
```