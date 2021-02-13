/* Ornela Curcio
Al ingresar una edad que sea igual a 15, 
mostrar el mensaje "niña bonita".*/
/*function mostrar()
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
   
}//FIN DE LA FUNCIÓN */

/*1-Ornela Curcio 
con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace */

/*function mostrar()
{
  let distancia; 
  let tiempo; 
  let velocidad; 
  let mensaje

  distancia = prompt("Distancia que viajo en KM"); 
  distancia = parseFloat(distancia); 
  
  tiempo = prompt("Tiempo en horas"); 
  tiempo = parseFloat(tiempo); 

  velocidad = distancia/tiempo;
  if(velocidad>121)
  {
	  mensaje = "Eso no se hace";
  }
  else
  {   
	  if(velocidad==120)
	  {
		  mensaje = "Ahi de la ley"; 
	  }
	  else
	  {
		  if(velocidad>80 && velocidad<100)
		  {
			  mensaje = "Buen Ritmo"; 
		  }
		  else
		  { 
			  if(velocidad<61)
			  {
			   mensaje = "Muy lento"; 
			  }
			  else
			  {
				mensaje = "Lento"; 
			  }
			  
		  }
	  }
	   
  }
    

    alert(mensaje); 

}//FIN DE FUNCION*/

/* Ornela Curcio 
2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III*/

function mostrar()
{
  let nombre; 
  let altura; 
  let peso
  let IMC; 
  let mensaje; 

  nombre = prompt("Ingrese su nombre");  
  
  altura = prompt("Ingrese su altura en mts"); 
  altura = parseFloat(altura); 

  peso = prompt("Ingrese su peso en kg"); 
  peso = parseFloat(peso); 

  IMC = peso/(altura*altura); 

  if(IMC>40)
  {
	  mensaje = nombre + " usted tiene Obesidad tipo III";
  }
  else
  {   
	  if(IMC>35)
	  {
		  mensaje = nombre + " usted tiene Obesidad tipo II";
	  }
	  else
	  {
		  if(IMC>30)
		  {
			  mensaje = nombre + " usted tiene Obesidad tipo I"; 
		  }
		  else
		  { 
			  if(IMC>25)
			  {
			   mensaje =nombre + " usted tiene preobesidad"; 
			  }
			  else
			  {
				if(IMC<18.5)
				{
					mensaje = nombre + " usted tiene bajo peso"; 
				}
				else
				{
					mensaje = nombre + " usted Peso Normal";
				}
			  }
			  
		  }
	  }
	   
  }
    

    alert(mensaje); 

}//FIN DE FUNCION
