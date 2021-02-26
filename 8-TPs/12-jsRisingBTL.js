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

function ComenzarIngreso () 
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

				if(contadorEdadMujeres=1)
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
					mensajeMasJoven = "El nombre de la mujer mas joven es "+nombreMujerMasJoven+" con "+edadMujerMasJoven+" años ";
					}
					else
					{
						mensajeMasJoven = "No hay mujeres"; 
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

				if(contadorEdadHombres=1)
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
					mensajeMasBajo="El nombre del hombre mas bajito es "+nombreHombreMasBajo+" y mide "+alturaHombreMasBajo+" metros";
					}
					else
					{
					mensajeMasBajo = "No hay hombres";
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
		
		if(banderaMasAlta=1)
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
		if(altura>1.6)
		{
			contadorAlturaMayorUnoSesenta = contadorAlturaMayorUnoSesenta + 1; 
			{
	            if(sexoIngresado=="F")
				{
					contadorMujeresAlturaMayorUnoSesenta = contadorMujeresAlturaMayorUnoSesenta + 1;
				}
				else
				{
					mensajeAltura = "No hay mujeres"; 
				}
			}	
		}
		else
		{
			mensajeAltura = "No hay personas de mas de 1.60"; 
		}

		console.log("Usted se llama "+ nombreIngresado);
		console.log("usted es "+ sexoIngresado); 
		console.log("Usted tiene "+edadIngresada + " años"); 
		console.log("Usted mide "+ altura + " metros"); 
		console.log("usted tiene "+temperaturaCorporal+" grados de temperatura"); 

		respuesta = prompt("quiere ingresar una nueva persona?"); 
	}

     if(contadorMujeresAlturaMayorUnoSesenta>1)
	 {
	    porcentajeMujeresAlturaMayorUnoSesenta = contadorAlturaMayorUnoSesenta / contadorMujeresAlturaMayorUnoSesenta *100;
		mensajeAltura= "El porcentaje de mujeres de mas de 1.60 es "+porcentajeMujeresAlturaMayorUnoSesenta
	 }
	 else
	 {
		 mensajeAltura; 
	 }
    
	 if(contadorEdadMujeres>1)
	 {
        promedioEdadMujeres = acumuladorEdadMujeres/contadorEdadMujeres;
		mensajePromedioMujeres = "El promedio de edad de las mujeres es "+ promedioEdadMujeres; 
	 }
	 else
	 {
		mensajePromedioMujeres = "NO hay mujeres"; 
	 }
	 
	 if(contadorEdadHombres>1)
	 {
		promedioEdadHombres = acumuladorEdadHombres/contadorEdadHombres;
		mensajePromedioHombres = "El promedio de la edad de los hombres es "+promedioEdadHombres;  
	 }
     else
	 {
		 mensajePromedioHombres = "NO hay hombres"; 
	 }
    console.log("El nombre de la persona mas alta es "+nombreMasAlta+" de sexo "+sexoMasAlta+" y mide "+alturaMasAlta+" metros"); 
	console.log(mensajeMasJoven + mensajePromedioMujeres + promedioEdadMujeres); 
	console.log(mensajeMasBajo + mensajePromedioHombres + promedioEdadHombres); 
	console.log(mensajeAltura); 
	console.log(mensajePromedioHombres); 
	console.log(mensajePromedioMujeres); 
}//fin funcion
