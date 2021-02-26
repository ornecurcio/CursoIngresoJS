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
/*function mostrar()
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

	while(contadorProductos<5)
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
    
	console.log("La marca mas cara de jabon es "+marcaJabonMasCaro+" con "+precioJabonMasCaro+"pesos de precio, "+cantidadJabonMasCaro+" unidades compradas y de origen "+fabricanteJabonMasCaro); 
	console.log("El producto con mayor cantidad es "+productoMayorCantidad+", y el promedio por compra fue "+promedio); 
	console.log("La cantidad total de jabon comprado fue de "+sumadorCantidadJabon+" unidades"); 

}/* //fin de funcion 
/*
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/


function mostrar()
{
	let continenteIngresado; 
	let habitantesIngresado; 
	let temperaturaIngresada; 
	let paisIngresado; 
	let nivelPobresaIngresado;
	let contadorTemperaturasPares; 
	let contadorTemperaturasImparesEnEuropa; 
	let contadorPaisesTemperaturaMayorCuarentaGrados; 
	let acumuladorHabitantesPaisesMayorCuarentaGrados; 
	let contadorPaisesAmericaTemperaturaMenorCeroGrados; 
	let promedioHabitantesPaisesIngresados; 
	let promedioHabitantesPaisesMayorCuarentaGrados;  
    let temperaturaMinimaIngresada; 
	let nombrePaisTemperaturaMinima; 
	let acumuladorHabitantesEuropa; 
	let acumuladorHabitantesAmerica; 
	let acumuladorHabitantesAsia; 
	let acumuladorHabitantesAfrica; 
	let acumularHabitantesOceania; 
    let nombrePaisConMenosHabitantes; 
	let menorCantidadDeHabitantesIngresados; 
	let continenteConMasHabitantes; 

    contadorPaises = 0; 
	contadorPaisesTemperaturaMayorCuarentaGrados = 0; 
	acumuladorHabitantesPaisesMayorCuarentaGrados = 0; 
	contadorPaisesAmericaTemperaturaMenorCeroGrados= 0; 
	contadorTemperaturasPares = 0; 
	contadorTemperaturasImparesEnEuropa = 0;  
	acumuladorHabitantesEuropa = 0; 
	acumuladorHabitantesAmerica = 0; 
	acumuladorHabitantesAsia = 0; 
	acumuladorHabitantesAfrica = 0; 
	acumularHabitantesOceania = 0; 

	while(contadorPaises<5)
	{
        
		continenteIngresado = prompt("Ingrese continente"); 
		while(isNaN(continenteIngresado)==true && continenteIngresado!="Asia" && continenteIngresado!="Africa" && continenteIngresado!="Europa" && continenteIngresado!="America" && continenteIngresado!="Oceania")
		{
			continenteIngresado = prompt("Error, ingrese continente : Europa, Asia, America, Oceania, Africa"); 
		}
	    
		paisIngresado = prompt("Ingrese Pais"); 
		while(isNaN(paisIngresado)==false)
		{
			paisIngresado = prompt("Error, ingrese un Pais"); 
		}

		habitantesIngresado = prompt("Ingrese cantidad de habitantes"); 
		habitantesIngresado = parseInt(habitantesIngresado); 
		while(isNaN(habitantesIngresado)==true || habitantesIngresado<1000000 || habitantesIngresado>7000000000)
		{
			habitantesIngresado = prompt("Error, ingrese habitantes entre 1 y 7000 Millones"); 
		    habitantesIngresado = parseInt(habitantesIngresado); 
		}
        
		temperaturaIngresada = prompt("Ingrese temperatura minima que registra su territorio"); 
		temperaturaIngresada = parseInt(temperaturaIngresada); 
		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<-51 || temperaturaIngresada>51)
		{
			temperaturaIngresada = prompt("Error, ingrese cantidad entre 1 y 1000"); 
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}
        
		nivelPobresaIngresado = prompt("Ingrese nivel de pobreza: pobre, rico, muy rico"); 
		
		if(continenteIngresado!="Europa")
		{
			while(isNaN(nivelPobresaIngresado)==true && nivelPobresaIngresado!="pobre" && nivelPobresaIngresado!="rico" && nivelPobresaIngresado!="muy rico")
			{
			nivelPobresaIngresado = prompt("Error, ingrese nivel de pobreza: pobre, rico, muy rico"); 
	    	}
		}
        else
		{
			while(isNaN(nivelPobresaIngresado)==true && nivelPobresaIngresado!="rico" && nivelPobresaIngresado!="muy rico")
			{
			nivelPobresaIngresado = prompt("Error, Europa solo tiene indices ricos y muy ricos"); 
			}
		}

		switch(continenteIngresado)
		{
			case"Asia": 
				acumuladorHabitantesAsia = acumuladorHabitantesAsia + habitantesIngresado; 
				break;      	 
			case"Europa": 
			    acumuladorHabitantesEuropa = acumuladorHabitantesEuropa + habitantesIngresado; 
				if(temperaturaIngresada%2!=0)
				{
					contadorTemperaturasImparesEnEuropa = contadorTemperaturasImparesEnEuropa + 1; 
				}
				 break; 
		    case "Oceania": 
			  	acumularHabitantesOceania = acumularHabitantesOceania + habitantesIngresado; 
				break;
			case "America": 
				acumuladorHabitantesAmerica = acumuladorHabitantesAmerica + habitantesIngresado; 
				if(temperaturaIngresada<1)
				{
					contadorPaisesAmericaTemperaturaMenorCeroGrados = contadorPaisesAmericaTemperaturaMenorCeroGrados + 1; 
				}
				break; 
			case "Africa":
				acumuladorHabitantesAfrica = acumuladorHabitantesAfrica + habitantesIngresado;  
				break;  
		}
		
		if(contadorPaises==1)
		{
			temperaturaMinimaIngresada=temperaturaIngresada; 
			nombrePaisTemperaturaMinima = paisIngresado; 
			menorCantidadDeHabitantesIngresados= habitantesIngresado; 
			nombrePaisConMenosHabitantes = paisIngresado; 

		}
		else
		{
			if(temperaturaIngresada>temperaturaMinimaIngresada)
			{
				temperaturaMinimaIngresada = temperaturaIngresada; 
				nombrePaisTemperaturaMinima = paisIngresado; 
			}
			if(menorCantidadDeHabitantesIngresados>habitantesIngresado)
			{
				menorCantidadDeHabitantesIngresados = habitantesIngresado; 
				nombrePaisConMenosHabitantes = paisIngresado; 
			}
		}
		if(temperaturaIngresada>39)
		{
			contadorPaisesTemperaturaMayorCuarentaGrados = contadorPaisesTemperaturaMayorCuarentaGrados+1; 
			acumuladorHabitantesPaisesMayorCuarentaGrados = acumuladorHabitantesPaisesMayorCuarentaGrados + habitantesIngresado; 
		}

		if(temperaturaIngresada%2==0)
		{
			contadorTemperaturasPares = contadorTemperaturasPares + 1; 
		}
	 contadorPaises = contadorPaises + 1; 

	}//fin de while

	promedioHabitantesPaisesIngresados = (acumuladorHabitantesAfrica + acumuladorHabitantesAmerica + acumuladorHabitantesAsia + acumuladorHabitantesEuropa + acumularHabitantesOceania)/contadorPaises; 
	promedioHabitantesPaisesMayorCuarentaGrados = acumuladorHabitantesPaisesMayorCuarentaGrados/contadorPaisesTemperaturaMayorCuarentaGrados; 

    if(acumuladorHabitantesAfrica>acumuladorHabitantesAmerica)
	{
		continenteConMasHabitantes = "Africa"; 
		
	}
	else
	{
        if(acumuladorHabitantesAmerica>acumuladorHabitantesAsia)
		{
			continenteConMasHabitantes = "America"; 
		}
		else
		{
			if(acumuladorHabitantesAsia>acumuladorHabitantesEuropa)
			{
				continenteConMasHabitantes = "Asia"; 
			}
            else
			{
				if(acumuladorHabitantesEuropa>acumularHabitantesOceania)
				{
					continenteConMasHabitantes = "Europa"; 
				}
				else
				{
					continenteConMasHabitantes = "Oceania"; 
				}
			}
		}
	}
    
	console.log("La cantidad de temperaturas pares es "+contadorTemperaturasPares); 
	contador.log("la cantidad de temperaturas impares de europa es "+ contadorTemperaturasImparesEnEuropa); 
	console.log("El nombre del pais con menos habitantes es "+ nombrePaisConMenosHabitantes); 
	console.log("la cantidad de paises que superan los 40 grados es " + contadorPaisesTemperaturaMayorCuarentaGrados); 
	console.log("la cantidad de paises de america que tienen menos de 0 grados es " + contadorPaisesAmericaTemperaturaMenorCeroGrados); 
	console.log("el promedio de habitantes entre los paises ingresados es "+promedioHabitantesPaisesIngresados);  
	console.log("el promedio de habitantes entre los paises que superan los 40 grados es "+promedioHabitantesPaisesMayorCuarentaGrados);         
	console.log("la temperatura mínima ingresada fue "+temperaturaMinimaIngresada+" en "+nombrePaisTemperaturaMinima+" pais. ") 
	console.log("continente que tiene mas habitantes es " + continenteConMasHabitantes)
}