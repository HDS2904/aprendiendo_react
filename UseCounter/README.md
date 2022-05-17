# useCounter Hook
Este Hook nos ayuda a manejar un contador y nos provee de sus diferentes métodos para lograrlo.

## Input
1. cantidadInicial : cantidad con la que inicializará nuestro contador

## Output
1. state 			: Contador.
2. increment	: función para incrementar el contador de acuerdo al argumento que pase.
3. decrement	: función para reducir el contador de acuerdo al argumento que pase.
4. reset			: función para reiniciar el contador a la cantidad inicial que se le asignó.

## Ejemplo de uso:
```
const { state, increment, decrement, reset } = useCounter( cantidadInicial );
```