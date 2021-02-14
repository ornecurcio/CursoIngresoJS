/*Ornela Curcio
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
  
	let contador;
	let acumulador;
	let respuesta;
	let promedio; 

	contador=0;
	acumulador=0;
	respuesta='si';

    while(respuesta == 'si')//primer parte logica
	{
	  contador = contador + 1; 
      numeroIngresado = prompt("Ingrese numero " + contador); //2da parte logica
	  numeroIngresado = parseInt(numeroIngresado); 
 
	  acumulador = acumulador + numeroIngresado; 
	  respuesta = prompt("¿Quiere ingresar otro numero?"); //3ra parte para salir del bucle
	}
    promedio = acumulador/contador; 

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;  
    
}//FIN DE LA FUNCIÓN

 /* let seguir; 
     
    seguir = "s";  //aca estoy inicializando la variable. 
	while(seguir == "s")
	{
		alert("Hola"); 
		seguir = prompt("lo saludo de nuevo? "); // aca estoy haciendo la condicion de cambio 
	}

	  alert("ya no lo saludo"); */