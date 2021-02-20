/*Ornela Curcio
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/*function mostrar()
{
	let contador; 

	contador = 10;

	while(contador>0)
	{
        alert(contador); 
		contador = contador - 1;
	}

}//FIN DE LA FUNCIÓN*/



/*Ornela Curcio 
1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)*/
function mostrar()
{
   let numeroIngresado; 
   let contadorNumero;  
   let contador; 

   contador = 0;
   contadorNumero = 0;  

   while(contador<5)
   {
	   numeroIngresado = prompt("Ingrese un numero"); 
	   numeroIngresado = parseInt(numeroIngresado); 
	   while(isNaN(numeroIngresado)==true)
	   {
			numeroIngresado = prompt("Error, ingrese un numero"); 
			numeroIngresado = parseInt(numeroIngresado);
	   }

	   if(numeroIngresado<9)
	   {}
	   else 
	   {
         if(numeroIngresado>20)
		 {}
		 else
		 {
			 contadorNumero = contadorNumero + 1; 
		 }
	   }
     contador = contador + 1; 
	}
    console.log("La cantidad de numeros es: "+contadorNumero); 
	
}
