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
/*function mostrar()
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
		while(isNaN(productoIngresado)==false || productoIngresado!="alcohol" && productoIngresado!="jabon" && productoIngresado!="barbijo")
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
        while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada = prompt("Error, ingrese marca"); 
		}
		
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
}*///Fin de la funcion

/*"super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado */
    
function mostrar()
{
	let tipoDeProductoIngresado; 
	let nombreDeProducto; 
	let precioIngresado;   
	let fabricanteIngresado;
	let pesoIngresado;  
	let contadorComestible; 
	let acumuladorPesoComestible; 
	let contadorLimpieza; 
	let acumuladorPesoLimpieza; 
	let contadorOtro; 
	let acumuladorPesoOtro; 
	let nombreComestibleMasPesado; 
	let contadorProducto; 
	let pesoComestibleMasPesado; 
	let nombreElaboradoMasBarato; 
	let precioElaboradoMasBarato;
	let contadorElaborado;  
	let nombreProductoMasCaro; 
	let precioProductoMasCaro;  
	let porcetajeElaboradoSobreTotal; 
	let promedioPesosLimpieza;
	let promedioPesosComestibles; 
	let promedioPesosOtros;  
	let mensajePesosComestrible; 
	let mensajePesosLimpieza; 
	let mensajePesosOtro; 
	let mensajaPorcentajeElaborado; 
	let mensajeTipoMasMercaderia;
	let mensajeNombreMasBaratoElaborado; 
	let mensajeComestibleMasPesado; 
	let respuesta; 
	
	
	respuesta = "si"; 
	
	contadorComestible =0; 
	acumuladorPesoComestible=0; 
	contadorLimpieza=0; 
	acumuladorPesoLimpieza=0; 
	contadorOtro=0; 
	acumuladorPesoOtro=0; 
	contadorElaborado = 0; 
	contadorProducto = 0; 
	

	while(respuesta == "si")
	{
        contadorProducto = contadorProducto + 1;

		tipoDeproductoIngresado = prompt("Ingrese tipo de producto: limpieza, comestible, otro"); 
		while(isNaN(tipoDeproductoIngresado)==false || tipoDeproductoIngresado!="limpieza" && tipoDeproductoIngresado!="comestible" && tipoDeproductoIngresado!="otro")
		{
			tipoDeproductoIngresado = prompt("Error, ingrese producto: limpieza, comestible, otro"); 
		}
	    
		nombreDeProducto = prompt("Ingrese nombre de producto"); 
		while(isNaN(nombreDeProducto)==false)
		{
			nombreDeProducto = prompt("Ingrese nombre de producto"); 
		}
		precioIngresado = prompt("Ingrese precio"); 
		precioIngresado = parseFloat(precioIngresado); 
		while(isNaN(precioIngresado)==true || precioIngresado>1001)
		{
			precioIngresado = prompt("Error, ingrese precio hasta 1000 pesos"); 
		    precioIngresado = parseFloat(precioIngresado); 
		}
        
		pesoIngresado = prompt("Ingrese peso en kilos"); 
		pesoIngresado = parseFloat(pesoIngresado); 
		while(isNaN(pesoIngresado)==true || pesoIngresado>31)
		{
			pesoIngresado = prompt("Error, ingrese peso hasta 30 kilos"); 
			pesoIngresado = parseFloat(pesoIngresado);
		}
        	
		fabricanteIngresado = prompt("Ingrese fabricante: importado, nacional, elaborado"); 
		while(isNaN(fabricanteIngresado)==false || fabricanteIngresado!="importado" && fabricanteIngresado!="nacional" && fabricanteIngresado!="elaborado")
		{
			fabricanteIngresado = prompt("Error, ingrese fabricante: importado, nacional, elaborado"); 
		}
        
		switch(tipoDeproductoIngresado)
		{
			case"limpieza": 
			    contadorLimpieza = contadorLimpieza + 1; 
				acumuladorPesoLimpieza = acumuladorPesoLimpieza + pesoIngresado; 
				break; 
			case"comestible": 
				contadorComestible = contadorComestible + 1; 
				acumuladorPesoComestible = acumuladorPesoComestible + pesoIngresado; 
				if(contadorComestible==1)
				{
					pesoComestibleMasPesado = pesoIngresado; 
					nombreComestibleMasPesado = nombreDeProducto; 
				}
				else
				{
					if(pesoComestibleMasPesado<pesoIngresado)
					{
						pesoComestibleMasPesado = pesoIngresado; 
					 	nombreComestibleMasPesado = nombreDeProducto; 
					}
				}
				 break; 
			case"otro": 
				contadorOtro = contadorOtro + 1; 
				acumuladorPesoOtro = acumuladorPesoOtro + 1;  
				break; 	     
		}

		switch(fabricanteIngresado)
		{
			case"elaborado": 
				contadorElaborado = contadorElaborado + 1; 
				if(contadorElaborado == 1)
				{
						precioElaboradoMasBarato = precioIngresado; 
						nombreElaboradoMasBarato = nombreDeProducto; 
				}
				else
				{
					if(precioElaboradoMasBarato>precioIngresado)
					{
						precioElaboradoMasBarato = precioIngresado; 
						nombreElaboradoMasBarato = nombreDeProducto; 
					}
				}
				break; 
			case"importado": 
				break; 
			case "nacional": 
				break; 
		}
		if(contadorProducto==1)
		{
				precioProductoMasCaro = precioIngresado; 
				nombreProductoMasCaro = nombreDeProducto; 
		}
		else
		{
			if(precioProductoMasCaro<precioIngresado)
			{
				precioProductoMasCaro = precioIngresado; 
				nombreProductoMasCaro = nombreDeProducto; 
			}
		}

		respuesta = prompt("Desea ingresar un nuevo producto?");  
	}//fin de while
     if(contadorLimpieza>contadorComestible)
	 {
		 mensajeTipoMasMercaderia = "El mayor tipo de producto es Limpieza con "+contadorLimpieza+" unidades."; 
	 }
	 else
	 {
		 if(contadorComestible>contadorOtro)
		 {
			mensajeTipoMasMercaderia = "El mayor tipo de producto es Comestible con "+contadorComestible+" unidades."; 
		 }
		 else
		 {
			mensajeTipoMasMercaderia = "El mayor tipo de producto es Otro con "+contadorOtro+" unidades."; 
		 }
	 }

	if(contadorLimpieza>0)
	{
		 promedioPesosLimpieza = acumuladorPesoLimpieza/contadorLimpieza; 
		 mensajePesosLimpieza = "El promedio de peso de articulos de limpieza es de "+promedioPesosLimpieza+"kilos. "; 
	}
	else
	{
		mensajePesosLimpieza = "No hay productos'Limpieza'. "
	}
	if(contadorComestible>0)
	{
		promedioPesosComestibles = acumuladorPesoComestible/contadorComestible; 
		mensajePesosComestrible = "El promedio de peso de articulos de Comestible es de "+promedioPesosComestibles+" kilos. "; 
		mensajeComestibleMasPesado = "el NOMBRE del mas pesado de los comestibles es "+nombreComestibleMasPesado+" con "+pesoComestibleMasPesado+" kilos. "
	}
	else
	{
		mensajePesosComestrible = "No hay producto 'Comestible'. "
		mensajeComestibleMasPesado = "No hay producto 'Comestible'. "
	}
	if(contadorOtro>0)
	{
		promedioPesosOtro = acumuladorPesoOtro/contadorOtro; 
		mensajePesosOtro = "El promedio de peso de articulos de Otro es de "+promedioPesosLimpieza+ " kilos. "; 
	}
	else
	{
		mensajePesosOtro = "No hay 'otro' producto. "; 
	}
	if(contadorElaborado>0)
	{
		porcetajeElaboradoSobreTotal = contadorProducto/contadorElaborado*100; 
		mensajaPorcentajeElaborado = "El porcentaje de producto elaborado es "+porcetajeElaboradoSobreTotal+"%. ";
		mensajeNombreMasBaratoElaborado = "el NOMBRE del mas barato de los elaborados es: "+nombreElaboradoMasBarato; 
	}
	else
	{
		mensajaPorcentajeElaborado = "No hay productos 'elaborado'. ";
		mensajeNombreMasBaratoElaborado = "No hay productos 'elaborado'. ";
	}
	
/*a)*/console.log(mensajeComestibleMasPesado); 
/*b)*/console.log("el NOMBRE del mas caro de todos los productos es "+nombreProductoMasCaro+" con "+precioProductoMasCaro+"valor"); 
/*c)*/console.log(mensajeNombreMasBaratoElaborado); 
/*d)*/console.log(mensajeTipoMasMercaderia); 
/*e)*/console.log(mensajaPorcentajeElaborado); 
/*f)*/console.log(mensajePesosComestrible+mensajePesosLimpieza+mensajePesosOtro); 

}//fin de funcion. 