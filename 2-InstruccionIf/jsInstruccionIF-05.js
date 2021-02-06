/* Ornela Curcio
Al ingresar una edad solo debemos informar 
si la persona NO es adolescente.*/

function mostrar()
{
	//tomo la edad  
	let edad; 

	edad = document.getElementById("txtIdEdad").value; 
	edad = parseInt(edad); 
	
	/*if(!(edad<18 && edad>12)) // asi con el signo adelante es negacion 
    { 
		alert("No es adolescente")
	}*/
	
	/*if(edad>17)
	{
        alert("No es adolescente");
	}

	if(edad<13)
	{
		alert("No es adolescente"); 
	}*/
	
	if(edad>17||edad<13)// || esto significa ó, ó una cosa ó la otra
	{	{
		alert("No es adolescentes")
	}

}//FIN DE LA FUNCIÓN