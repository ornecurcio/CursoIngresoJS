function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio; 

	contador=0; //aca inicializo la variable
	acumulador=0;
	
    while(contador<5)// esto van a ser 5 vueltas, porq inicialice en 0
	{ 
	  contador = contador + 1; //esto hace correr las 5 vueltas. 
      numeroIngresado = prompt("Ingrese numero " + contador); 
	  numeroIngresado = parseInt(numeroIngresado); 
 
	  acumulador = acumulador + numeroIngresado; //esto va a sumar los numeros q ingrese

	}

	promedio = acumulador/contador; 
	
	document.getElementById("txtIdSuma").value = acumulador; 
	document.getElementById("txtIdPromedio").value = promedio; 
}//FIN DE LA FUNCIÓN