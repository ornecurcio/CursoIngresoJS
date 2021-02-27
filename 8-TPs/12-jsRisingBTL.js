/*Ornela  Curcio
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide 
realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
/*function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto; 
	let numeroLegajo; 
	let nacionalidad;  

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
    switch(sexoIngresado)
	{
		case"F": 
			sexoIngresado = "Femenino"
			break; 
		case"M": 
			sexoIngresado = "Masculino"
			break; 	
	}

	estadoCivilIngresado = prompt("Ingrese su estado civil: 1-Soltero, 2-Casado, 3-Divorciado, 4-Viudo");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);  
    while(isNaN(estadoCivilIngresado)==true || (estadoCivilIngresado>4) || (estadoCivilIngresado<1))
	{
		estadoCivilIngresado = prompt("Error, ingrese: 1-Soltero, 2-Casado, 3-Divorciado, 4-Viudo"); 
		estadoCivilIngresado = parseInt(estadoCivilIngresado); 
	}
	switch(estadoCivilIngresado)
	{
		case 1: 
			estadoCivilIngresado = "Soltero"; 
			break; 
		case 2: 
			estadoCivilIngresado = "Casado"; 
			break; 
		case 3: 
			estadoCivilIngresado = "Divorciado";
			break; 
		case 4: 
			estadoCivilIngresado = "Viudo"
			break; 
	}      
	
	sueldoBruto = prompt("Ingrese sueldo bruto");
	sueldoBruto = parseInt(sueldoBruto); 
	while(isNaN(sueldoBruto)==true || sueldoBruto<8000)
	{
		sueldoBruto = prompt("Error, ingrese sueldo bruto"); 
		sueldoBruto = parseInt(sueldoBruto); 
	}
	
	numeroLegajo = prompt("Ingrese numero de legajo, cuatro cifras"); 
	numeroLegajo = parseInt(numeroLegajo); 
	while(isNaN(numeroLegajo)==true || numeroLegajo>9999 || numeroLegajo<1000)
	{
		numeroLegajo = prompt("Error, ingrese numero de legajo, 4 cifras"); 
		numeroLegajo = parseInt(numeroLegajo); 
	}
    
	nacionalidad = prompt("Ingrese nacionalidad: A-argentinos, E-extranjeros, N-nacionalizados");
	while(isNaN(nacionalidad)==false || nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		nacionalidad = prompt("Error, ingrese: A-argentinos, E-extranjeros, N-nacionalizados")
	}    
    switch(nacionalidad)
	{
		case"A": 
			nacionalidad = "Argentino"; 
			break; 
		case"E": 
			nacionalidad = "Extranjero"; 
			break; 
		case"N": 
			nacionalidad = "Nacionalizado"; 
			break; 
	}
	document.getElementById("txtIdEdad").value = edadIngresada + " años"; 
	document.getElementById("txtIdSexo").value = sexoIngresado; 
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado; 
	document.getElementById("txtIdSueldo").value = sueldoBruto + " pesos"; 
	document.getElementById("txtIdLegajo").value = numeroLegajo; 
	document.getElementById("txtIdNacionalidad").value = nacionalidad; 

}*/

/*For 10 A-ingrese nombre , sexo , edad (
	validar que si es mujer debe ser adolescente y si el hombre debe ser niño), 
	altura (validar), temperatura corporal 
	B- necesitamos saber: el nombre y el sexo de la persona mas alta , 
	--de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , 
	... solo si los hay
	C-- el promedio de edad entre los hombres, el promedio de edad entre las mujeres, 
	la cantidad de personas que miden mas de 1,60 metros,
	 y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
*/
	
	//Ornela  Curcio

