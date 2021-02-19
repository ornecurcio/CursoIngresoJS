/*Ornela Curcio
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let nombreIngresado; 
	let edadIngresada; 
	let sexoIngresado; 
	let estadoCivilIngresado; 
	let temperaturaIngresada; 
	let temperaturaMayor;
	let banderaTemperatura;  
	let nombreMayorTemperatura; 
	let cantidadSolteros;
	let cantidadViudos; 
	let cantidadmayorEdadViudo;  
	let hombresSolteroViudo; //
	let cantidadterceraEdadTemperatura;
	let promedioEdadSolteros; 
	let acumuladorEdadSoltero; 
	let respuesta; 

	respuesta = "si"; 
	cantidadSolteros = 0;  
	cantidadViudos = 0; 
	cantidadmayorEdadViudo = 0; 
	cantidadterceraEdadTemperatura = 0; 
	acumuladorEdadSoltero = 0; 
	banderaTemperatura = 1; 


	while(respuesta=="si")
	{
		nombreIngresado = prompt("Ingrese su Nombre"); 
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado = prompt("Error, ingrese su Nombre"); 
		}

		edadIngresada = prompt("Ingrese su edad")
		edadIngresada = parseInt(edadIngresada); 
		while(isNaN(edadIngresada)==true || edadIngresada<18 || edadIngresada>91)
		{
			edadIngresada = prompt("Error, ingrese su edad"); 
		}
    
		sexoIngresado = prompt("Ingrese su sexo: M o F");
		while(sexoIngresado!="F" && sexoIngresado!="M")
		{
			sexoIngresado = prompt("Error, ingrese F o M"); 
		} 
   
		estadoCivilIngresado = prompt("Ingrese su estado civil: soltero, casado o viudo"); 
		while(isNaN(estadoCivilIngresado)==false && estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado = prompt("Error, ingrese su estado civil: soltero, casado o viudo"); 
		}
		temperaturaIngresada = prompt("Ingrese su temperatura"); 
		temperaturaIngresada = parseFloat(temperaturaIngresada); 
		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<28 || temperaturaIngresada>42)
		{
			temperaturaIngresada = prompt("Error, ingrese su temperatura"); 
			temperaturaIngresada = parseFloat(temperaturaIngresada);  
		}

		if(banderaTemperatura==1)
		{
			temperaturaMayor = temperaturaIngresada; 
			nombreMayorTemperatura = nombreIngresado; 
			banderaTemperatura = 0; 
		}
		else
		{
			if(temperaturaIngresada>temperaturaMayor)
			{
				temperaturaMayor = temperaturaIngresada; 
				nombreMayorTemperatura = nombreIngresado; 
			}
		}
        
		if(temperaturaIngresada>38 && edadIngresada>60)
		{
          cantidadterceraEdadTemperatura = cantidadterceraEdadTemperatura + 1; 
		}

		switch(estadoCivilIngresado)
		{
			case "soltero": 
				cantidadSolteros = cantidadSolteros + 1; 
				acumuladorEdadSoltero = acumuladorEdadSoltero + edadIngresada; 
				break; 
			case "casado": 
				break; 
			case "viudo": 
				cantidadViudos = cantidadViudos + 1; 
				if(edadIngresada>17)
				{
                   cantidadmayorEdadViudo = cantidadmayorEdadViudo + 1;  
				}
				break;  	
		}  
		
		respuesta = prompt("Desea cargar nueva persona?"); 
 	}

    promedioEdadSolteros = acumuladorEdadSoltero/cantidadSolteros; 
	promedioEdadSolteros = parseInt(promedioEdadSolteros); 

	hombresSolteroViudo = cantidadSolteros + cantidadViudos; 

    console.log("La persona con mas temperatura es "+nombreMayorTemperatura+" con "+temperaturaMayor+" grados centigrados")
	console.log("Hay "+cantidadmayorEdadViudo+" personas que son mayores de edad y viudas"); 
	console.log("La cantidad de solteros y viudos total es: "+hombresSolteroViudo); 
	console.log("Hay "+cantidadterceraEdadTemperatura+" personas que son de la tercera edad y tienen fiebre")
	console.log("El promedio de la edad entre los hombres solteros es "+promedioEdadSolteros+" años")
}//fin de funcion
