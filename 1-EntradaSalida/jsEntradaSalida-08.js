/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/*function SacarResto()
{
	let NumeroDividendo;
	let NumeroDivisor;
	let resto

	NumeroDividendo = document.getElementById("txtIdNumeroDividendo").value;
	NumeroDivisor = document.getElementById("txtIdNumeroDivisor").value; 

	NumeroDividendo = parseInt(NumeroDividendo); 
	NumeroDivisor = parseInt(NumeroDivisor); 

	resto = NumeroDividendo % NumeroDivisor

	alert("El resto es " + resto); 

}*/

/* Ornela Curcio 
3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)*/

function sumar()
{
 let numeroUno; 
 let numeroDos; 
 let resultado; 

 numeroUno = document.getElementById("txtIdNumeroDividendo").value; 
 numeroUno = parseInt(numeroUno); 

 numeroDos = document.getElementById("txtIdNumeroDivisor").value; 
 numeroDos = parseInt(numeroDos); 

 resultado = numeroUno + numeroDos; 

 console.log(resultado); 

}