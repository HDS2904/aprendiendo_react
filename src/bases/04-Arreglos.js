//ARREGLOS
    //Declarar y asignar
    const arreglo = new Array(100);
    const arreglo2 = [1,2,3,4,5,6]
    
    // Pasar datos de un arreglo a otro
    let arreglo3 = [ ...arreglo2 , 7]
    let arreglo4 = arreglo2.map(item => item*2 )

    console.log(arreglo2);
    console.log(arreglo3);
    console.log(arreglo4);