/*function ComenzarIngreso () 
{
 	//definicion de variables
	let nombreIngresado; 
 	let edadIngresada;
 	let sexoIngresado;
	let temperaturaCorporal; 
	let altura; 
	let alturaMasAlta;
	let nombreMasAlta; 
	let sexoMasAlta; 
	let banderaMasAlta; 
	let mensajeAltura; 
	let edadMujerMasJoven;
	let nombreMujerMasJoven;
	let mensajeMasJoven; 
    let mensajePromedioMujeres; 
	let alturaHombreMasBajo; 
	let nombreHombreMasBajo
	let mensajeMasBajo; 
	let contadorEdadHombres; 
	let acumuladorEdadHombres; 
	let promedioEdadHombres; 
	let mensajePromedioHombres; 
	let contadorEdadMujeres;
	let acumuladorEdadMujeres; 
    let promedioEdadMujeres;  
	let contadorAlturaMayorUnoSesenta; 
	let contadorMujeresAlturaMayorUnoSesenta; 
	let porcentajeMujeresAlturaMayorUnoSesenta;
	let respuesta; 

	respuesta = "si"; 
	banderaMasAlta = 1;
	contadorEdadHombres=0; 
	contadorEdadMujeres=0; 
	acumuladorEdadHombres=0; 
	acumuladorEdadMujeres=0; 
	contadorAlturaMayorUnoSesenta=0; 
	contadorMujeresAlturaMayorUnoSesenta=0;  
	
	while(respuesta=="si")
	{  
		nombreIngresado = prompt("Ingrese su nombre"); 
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado = prompt("Error, ingrese su nombre"); 
		}

		sexoIngresado = prompt("Ingrese su sexo: M o F");
		while(sexoIngresado!="F" && sexoIngresado!="M")
		{
			sexoIngresado = prompt("Error, ingrese F o M"); 
		} 

		altura = prompt("Ingrese su altura en metros"); 
		altura = parseFloat(altura); 
		while(isNaN(altura)==true || altura>2.5 || altura<0.50)
		{
			altura = prompt("Error, ingrese su altura en metros"); 
			altura = parseFloat(altura); 
		}

		switch(sexoIngresado)
		{
			case"F": 
				sexoIngresado = "Femenino"; 
				edadIngresada = prompt("Ingrese su edad"); 
				while(isNaN(edadIngresada)==true || edadIngresada<12 || edadIngresada>18)
				{
					edadIngresada = prompt("Error, usted debe ser adolescente");
				}
				contadorEdadMujeres=contadorEdadMujeres+1; 
                acumuladorEdadMujeres=acumuladorEdadMujeres+edadIngresada; 

				if(contadorEdadMujeres==1)
				{
					edadMujerMasJoven=edadIngresada; 
					nombreMujerMasJoven = nombreIngresado; 
				}
				else
				{
					if(edadMujerMasJoven>edadIngresada)
					{
					edadMujerMasJoven=edadIngresada; 
					nombreMujerMasJoven = nombreIngresado;
					}
				}
				break; 
			case"M": 
				sexoIngresado = "Masculino"; 
				edadIngresada = prompt("Ingrese su edad"); 
				while(isNaN(edadIngresada)==true || edadIngresada>12 || edadIngresada<4)
				{
					edadIngresada = prompt("Error, usted debe ser niño");
				}
				contadorEdadHombres=contadorEdadHombres+1; 
				acumuladorEdadHombres=acumuladorEdadHombres+edadIngresada; 

				if(contadorEdadHombres==1)
				{
					alturaHombreMasBajo = altura;
					nombreHombreMasBajo = nombreIngresado; 
				}
				else
				{
					if(altura<alturaHombreMasBajo)
					{
					alturaHombreMasBajo = altura;
					nombreHombreMasBajo = nombreIngresado; 
					}
				}
				break; 	
		}
		
		temperaturaCorporal = prompt("Ingrese temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal); 
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<25 || temperaturaCorporal>42)
		{
			temperaturaCorporal = prompt("Error, ingrese temperatura corporal"); 
			temperaturaCorporal = parseInt(temperaturaCorporal); 
		}
		
		if(banderaMasAlta==1)
		{
			alturaMasAlta = altura;
			nombreMasAlta = nombreIngresado; 
			sexoMasAlta = sexoIngresado; 
			banderaMasAlta = 0; 
		}
		else
		{
           if(altura>alturaMasAlta)
		   {
			alturaMasAlta = altura;
			nombreMasAlta = nombreIngresado; 
			sexoMasAlta = sexoIngresado; 
		   }
		   
		}
		if(altura>1.59)
		{
			contadorAlturaMayorUnoSesenta = contadorAlturaMayorUnoSesenta + 1; 
			{
	            if(sexoIngresado=="F")
				{
					contadorMujeresAlturaMayorUnoSesenta = contadorMujeresAlturaMayorUnoSesenta + 1;
				}
			}
		}
		
		console.log("Usted se llama "+ nombreIngresado);
		console.log("usted es "+ sexoIngresado); 
		console.log("Usted tiene "+edadIngresada + " años"); 
		console.log("Usted mide "+ altura + " metros"); 
		console.log("usted tiene "+temperaturaCorporal+" grados de temperatura"); 

		respuesta = prompt("quiere ingresar una nueva persona?"); 
	}

     if(contadorMujeresAlturaMayorUnoSesenta>0)
	 {
	    porcentajeMujeresAlturaMayorUnoSesenta = contadorAlturaMayorUnoSesenta / contadorMujeresAlturaMayorUnoSesenta *100;
		mensajeAltura= "El porcentaje de mujeres de mas de 1.60 es "+porcentajeMujeresAlturaMayorUnoSesenta
	 }
	 else
	 {
		 mensajeAltura = "La cantidad de personas mayor a 1.60 es "+contadorAlturaMayorUnoSesenta; 
	 }
    
	 if(contadorEdadMujeres>0)
	 {
        promedioEdadMujeres = acumuladorEdadMujeres/contadorEdadMujeres;
		mensajePromedioMujeres = "El promedio de edad de las mujeres es "+ promedioEdadMujeres+" años. "; 
		mensajeMasJoven = "El nombre de la mujer mas joven es "+nombreMujerMasJoven+" con "+edadMujerMasJoven+" años ";
	 }
	 else
	 {
		mensajePromedioMujeres = "NO hay mujeres"; 
		mensajeMasJoven = " "; 
	 }
	 
	 if(contadorEdadHombres>0)
	 {
		promedioEdadHombres = acumuladorEdadHombres/contadorEdadHombres;
		mensajePromedioHombres = "El promedio de la edad de los hombres es "+promedioEdadHombres+" años. ";  
		mensajeMasBajo="El nombre del hombre mas bajito es "+nombreHombreMasBajo+" y mide "+alturaHombreMasBajo+" metros. ";
	 }
     else
	 {
		 mensajePromedioHombres = "NO hay hombres"; 
		 mensajeMasBajo = " "; 
	 }
    console.log("El nombre de la persona mas alta es "+nombreMasAlta+" de sexo "+sexoMasAlta+" y mide "+alturaMasAlta+" metros"); 
	console.log(mensajeMasJoven + mensajePromedioMujeres); 
	console.log(mensajeMasBajo + mensajePromedioHombres); 
	console.log(mensajeAltura);  
}//fin funcion*/

