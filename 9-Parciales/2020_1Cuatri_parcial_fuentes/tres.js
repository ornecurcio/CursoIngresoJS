/*Ornela Curcio
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
/*function mostrar()
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
}*///fin de funcion

/*pedir el ingreso de 10 mascotas
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza */

function mostrar()
{

	let tipoAminalIngresado; 
	let razaAnimalIngresado; 
	let edadIngresada; 
	let nombreIngresado; 
	let nombreGatoMasViejo; 
	let edadGatoMasViejo; 
	let nombrePerroMasViejo; 
	let edadPerroMasViejo; 
	let nombrePajaroMasViejo; 
	let edadPajaroMasViejo; 
	let nombreOtroMasViejo; 
	let edadOtroMasViejo; 
	let contadorSiames;
	let acumuladorEdadSiames;  
	let contadorTurco;
	let acumuladorEdadTurco;  
	let contadorPaterbald; 
	let acumuladorEdadPaterbald; 
	let contadorGenericoGato; 
	let acumuladorEdadGenerico; 
	let contadorAnimalIngresado;
	let contadorGatos; 
	let contadorPerros; 
	let contadorPajaros; 
	let contadorOtros; 
	let mensajePerroMasViejo;
	let mensajeGatoMasViejo; 
	let mensajeOtroMasViejo; 
	let mensajePajaroMasViejo; 
	let mensajeRazaGatos;   

	contadorAnimalIngresado=0; 
	contadorGenericoGato=0; 
	contadorSiames=0; 
	contadorTurco=0; 
	contadorPaterbald=0;
	contadorGatos=0; 
	contadorPerros=0; 
	contadorPajaros=0; 
	contadorOtros=0;
	acumuladorEdadGenerico=0; 
	acumuladorEdadPaterbald=0; 
	acumuladorEdadSiames=0; 
	acumuladorEdadTurco=0; 

	while(contadorAnimalIngresado<2)
	{
		contadorAnimalIngresado = contadorAnimalIngresado +1; 

		nombreIngresado = prompt("Ingrese nombre de Mascota"); 
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado = prompt("Error, ingrese nombre de Mascota"); 
		}

		tipoAminalIngresado = prompt("Ingrese tipo de animal: gato, perro, pajaro, otro"); 
		while(isNaN(tipoAminalIngresado)==false || tipoAminalIngresado!="perro" &&  tipoAminalIngresado!="gato" &&  tipoAminalIngresado!="pajaro" &&  tipoAminalIngresado!="otro")
		{
			tipoAminalIngresado = prompt("Error, ingrese tipo de animal: gato, perro, pajaro, otro"); 
		}
		switch(tipoAminalIngresado)
		{
			case"gato": 
				razaAnimalIngresado = prompt ("Ingrese raza: siames, turco, paterbald, generico"); 
				while(isNaN(razaAnimalIngresado)==false ||razaAnimalIngresado!="siames" &&  razaAnimalIngresado!="turco" &&  razaAnimalIngresado!="paterbald" &&  razaAnimalIngresado!="generico")
				{
					razaAnimalIngresado = prompt ("Error, ingrese raza: siames, turco, paterbald, generico"); 
				}
				edadIngresada = prompt("Ingrese edad entre 1 y 20");
				edadIngresada = parseInt (edadIngresada);  
				while(isNaN(edadIngresada)==true || edadIngresada>21 || edadIngresada<0)
				{
					edadIngresada = prompt("Error, ingrese edad entre 1 y 20"); 
					edadIngresada = parseInt (edadIngresada); 
				}
				contadorGatos = contadorGatos +1; 
				if(contadorGatos==1)
				{
					edadGatoMasViejo = edadIngresada; 
					nombreGatoMasViejo = nombreIngresado; 
				}
				else
				{
					if(edadGatoMasViejo<edadIngresada)
					{
						edadGatoMasViejo = edadIngresada; 
						nombreGatoMasViejo = nombreIngresado;
					}
				}
				break; 
			case "perro": 
				razaAnimalIngresado = prompt ("Ingrese raza: pastor, toy o callejero"); 
				while(isNaN(razaAnimalIngresado)==false ||razaAnimalIngresado!="pastor" &&  razaAnimalIngresado!="toy" &&  razaAnimalIngresado!="callejero")
				{
					razaAnimalIngresado = prompt ("Error, ingrese raza: pastor, toy o callejero"); 
				}
				edadIngresada = prompt("Ingrese edad entre 1 y 20");
				edadIngresada = parseInt (edadIngresada);  
				while(isNaN(edadIngresada)==true || edadIngresada>21 || edadIngresada<0)
				{
					edadIngresada = prompt("Error, ingrese edad entre 1 y 20"); 
					edadIngresada = parseInt (edadIngresada); 
				}
				contadorPerros = contadorPerros + 1; 
				if(contadorPerros==1)
				{
					edadPerroMasViejo = edadIngresada; 
					nombrePerroMasViejo = nombreIngresado; 
				}
				else
				{
					if(edadPerroMasViejo<edadIngresada)
					{
						edadPerroMasViejo = edadIngresada; 
						nombrePerroMasViejo = nombreIngresado;
					}
				}
				break;
			case "pajaro": 
				razaAnimalIngresado = prompt ("Ingrese raza: no pueden ser solo numeros"); 
				while(isNaN(razaAnimalIngresado)==false)
				{
					razaAnimalIngresado = prompt ("Error, ingrese raza: NO pueden ser solo numeros"); 
				}
				edadIngresada = prompt("Ingrese edad entre 1 y 50"); 
				edadIngresada = parseInt (edadIngresada); 
				while(isNaN(edadIngresada)==true || edadIngresada>51 || edadIngresada<0)
				{
					edadIngresada = prompt("Error, ingrese edad entre 1 y 50"); 
					edadIngresada = parseInt (edadIngresada); 
				}
				contadorPajaros = contadorPajaros + 1; 
				if(contadorPajaros==1)
				{
					edadPajaroMasViejo = edadIngresada; 
					nombrePajaroMasViejo = nombreIngresado; 
				}
				else
				{
					if(edadPajaroMasViejo<edadIngresada)
					{
						edadPajaroMasViejo = edadIngresada; 
						nombrePajaroMasViejo = nombreIngresado;
					}
				}
				break;
			case "otro": 
				razaAnimalIngresado = prompt ("Ingrese raza: no pueden ser solo numeros"); 
				while(isNaN(razaAnimalIngresado)==false)
				{
					razaAnimalIngresado = prompt ("Error, ingrese raza: NO pueden ser solo numeros"); 
				}
				edadIngresada = prompt("Ingrese edad entre 1 y 100"); 
				edadIngresada = parseInt (edadIngresada); 
				while(isNaN(edadIngresada)==true || edadIngresada>101 || edadIngresada<0)
				{
				edadIngresada = prompt("Error, ingrese edad entre 1 y 100"); 
				edadIngresada = parseInt (edadIngresada); 
				}
				contadorOtros = contadorOtros + 1; 
				if(contadorOtros==1)
				{
					edadOtroMasViejo = edadIngresada; 
					nombreOtroMasViejo = nombreIngresado; 
				}
				else
				{
					if(edadOtroMasViejo<edadIngresada)
					{
						edadOtroMasViejo = edadIngresada; 
						nombreOtroMasViejo = nombreIngresado;
					}
				}
				break;
		}
		switch(razaAnimalIngresado)
		{
			case"siames": 
				contadorSiames = contadorSiames + 1; 
				acumuladorEdadSiames = acumuladorEdadSiames + edadIngresada; 
				break; 
			case "turco": 
				contadorTurco = contadorTurco + 1; 
				acumuladorEdadTurco = acumuladorEdadTurco + edadIngresada; 
				break; 
			case"paterbald": 
				contadorPaterbald = contadorPaterbald + 1; 
				acumuladorEdadPaterbald = acumuladorEdadPaterbald + edadIngresada; 
				break; 
			case"generico": 
				contadorGenericoGato = contadorGenericoGato + 1;
				acumuladorEdadGenerico = acumuladorEdadPaterbald + edadIngresada;  
				break; 
		} 
		
	}//findeWhile
	
   if(contadorPerros>0)
   { 
	    mensajePerroMasViejo = "El perro mas viejo se llama "+nombrePerroMasViejo+" con "+edadPerroMasViejo+" años de edad. "; 
   }
   else
   {
	    mensajePerroMasViejo = "No hay perros. "; 
   }
   if(contadorPajaros>0)
   {
	    mensajePajaroMasViejo = "El pajaro mas viejo se llama "+nombrePajaroMasViejo+" con "+edadPajaroMasViejo+" años de edad. ";
   }
   else
   {
	    mensajePajaroMasViejo = "No hay pajaros. "; 
   }
   if(contadorOtros>0)
   {
	    mensajeOtroMasViejo = "El 'otro' mas viejo se llama "+nombreOtroMasViejo+" con "+edadOtroMasViejo+" años de edad. ";
   }
   else
   {
		mensajeOtroMasViejo = "No hay otro. "; 
   }
   if(contadorGatos>0)
   {
	    mensajeGatoMasViejo = "El 'Gato' mas viejo se llama "+nombreGatoMasViejo+" con "+edadGatoMasViejo+" años de edad. ";
   }
   else
   {
		mensajeGatoMasViejo = "No hay gatos. "; 
   }

   if(contadorSiames>contadorTurco)
   {
	   mensajeRazaGatos = "La mayor cantidad de gatos es la Siames con "+contadorSiames+" y "+(acumuladorEdadSiames/contadorSiames)+" promedio de edad. "; 
   }
   else 
   {
	   if(contadorTurco>contadorPaterbald)
	   {
		   mensajeRazaGatos = "La mayor cantidad de gatos es la Turco con "+contadorTurco+" y "+(acumuladorEdadTurco/contadorTurco)+" promedio de edad. "; 
	   }
	   else
	   {
		   if(contadorPaterbald>contadorGenericoGato)
		   {
			   mensajeRazaGatos = "La mayor cantidad de gatos es la Paterbald con "+contadorPaterbald+" y "+(acumuladorEdadPaterbald/contadorPaterbald)+" promedio de edad. "; 
		   }
		   else
		   {
			   if(contadorGenericoGato>contadorSiames)
			   {
				   mensajeRazaGatos = "La mayor cantidad de gatos es la Generico con "+contadorGenericoGato+" y "+(acumuladorEdadGenerico/contadorGenericoGato)+" promedio de edad. "; 
			   }
			   else
			   {
				   mensajeRazaGatos = "NO raza predominante de gatos. "; 
			   }
		   }
	   }
   }
	console.log(mensajeGatoMasViejo); 
	console.log(mensajeOtroMasViejo); 
	console.log(mensajePerroMasViejo); 
	console.log(mensajePajaroMasViejo); 
	console.log(mensajeRazaGatos); 
}  