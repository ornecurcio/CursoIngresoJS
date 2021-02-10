/* Ornela Curcio 
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/


function mostrar()
{
	let nota; 
	let mensaje; // con esto saco los alert
	nota = Math.floor(Math.random() * 10) + 1; //esta es la formula que quiere octavio. 
	
	//Excelente 9||10
	//Aprobo >3 
	//Vamos,,, <4

	/*if(nota>3) // de esta forma hace 3 preguntas, 3, 9 y 10. 
	{
	  if(nota==10 || nota==9)
	  {
		  mensaje = nota + " EXECELENTE";
	  }
	  else
	  {
          mensaje = nota + " APROBÓ";
	  }
	}
	else
	{
          mensaje = nota + " Vamos, la proxima se puede";
	}
	alert(mensaje); 
    */
	// Otra forma, de la siguien el procesador hace solo 2 comparaciones. 
	// mayor a 8 y mayor a 3. 
	if(nota>8)
	{
		mensaje = nota + " EXECELENTE"; 
	}
	else
	{
		if(nota>3)
		{
			mensaje = nota + " APROBÓ"; 
		}
		else
		{
			mensaje = nota + " Vamos, la proxima se puede"; 
		}
	}
	alert(mensaje); 
	 
}//FIN DE LA FUNCIÓN

// 	que igual no la explico. 
	//Math.round(Math.random() *9 + 1; // es el que uso el otro profe; 