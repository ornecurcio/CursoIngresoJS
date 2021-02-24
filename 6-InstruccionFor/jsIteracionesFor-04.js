/*Ornela Curcio
al presionar el botón repetir hasta que utilizamos 'BREAK'.*/

function mostrar()
{
	
	let repeticiones; 
	let contador; 
    
	repeticiones = prompt("Distinto a break")

	for(contador=0;contador<15;contador++)
	{
       repeticiones = prompt("Ingrese break para parar")
	   if(repeticiones=="break")
	   {
		   break; 
	   }
	}




}//FIN DE LA FUNCIÓN