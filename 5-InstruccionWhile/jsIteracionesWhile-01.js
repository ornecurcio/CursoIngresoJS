/* Ornela Curcio 
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	/*let contador; // declaracion e inicializacion

	contador = 0

	while(contador<10) // variable de control (osea la condicion para que se ejecute)
	{
       contador = contador + 1; // modificacion de la variable de control, 
	   alert(contador); // en principio la modificacion debe existir para salir del bucle. 
	}*/

	//A- edad y nombre , informar el nombre de la persona mas vieja y la mas joven

	let edadIngresada; 
	let nombreIngresado; 
	let nombreVieja; 
	let nombreJoven;
	let edadViejo; 
	let edadJoven;  
	let respuesta;
	let banderaEdad;  

	respuesta = "si"; 
	banderaEdad = "Es el primero"; 
	 
	while(respuesta=="si")
	{
		nombreIngresado = prompt("Ingrese su nombre"); 
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado = prompt("Error, ingrese su nombre"); 
		}

		edadIngresada = prompt("Ingrese su edad"); 
		edadIngresada = parseInt(edadIngresada); 
		while(isNaN(edadIngresada)==true || edadIngresada<3 || edadIngresada>120)
		{
			edad = prompt("Error, ingrese su edad");
			edad = parseInt(edad);  
		} 

        if(banderaEdad="Es el primero")
		{
			edadJoven = edadIngresada; 
			nombreJoven =  nombreIngresado;

			edadViejo = edadIngresada; 
			nombreVieja = nombreIngresado; 

			banderaEdad = "No, es el primero"; 
		}
		else
		{
          if(edadIngresada<edadJoven || edadIngresada==edadJoven)
		  {
			  edadJoven = edadIngresada;
			  nombreJoven = nombreIngresado;   
		  }
		  if(edadIngresada>edadViejo || edadIngresada==edadViejo)
		  {
			  edadViejo = edadIngresada;
			  nombreVieja = nombreIngresado;   
		  }
		}
		respuesta = prompt("desea continuar?"); 
	}

	alert("El nombre de la persona mas Vieja es "+nombreVieja+" cuya edad es "+edadViejo); 
	alert("El nombre de la persona mas Joven es "+nombreJoven+" cuya edad es "+edadJoven); 




}//FIN DE LA FUNCIÓN