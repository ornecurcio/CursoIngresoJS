/* Ornela Curcio 
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	let contador; // declaracion e inicializacion

	contador = 0

	while(contador<10) // variable de control (osea la condicion para que se ejecute)
	{
       contador = contador + 1; // modificacion de la variable de control, 
	   alert(contador); // en principio la modificacion debe existir para salir del bucle. 
	}
}//FIN DE LA FUNCIÓN