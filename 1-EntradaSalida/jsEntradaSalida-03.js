/* Curcio Ornela
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
/*function mostrar()
{
	var nombreIngresado;

	//nombreIngresado = txtIdNombre.value; esto es valido solo para google cromt 

	nombreIngresado = document.getElementById("txtIdNombre").value // no olvidar las comillas para el get

	//nombreIngresado = document.getElementById(txtIdNombre).value //asi sin comillas no funciona. 
	
	alert(nombreIngresado);
}*/

/*1. Ornela Curcio  
Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 4 para resolverlo.*/

function mostrar()
{

let descripcion; 
let precio; 

precio = document.getElementById("txtIdNombre").value; 
precio = parseInt(precio);
precio = precio + precio * 0.3;

descripcion = prompt("Nombre el producto");

alert(descripcion + " " + precio ); 
}

