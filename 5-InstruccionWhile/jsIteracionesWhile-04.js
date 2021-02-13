/* Ornela Curcio
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero; 
	
	numero = prompt("ingrese un número entre 0 y 10.");
	
	while(numero<0 || numero>9)
	{
		numero = prompt("error, ingrese numero 0 y 9"); 
	}
}//FIN DE LA FUNCIÓN

/*let numero; 
	numero = prompt("Ingrese numero entre 0 y 9 "); 
	while(numero<0 || numero>9)
	{
        numero=prompt("error, ingrese numero entre 0 y 9"); 
	}*/