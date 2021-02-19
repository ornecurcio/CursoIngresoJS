/*Ornela Curcio 
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	let productoIngresado; 
	let precioIngresado; 
	let cantidadIngresada; 
	let marcaIngresada; 
	let fabricanteIngresado; 
    let precioJabonMasCaro; 
	let marcaJabonMasCaro; 
	let cantidadJabonMasCaro; 
	let fabricanteJabonMasCaro; 
    let contadorProductos; 
	let sumadorCantidadBarbijo; 
	let contadorBarbijo; 
	let sumadorCantidadAlcohol; 
	let contadorAlcohol; 
	let sumadorCantidadJabon; 
	let contadorJabones; 
	let banderaJabon; 
	let productoMayorCantidad; 
	let promedio; 

	contadorProductos = 0; 
	sumadorCantidadAlcohol=0; 
	sumadorCantidadBarbijo=0; 
	sumadorCantidadJabon=0; 
	contadorBarbijo=0; 
	contadorJabones=0; 
	contadorAlcohol=0; 
	banderaJabon=1;

	while(cantidadProductos<5)
	{
        
		productoIngresado = prompt("Ingrese producto"); 
		while(isNaN(productoIngresado)==true && productoIngresado!="alcohol" && productoIngresado!="jabon" && productoIngresado!="barbijo")
		{
			productoIngresado = prompt("Error, ingrese producto: barbijo, alcohol, jabon"); 
		}
	    
		precioIngresado = prompt("Ingrese precio"); 
		precioIngresado = parseInt(precioIngresado); 
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado = prompt("Error, ingrese precio entre 100 y 300"); 
		    precioIngresado = parseInt(precioIngresado); 
		}
        
		cantidadIngresada = prompt("Ingrese cantidad"); 
		cantidadIngresada = parseInt(cantidadIngresada); 
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<1 || cantidadIngresada>1000)
		{
			cantidadIngresada = prompt("Error, ingrese cantidad entre 1 y 1000"); 
			cantidadIngresada = parseInt(cantidadIngresada);
		}
        
		marcaIngresada = prompt("Ingrese marca"); 

		fabricanteIngresado = prompt("Ingrese fabricante"); 
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado = prompt("Error, ingrese fabricante, ejemplo: China"); 
		}

		switch(productoIngresado)
		{
			case"jabon": 
			     if(banderaJabon==1)
				 {
					 precioJabonMasCaro = precioIngresado; 
					 cantidadJabonMasCaro = cantidadIngresada; 
					 marcaJabonMasCaro = marcaIngresada; 
					 fabricanteJabonMasCaro = fabricanteIngresado; 
					 bandera = 0; 
				 }
				 else
				 {
					 if(precioIngresado>precioJabonMasCaro)
					 {
						 precioJabonMasCaro = precioIngresado; 
						 cantidadJabonMasCaro = cantidadIngresada; 
						 marcaJabonMasCaro = marcaIngresada; 
						 fabricanteJabonMasCaro = fabricanteIngresado
					 }
				 }
				 contadorJabones = contadorJabones + 1; 
				 sumadorCantidadJabon = sumadorCantidadJabon + cantidadIngresada; 
				 break; 
			case"alcohol": 
				 contadorAlcohol = contadorAlcohol + 1; 
				 sumadorCantidadAlcohol = sumadorCantidadAlcohol + cantidadIngresada; 
				 break; 
		    case "barbijo": 
			    contadorBarbijo = contadorBarbijo + 1; 
				sumadorCantidadBarbijo = sumadorCantidadBarbijo + cantidadIngresada; 
				break; 
		}
		
		contadorProductos = contadorProductos + 1; 

	}

    if(contadorJabones>contadorAlcohol)
	{
		productoMayorCantidad = "Jabon"; 
		promedio = sumadorCantidadJabon/contadorJabones; 
	}
	else
	{
        if(contadorAlcohol>contadorBarbijo)
		{
			productoMayorCantidad = "Alcohol"; 
			promedio = sumadorCantidadAlcohol/contadorAlcohol; 
		}
		else
		{
            productoMayorCantidad = "Barbijos";
			promedio = sumadorCantidadBarbijo/contadorBarbijo;  
		}
	}
    
	console.log("La marca mas cara de jabon es"+marcaJabonMasCaro+" con "+precioJabonMasCaro+" precio, en "+cantidadJabonMasCaro+" cantidad y de origen "+fabricanteJabonMasCaro); 
	console.log("El producto con mayor cantidad es "+productoMayorCantidad+", y el promedio por compra fue "+promedio); 
	console.log("La cantidad total de jabon comprado fue de "+sumadorCantidadJabon+" unidades"); 
	
}//fin de funcion 
