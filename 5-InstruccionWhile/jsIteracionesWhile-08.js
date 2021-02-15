/*Ornela Curcio 
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numero; 
	let valordeVerdad; 

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si")
	{
		contador = contador + 1; 
		numero = prompt("Ingrese numero"); 
		numero = parseInt(numero); 
        valordeVerdad = isNaN(numero); 
		while(isNaN(numero)==true)
		{
			numero = prompt("Error, ingrese numero"); 
			numero = parseInt(numero); 
		}
		if(numero>-1)
		{
		  sumaPositivos = sumaPositivos + numero; 
		}
        else
		{
          multiplicacionNegativos = multiplicacionNegativos * numero; 
		}

		respuesta = prompt("¿Quiere ingresar otro numero?")
	}


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN