/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
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

}
