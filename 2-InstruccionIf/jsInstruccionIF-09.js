/*Ornela Curcio
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/
function mostrar()
{
	let numero; 
	let maximo = 10; 
	let minimo = 1; 
	
	numero = Math.round(Math.random () *(maximo - minimo) + minimo); 
			//round redondea mas cercano entero >.5 para arria y <.49 para abajo
			// el ramdom solo lo hace entre 0 y 1
	alert(numero); 

}//FIN DE LA FUNCIÓN