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
	let banderaDeNegativo; 
     
    contador = 0
	sumaPositivos=0;
	multiplicacionNegativos= 1;
	respuesta='si';
	banderaDeNegativo = 0; 

	while(respuesta == "si")
	{
		contador = contador + 1; 
		numero = prompt("Ingrese numero"); 
		numero = parseInt(numero); 
        
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
		  banderaDeNegativo = 1;
		  //contadorNegativos = contadorNegativos + 1; 
          multiplicacionNegativos = multiplicacionNegativos * numero; 
		}

		respuesta = prompt("¿Quiere ingresar otro numero?")
	}
    //if(multiplicacionNegativos==1)
	//if(contadorNegativos==0)
	if(banderaDeNegativo==0)
	{
		multiplicacionNegativos = 0; 
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN