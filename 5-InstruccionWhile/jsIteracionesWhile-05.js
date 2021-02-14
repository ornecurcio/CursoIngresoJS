/*Ornela Curcio
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;
	sexo = prompt("ingrese f ó m ");//esto es lo correcto

	while(sexo!="f" && sexo!="m")// esto es lo incorrecto para que entre al bucle. 
	/* while(sexo=="f || sexo=="m") esta es la opcion correcta
	   while(sexo=="f" && sexo=="m") no entra nunca 
	   while(sexo!="f" || sexo!="m") aca entran todas las opciones, bucle infinito*/
	{
		sexo = prompt("error ingrese f o m"); 
	}
    
	document.getElementById("txtIdSexo").value = sexo; 

}//FIN DE LA FUNCIÓN