/*Ornela Curcio 
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10. */

/*function mostrar()
{
  let contador;

  for(contador=0;contador<10;contador++)
  {
        console.log(contador+1); 
  }

}*/

/*
	var contador;
	var respuesta;

	contador=0;//1
	while(contador<5)//2
	{
		console.log("la iteracion es #"+contador);
		contador++;//3
		//console.log("la iteracion es #"+contador);
	}
	// siempre sabemos el valor del contador



	//contador=0;
	for(contador=0;contador<5;contador++)
	{
		console.log("la iteracion es #"+(contador+30);
		//console.log("la iteracion es #"+contador);
	}
	// siempre sabemos el valor del contador

	respuesta="si";
	while(respuesta=="si")
	{
		respuesta=prompt("desea continuar");
	}

	// no se  hace
	for(respuesta="si";respuesta=="si";respuesta=prompt("desea continuar"))
	{
		
	}
	/*aca el continue*/
	/*for(contador=0;contador<5 ;contador++)
	{
		//break;
		console.log("la iteracion es #"+(contador+30);
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
		}
		continue;



		if("logica necesaria")
		{
			//break;
			
		}
		console.log("la iteracion es #"+contador);
		edad=prompt("ingrese numero");
		edad=parseInt(edad);
		while(isNaN(edad)==true)
		{
			edad=prompt("ingrese numero");
			edad=parseInt(edad);
		}

	}
	//aca viene el break;*/

/*For 10 A-ingrese nombre , sexo , edad (
	validar que si es mujer debe ser adolescente y si el hombre debe ser niño), 
	altura (validar), temperatura corporal */
	//Ornela  Curcio


function ComenzarIngreso () 
{
 	//definicion de variables
	let nombreIngresado; 
 	let edadIngresada;
 	let sexoIngresado;
	let temperaturaCorporal; 
	let altura; 
	let respuesta; 

	respuesta = "si"; 
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
				break; 
			case"M": 
				sexoIngresado = "Masculino"; 
				edadIngresada = prompt("Ingrese su edad"); 
				while(isNaN(edadIngresada)==true || edadIngresada>12 || edadIngresada<4)
				{
					edadIngresada = prompt("Error, usted debe ser niño");
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
		
		altura = prompt("Ingrese su altura en metros"); 
		altura = parseFloat(altura); 
		while(isNaN(altura)==true || altura>2.5 || altura<0.50)
		{
			altura = prompt("Error, ingrese su altura en metros"); 
			altura = parseFloat(altura); 
		}

		console.log("Usted se llama "+ nombreIngresado);
		console.log("usted es "+ sexoIngresado); 
		console.log("Usted tiene "+edadIngresada + " años"); 
		console.log("Usted mide "+ altura + " metros"); 
		console.log("usted tiene "+temperaturaCorporal+" grados de temperatura"); 

		respuesta = prompt("quiere ingresar una nueva persona?"); 
	}
//fin funcion
