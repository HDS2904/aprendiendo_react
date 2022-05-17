# useCounter Hook
Este Hook nos ayuda a realizar las consultas asincronas al consumir una API.

## Input
url : cadena que permite el consumo de la API.

## Output
state	: contiene el objeto resultado de la consulta, donde:
	1. data			: Trae la data resultado de la consulta como un array.
	2. loading	: Valor booleano que indica el estado de la consulta.
	3. error		: Variable que tiene valor al fallar la consulta, explicando el detalle de la falla.

Ejemplo de uso:
```
const url = 'ruta-del-servicio'
	const { data: null, loading: true, error: null	} = useFetch( url );
```