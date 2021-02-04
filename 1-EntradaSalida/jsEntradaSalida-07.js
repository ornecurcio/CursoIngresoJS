/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let NumeroUno; 
	let NumeroDos; 
	let resultado; 
	
	NumeroUno = document.getElementById("txtIdNumeroUno").value; 
	NumeroDos = document.getElementById("txtIdNumeroDos").value; 
	
	NumeroUno = parseInt(NumeroUno); 
	NumeroDos = parseInt(NumeroDos); 

	resultado = NumeroUno + NumeroDos; 

	alert("la suma es " + resultado)	
}

function restar()
{
	let NumeroUno; 
	let NumeroDos; 
	let resultado; 
	
	NumeroUno = document.getElementById("txtIdNumeroUno").value; 
	NumeroDos = document.getElementById("txtIdNumeroDos").value; 
	
	NumeroUno = parseInt(NumeroUno); 
	NumeroDos = parseInt(NumeroDos); 

	resultado = NumeroUno - NumeroDos; 

	alert("la resta es " + resultado)
}

function multiplicar()
{ 
	let NumeroUno; 
	let NumeroDos; 
	let resultado; 
	
	NumeroUno = document.getElementById("txtIdNumeroUno").value; 
	NumeroDos = document.getElementById("txtIdNumeroDos").value; 
	
	NumeroUno = parseInt(NumeroUno); 
	NumeroDos = parseInt(NumeroDos); 

	resultado = NumeroUno * NumeroDos; 

	alert("la multiplicacion es " + resultado)
}

function dividir()
{
	let NumeroUno; 
	let NumeroDos; 
	let resultado; 
	
	NumeroUno = document.getElementById("txtIdNumeroUno").value; 
	NumeroDos = document.getElementById("txtIdNumeroDos").value; 
	
	NumeroUno = parseInt(NumeroUno); 
	NumeroDos = parseInt(NumeroDos); 

	resultado = NumeroUno / NumeroDos; 

	alert("la division es " + resultado)
}