/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano

 */

 
function ComenzarIngreso () 
{
 	//definicion de variables
	let nombreIngresado; 
 	let edadIngresada;
 	let animalIngresado;
	let temperaturaCorporal; 
	let pesoIngresado; 
	let razaIngresada; 
	let estadoClinico; 
	let tipoDePelo; 
	let pesoPerroMasPesado; 
	let nombrePerroMasPesado; 
	let porcentajeAnimalesEnfermos; 
	let contadorAnimalesEnfermos; 
	let contadorAnimalesInternados; 
	let contadorAnimalesAdopcion; 
	let contadorAnimales; 
	let nombreUltimaMascotaOtraCosa; 
	let temperaturaAnimalSinPeloConMenorTemperatura; 
	let tipoDeAnimalSinPeloConMenorTemperatura; 
	let nombreDeAnimalSinPeloConMenorTemperatura; 
	let tipoDeAnimalConMayorPromedioDeTemperaturaCorporal; 
	let contadorPerro; 
	let contadorGato; 
	let contadorOtraCosa; 
	let acumuladorTemperaturaPerro; 
	let acumuladorTemperaturaGato; 
	let acumuladorTemperaturaOtraCosa; 
	let promedioTemperaturaPerro; 
	let promedioTemperaturaGato; 
	let promedioTemperaturaOtraCosa; 
	let acumuladorPesoMascotas; 
	let promedioPesoMascotas; 
	let pesoGatoSinPeloMasLiviano; 
	let nombreGatoSinPelosMasLiviano; 
	let razaGatoSinPelosMasLiviano;
	let porcentajePerroMasGato; 
	let estadoClinicoConMenosMascotas; 
	let contadorSinPelo;
	let mensajeSinPelo;   
	let mensajePerroMasPesado; 
	let mensajeGatoSinPelo; 


	let respuesta; 

	respuesta = "si"; 
	contadorAnimales = 0; 
	contadorAnimalesEnfermos = 0; 
	contadorAnimalesAdopcion = 0; 
	contadorAnimalesInternados = 0; 
	contadorGato = 0; 
	contadorPerro = 0; 
	contadorOtraCosa = 0;
	acumuladorPesoMascotas = 0; 
	acumuladorTemperaturaGato = 0; 
	acumuladorTemperaturaOtraCosa = 0; 
	acumuladorTemperaturaPerro = 0; 
	contadorSinPelo = 0; 
	
	while(respuesta=="si")
	{  
		nombreIngresado = prompt("Ingrese nombre de mascota"); 
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado = prompt("Error, ingrese nombre de mascota"); 
		}
		razaIngresada = prompt("Ingrese una raza"); 
		while(isNaN(razaIngresada)==false)
		{
			razaIngresada = prompt("Error, ingrese una raza"); 
		}
		animalIngresado = prompt("Ingrese perro, gato u 'otra cosa'");
		while(animalIngresado!="perro" && animalIngresado!="gato" && animalIngresado!="otra cosa")
		{
			animalIngresado = prompt("Error, ingrese perro, gato u 'otra cosa'"); 
		} 
		pesoIngresado = prompt("Ingrese el peso del animal en kilos"); 
		pesoIngresado = parseFloat(pesoIngresado); 
		while(isNaN(pesoIngresado)==true || pesoIngresado>0.5 || pesoIngresado<200)
		{
			pesoIngresado = prompt("Error, ingrese el peso de su mascota en kilos"); 
			pesoIngresado = parseFloat(pesoIngresado); 
		}
        estadoClinico = prompt("Ingrese estado clinico: enfermo, internado, adopcion"); 
		while(isNaN(estadoClinico)==true || estadoClinico!="enfermo" || estadoClinico!="internado" || estadoClinico!="adopcion")
		{
			estadoClinico = prompt("Error, ingrese estado clinico: enfermo, internado, adopcion"); 
		}
		tipoDePelo = prompt("Ingrese tipo de pelo: corto, largo, sin pelo"); 
		while(isNaN(tipoDePelo)==true || tipoDePelo!="corto" || tipoDePelo!="largo" || tipoDePelo!="sin pelo")
		{
			tipoDePelo = prompt("Error, ingrese tipo de pelo: corto, largo, sin pelo"); 
		}
        temperaturaCorporal = prompt("Ingrese temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal); 
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<25 || temperaturaCorporal>42)
		{
			temperaturaCorporal = prompt("Error, ingrese temperatura corporal"); 
			temperaturaCorporal = parseInt(temperaturaCorporal); 
		}
		
		switch(animalIngresado)
		{
			case"perro": 
				contadorPerro = contadorPerro + 1; 
				acumuladorTemperaturaPerro = acumuladorTemperaturaPerro + temperaturaCorporal; 
				if(contadorPerro==1)
				{
					pesoPerroMasPesado = pesoIngresado; 
					nombrePerroMasPesado = nombreIngresado; 
				}
				else
				{
                    if(pesoPerroMasPesado<pesoIngresado)
					{
						PesoPerroMasPesado = pesoIngresado; 
						nombrePerroMasPesado = nombreIngresado; 	
					}
				}
				break; 
			case"gato": 
				contadorGato = contadorGato + 1; 
				acumuladorTemperaturaGato = acumuladorTemperaturaGato + temperaturaCorporal; 
				if(tipoDePelo=="sin pelo" && contadorGato==1)
				{
					pesoGatoSinPeloMasLiviano = pesoIngresado; 
					nombreGatoSinPelosMasLiviano = nombreIngresado; 
					razaGatoSinPelosMasLiviano = razaIngresada; 
				}
				else
				{
					if(tipoDePelo=="sin pelo" && pesoGatoSinPeloMasLiviano>pesoIngresado)
					{
						pesoGatoSinPeloMasLiviano = pesoIngresado; 
						nombreGatoSinPelosMasLiviano = nombreIngresado; 
						razaGatoSinPelosMasLiviano = razaIngresada; 
					}
				}
				break; 	
			case"otra cosa": 
				contadorOtraCosa = contadorOtraCosa + 1; 
				acumuladorTemperaturaOtraCosa = acumuladorTemperaturaOtraCosa + temperaturaCorporal; 
			if(contadorOtraCosa>0)
			{
				nombreUltimaMascotaOtraCosa = nombreIngresado; 
			}
			break; 
		}
		switch(estadoClinico)
		{
			case"enfermo": 
				contadorAnimalesEnfermos = contadorAnimalesEnfermos + 1; 
				break; 
			case"internados": 
				contadorAnimalesInternados = contadorAnimalesInternados + 1; 
				break; 
			case"adopcion": 
				contadorAnimalesAdopcion = contadorAnimalesAdopcion + 1; 
				break; 
		}
		switch(tipoDePelo)
		{
			case"corto": 
				break; 
			case"largo":
				break; 
			case"sin pelo": 
				contadorSinPelo = contadorSinPelo + 1 
				if(contadorSinPelo==1)
				{
					temperaraturaAnimalSinPeloConMenorTemperatura = temperaturaCorporal; 
					tipoDeAnimalSinPeloConMenorTemperatura = animalIngresado; 
					nombreDeAnimalSinPeloConMenorTemperatura = nombreIngresado; 
				}
				else 
				{
					if(temperaturaAnimalSinPeloConMenorTemperatura>temperaturaCorporal)
						{
							temperaraturaAnimalSinPeloConMenorTemperatura = temperaturaCorporal; 
							tipoDeAnimalSinPeloConMenorTemperatura = animalIngresado; 
							nombreDeAnimalSinPeloConMenorTemperatura = nombreIngresado
						}
				}
				break; 
		}
		
		console.log("Su mascota se llama "+ nombreIngresado);
		console.log("Su mascota es "+ animalIngresado); 
		console.log("Su mascota tiene "+edadIngresada + " años"); 
		console.log("Su mascota pesa "+ pesoIngresado + " kilos"); 
		console.log("Su mascota tiene "+temperaturaCorporal+" grados de temperatura"); 

        contadorAnimales = contadorAnimales+1; 
		acumuladorPesoMascotas = acumuladorPesoMascotas + pesoIngresado; 
		respuesta = prompt("quiere ingresar una nueva persona?"); 

	}//fin de while

	
	promedioTemperaturaGato = acumuladorTemperaturaGato/contadorGato; 
	promedioTemperaturaPerro = acumuladorTemperaturaPerro/contadorPerro; 
	promedioTemperaturaOtraCosa = acumuladorTemperaturaOtraCosa/contadorOtraCosa; 
	promedioPesoMascotas = acumuladorPesoMascotas/contadorAnimales; 

    if(contadorPerro>0 || contadorGato>0)
	{
		porcentajePerroMasGato = contadorAnimales/(contadorPerro+contadorGato)*100; 
	}
	else
	{
		porcentajePerroMasGato = "cero"; 
	}
	if(promedioTemperaturaGato>promedioTemperaturaPerro)
	{
		tipoDeAnimalConMayorPromedioDeTemperaturaCorporal = "Gato"; 
	}
	else
	{
		if(promedioTemperaturaPerro>promedioTemperaturaOtraCosa)
		{
			tipoDeAnimalConMayorPromedioDeTemperaturaCorporal = "Perro"; 
		}
		else 
		{
			tipoDeAnimalConMayorPromedioDeTemperaturaCorporal = "Otra Cosa"; 
		}
	}
    if(contadorAnimalesAdopcion<contadorAnimalesEnfermos)
	{
		estadoClinicoConMenosMascotas = "Adopcion"; 
	}
	else
	{
		if(contadorAnimalesEnfermos<contadorAnimalesInternados)
		{
			estadoClinicoConMenosMascotas = "Enfermos"; 
		}
		else
		{
			estadoClinicoConMenosMascotas = "Internados"; 
		}
	}
    if(contadorPerro>0)
	{
		mensajePerroMasPesado = "El perro mas pesado es "+nombrePerroMasPesado+ " con "+pesoPerroMasPesado+" kilos"; 
	}
	else
	{
		mensajePerroMasPesado = "No hay perros"; 
	}
	if(contadorAnimalesEnfermos>0)
	{
		porcentajeAnimalesEnfermos = contadorAnimales/contadorAnimalesEnfermos*100; 
	}
	else
	{
		porcentajeAnimalesEnfermos = "cero"; 
	}
	if(contadorSinPelo>0)
	{
		mensajeSinPelo = "El tipo de animal sin pelo con menor temperatura corporal es "+tipoDeAnimalSinPeloConMenorTemperatura+ " y se llama "+nombreDeAnimalSinPeloConMenorTemperatura; 
	}
    else
	{
		mensajeSinPelo = "NO hay animales 'sin pelo' "
	}
	if(contadorGato>0 && tipoDePelo=="sin pelo")
	{
		mensajeGatoSinPelo = "El nombre de gato sin pelo mas liviano es "+nombreGatoSinPelosMasLiviano+ "y es de "+razaGatoSinPelosMasLiviano+" raza"; 
	}
	else
	{
		mensajeGatoSinPelo = "NO hay gatos 'sin pelo'"; 
	}
     
    
	  
    console.log(mensajePerroMasPesado); 
    console.log("El porcentaje de enfermos sobre el total de mascotas es "+porcentajeAnimalesEnfermos + "%")
	console.log("El nombre de la ultima mascota de tipo 'otra cosa' es "+nombreUltimaMascotaOtraCosa); 
	console.log(mensajeSinPelo);  
	console.log("El tipo de mascota que tiene el mayor promedio de temperatura corporal es "+tipoDeAnimalConMayorPromedioDeTemperaturaCorporal); 
	console.log("La suma de gatos y perros corresponde a " + porcentajePerroMasGato + "%"); 
	console.log("El estado clinico tiene la menor cantidad de mascotas es " + estadoClinicoConMenosMascotas) ;       
	console.log("El promedio de kilos de peso de tomando todas las mascotas es "+promedioPesoMascotas); 
	console.log(mensajeGatoSinPelo); 


}//fin funcion


