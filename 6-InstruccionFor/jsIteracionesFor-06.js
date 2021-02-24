/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	let numeroIngresado; 
	let numerosPares; 
	let contador; 

	numeroIngresado = prompt("Ingrese un numero"); 
	numeroIngresado = parseInt(numeroIngresado); 

	for(contador=1;contador<numeroIngresado;contador+1)
	{  
		
	   if(numeroIngresado%2==0)
	   {
		   console.log(numerosPares); 
		   numerosPares=numerosPares+1; 
	   }
	
	}
	
	



}//FIN DE LA FUNCIÓN