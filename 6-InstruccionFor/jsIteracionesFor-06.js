/*Ornela Curcio
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	let numeroIngresado; 
	let contadordeNumerosPares; 
	let contador; 

	contadordeNumerosPares=0; 
	numeroIngresado = prompt("Ingrese un numero"); 
	numeroIngresado = parseInt(numeroIngresado); 

	for(contador=1;contador<numeroIngresado;contador++)
	{  
		
	   if(contador%2==0)
	   {
		   console.log(contador); 
			contadordeNumerosPares=contadordeNumerosPares+1;
		    
		   console.log("total de numeros pares: "+contadordeNumerosPares);  
	   }
	
	}

}//FIN DE LA FUNCIÓN