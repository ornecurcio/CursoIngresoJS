/* Ornela Curcio
Al ingresar una edad que sea igual a 15, 
mostrar el mensaje "niña bonita".*/
function mostrar()
{
	//tomo la edad 
	let edad; 

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	 
	if(edad==15) // no se debe cerrar el if no punto y coma sino se bloquea. 
    { 
	   alert ("niña bonita");  
	}

	/*valordeverdad=edad==15;
   if(valordeverdad)
   {
	   alert("verdadero");         esta forma no se debe usar , en el if, 
	                                no va una vairable nueva en el if
   }
   else
   {
       alert("falso");
   }*/
    
   /*errores al escribir if

   if(); no va con comas
   if(<18){} falta el parametro
   if(edad<13 && >17){} hay que poner siempre el parametro. 
   
   if() error de sintaxis, N0 tenerlo asi o mal tabulado.
   {

   }
   else
   {

   }
   if(edad>12 || edad<18) error de logica, entra siempre 
   if(edad <12 && edad>18) erro logica, no entra nadie. 
   EJEMPLO CORRECTO 
   if (edad<13)
   {
	   alert("niño"); 
   }
   else if(edad<18)// aca ya dividi el subconjunto niños, asiq qda de 13 a 17. 
   { //esta llave es del if, anterior. Y borre una llave del else. 
        alert("adolescente"); 
   }
   else
   {
        alert("adulto"); 
   }
   
}//FIN DE LA FUNCIÓN