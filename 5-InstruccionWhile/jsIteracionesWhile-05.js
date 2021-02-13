/*Ornela Curcio
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;
	sexo = prompt("ingrese f ó m ");

	while(sexo!="f" && sexo!="m")
	{
		sexo = prompt("error ingrese f o m"); 
	}
    
	document.getElementById("txtIdSexo").value = sexo; 

}//FIN DE LA FUNCIÓN