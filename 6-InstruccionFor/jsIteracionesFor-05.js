/* Ornela Curcio
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/

function mostrar()
{
	let repeticiones; 
	let contador; 
    
	repeticiones = prompt("Ingrese numero del 1 al 9")

	for(contador=0;contador<15;contador++)
	{
       repeticiones = prompt("Ingrese nuemero")
	   if(repeticiones=="9")
	   {
		   break; 
	   }
	}

}//FIN DE LA FUNCIÓN