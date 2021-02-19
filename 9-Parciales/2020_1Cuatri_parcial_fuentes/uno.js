/*Ornela Curcio 
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	let productoIngresado; 
	let precioIngresado; 
	let cantidadIngresada; 
	let marcaIngresada; 
	let fabricanteIngresado; 
	let cantidadProductos; 
	let precioAlcoholBarato; 
	let cantidadAlcoholBarato; 
	let fabricanteAlcoholBarato;  
	let contadorAlcohol; 
	let sumadorCantidadAlcohol; 
	let contadorJabones; 
	let sumadorCantidadJabon; //total jabones 
	let contadorBarbijo; 
	let sumadorCantidadBarbijo; 
	let mayorCantidadUnidades; 
	let promedio; 
	
	

	cantidadProductos = 0; 
	unidadJabones = 0;
	contadorAlcohol = 0; 
	sumadorCantidadAlcohol = 0; 
	contadorJabones = 0; 
	sumadorCantidadJabon = 0; 
	contadorBarbijo = 0; 
	sumadorCantidadBarbijo = 0; 
	

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
			case"alcohol": 
			    //if(banderaAlcohol == 1)
				if(contadorAlcohol==0)
				{
					precioAlcoholBarato = precioIngresado; 
					cantidadAlcoholBarato = cantidadIngresada; 
					fabricanteAlcoholBarato = fabricanteIngresado;
					//banderaAlcohol = 0; 
				}
				 else
				{
					if(precioIngresado<precioAlcoholBarato) 
					{
						precioAlcoholBarato = precioIngresado;
						cantidadAlcoholBarato = cantidadIngresada; 
						fabricanteAlcoholBarato = fabricanteIngresado;   
					}
				}
                contadorAlcohol = contadorAlcohol + 1 //veces q ingresa el producto 
				sumadorCantidadAlcohol = sumadorCantidadAlcohol + cantidadIngresada;
				break; 
			case"jabon": 
			     contadorJabones = contadorJabones + 1; 
				 sumadorCantidadJabon = sumadorCantidadJabon + cantidadIngresada; //cantidad acumulada de unidades. 
				 break; 
			case"barbijo": 
				contadorBarbijo = contadorBarbijo + 1; 
				sumadorCantidadBarbijo = sumadorCantidadBarbijo + cantidadIngresada; 
				break; 
			     
		}
		cantidadProductos = cantidadProductos + 1; 
	}
     if(sumadorCantidadAlcohol>sumadorCantidadJabon)
	 {
       		promedio = sumadorCantidadAlcohol/contadorAlcohol
	   		mayorCantidadUnidades = "Alcohol"; 
	 }
	 else
	 {
       if(sumadorCantidadJabon>sumadorCantidadBarbijo)
	   {
       	 	promedio = sumadorCantidadJabon/contadorJabones; 
			mayorCantidadUnidades = "Jabon";  
	   }
	   else
	   {
		    promedio = sumadorCantidadBarbijo/contadorBarbijo; 
			mayorCantidadUnidades = "Barbijo"; 
	     
		}
	 }   
	
	console.log("El alcohol mas barato es de "+precioAlcoholBarato+ " pesos de "+cantidadAlcoholBarato+" unidades y el fabricante es "+fabricanteAlcoholBarato);
	console.log("La cantidad total de jabones es: "+sumadorCantidadJabon+" jabones");  
	console.log("La mayor cantidad de unidades fue de "+mayorCantidadUnidades+" y el promedio por compra fue "+promedio);
}//Fin de la funcion
    
