/* Ornela Curcio
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero; 

	numero = prompt("ingrese un número entre 0 y 9");
	/* opciones que estan mal 
	while(numero>-1 && numero<10) este es la respuesta correcta, lo que busco, asiq esta logica
	no va porque buscamos el error
	while(numero>-1 || numero <10) aca son todos por un "O" entra -999999 x ser menor a 10 
	y 99999999 por ser mayor a -1, da un bucle infinito, da error
	while(numero<0 && numero>9) aca no entra ningun numero, no etra ningun numero*/ 
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

