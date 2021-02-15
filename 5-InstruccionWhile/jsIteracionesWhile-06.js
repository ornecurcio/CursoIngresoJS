/*Ornela Curcio*/

/*function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
    let promedio; 

	contador=0; //aca inicializo la variable
	acumulador=0;
	
    while(contador<5)// esto van a ser 5 vueltas, porq inicialice en 0
	{ //un contador es una variable, q es esa variable + un valor literal(1)
	  contador = contador + 1; //esto va aca para que abajo donde dice ingrese numero 
	  //se ponga como ingrese como primer numero 1
      numeroIngresado = prompt("Ingrese numero " + contador); 
	  numeroIngresado = parseInt(numeroIngresado); 
      //el acumulador es una varible, q es esa varible + otra varible(numeroIngresado)
	  acumulador = acumulador + numeroIngresado; //esto va a sumar los numeros q ingrese
      //la cuenta de promedio si la pongo aca anda, pero no es correcto, 
	  //porq se ejecutaria mas de una vez, y solo se tiene que ejecutar una vez, 
	  //asi trabaja menos el procesador
	}

	promedio = acumulador/contador; //el divisor seria la cantidad de veces q paso el while. 
	
	document.getElementById("txtIdSuma").value = acumulador; 
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN 
*/
/*Ornela Curcio 
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/ 
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
    let promedio; 
	let valordeVerdad; 

	contador=0; //aca inicializo la variable
	acumulador=0;

	while(contador<5)
	{
		contador = contador + 1; 
		numeroIngresado = prompt("ingrese un numero #"+contador);
		numeroIngresado = parseInt(numeroIngresado); 
		valordeVerdad = isNaN(numeroIngresado); 
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado = prompt("Error, ingrese un numero #"+contador);
			numeroIngresado = parseInt(numeroIngresado);
		}
		acumulador = acumulador + numeroIngresado; 
	}
    
	promedio = acumulador/contador; 

    document.getElementById("txtIdSuma").value = acumulador; 
	document.getElementById("txtIdPromedio").value = promedio;
}	