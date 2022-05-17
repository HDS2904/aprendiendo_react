# useCounter Hook
Este Hook nos ayuda a realizar las consultas asincronas al consumir una API.

## Input
1. url : cadena que permite el consumo de la API.

## Output
1. state	: contiene el objeto resultado de la consulta, donde:
	- data		: Trae la data resultado de la consulta como un array.
	- loading	: Valor booleano que indica el estado de la consulta.
	- error		: Variable que tiene valor al fallar la consulta, explicando el detalle de la falla.

## Ejemplo de uso:
```
const url = 'ruta-del-servicio'
const { data: null, loading: true, error: null	} = useFetch( url );
```