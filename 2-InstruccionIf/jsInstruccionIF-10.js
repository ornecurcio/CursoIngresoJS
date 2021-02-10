/* Ornela Curcio 
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/


function mostrar()
{
	let nota; 
	nota = Math.round(Math.random () *9 + 1); 
	
	//Excelente 9||10
	//Aprobo >3 
	//Vamos,,, <4

	if(nota>3)
	{
	  if(nota==10 || nota==9)
	  {
		  alert(nota + " EXECELENTE");
	  }
	  else
	  {
          alert(nota + " APROBÓ");
	  }
	}
	else
	{
          alert(nota + " Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN