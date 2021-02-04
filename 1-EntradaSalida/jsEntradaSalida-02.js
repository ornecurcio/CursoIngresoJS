/*
Debemos lograr tomar un nombre con 'prompt' (ventana que deja 
	escribir un mensaje/dato y al aceptar devuelve un dato )
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre = "Jose"; /*declarar variable en una linea, 
	inicializacion con la cadera Jose*/
	
	nombre = "Jose"; /*se muestra un solo valor, 
	se muestra la ultima operacion "se pisa el dato"*/

	nombre = prompt("Ingrese su nombre"); /*esta tapando el Jose, 
	para que aparezca jose, debe ir alert antes del promp*/ 
	/* si en el mendaje de promp no se pone nada, devuelve una cadena vacia*/
	
	alert(nombre) /*no se usa comilla para mostrar una variable, sino seria un 
                         ineal de cadena y mostraria algo literal*/ 
	nombre =  "Juan"; 

	alert(nombre) /*lee como interpreta,
	 si pongo otra alerta en el medio sale otro cartel*/

	 //var nombre = prompt("Please enter your name", "Harry Potter") asi lo podria escribir en una sola linea
}

