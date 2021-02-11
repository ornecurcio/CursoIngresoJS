/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/

function mostrar()
{
	let mes;
	let mensaje;  

	mes = document.getElementById("txtIdMes").value; 
	switch(mes)
	{
		case"Enero": 
		     alert("Que comiences bien el año"); 
		     break
	    case"Marzo": 
		     alert("¡A clases!"); 
	         break
		case"Julio": 
		     alert("¡Se viene las vacaciones!"); 
			 break
		case"Diciembre": 
		     alert("¡Felices Fiestas!"); 
			 break	 
      
	}
	

}//FIN DE LA FUNCIÓN


	/*if(mes=="Enero")
	{
		mensaje = "Que comiences bien el año"; 
	}
    else if(mes=="Marzo")
	{
		mensaje = "¡A clases!"; 
	}
    else if(mes=="Julio")
	{
		mensaje = "Se vienen las vacaciones"; 
	}
	else if(mes=="Dicimiembre")
	{
        mensaje = "¡Felices Fiestas!"; 
	}
	else
	{
		console.log("nada"); 
	}
	alert(mensaje); //preguntar como hago que no aparezca, con meses sin nada.*/