/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let NumeroUno;
	let NumeroDos; 
	let resultado; 

	NumeroUno = document.getElementById("txtIdNumeroUno").value; 

	NumeroUno = parseInt(num1); // num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	// de esta forma se achica una linea. 
	
	NumeroDos = document.getElementById("txtIdNumeroDos").value; 

	NumeroDos = parseInt(num2); //num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
    // de esta forma se achica una linea. DE ESTA FORMA SE TIENE QUE HACER EN EL CUATRIMESTRE. 
	resultado = NumeroUno + NumeroDos  

	alert("La suma es" + resultado); /*STRING + STRING --> STRING 
									   STRING + NUMBER --> STRING 
									   NUMBER + NUMBER --> NUMBER */
}

// parsing--->convertir algo tipo cadena "escrito" (STRING) a valor numerico (NUMBER) y visceversa
// parseInt convierte dato cadena a NUMERO ENTERO 
// parseFloat convierte dato cadena flotante a numero, acepta numero decimal 
// casting--->convertir un tipo de dato numerico a otro numerico 

/* EJEMPLO

let x = "20 "
x = parseInt(x);      asi se cambia de valor cadena a valor number

let x = "20"; 
let y = "30"; 
let z; 

x = parseInt(x);
y = perseInt(y); 

z = x + y; 

alert(z); */ 

/* Si coloco 

let z = "12Juan34";     
z = parseInt(z); 
alert(z);              SOLO DEVUELVE EL 12, PORQUE A PARTIR DE LA J YA NO COTEJA Y NO PUEDE CONTINUAR 

let z = "Juan1234"; 
z = parceInt(z);       ACA SOLO VA A APARECER "NaN" VALOR NUMERO NO ASIGNADO,  
alert(z);              PORQUE DE INICIO NO PUDO COTEJAR NADA; 

let z = "3.14"; 
z = parseInt(z);       VA A MOSTRAR EL 3 SOLAMENTE, PORQUE A PARTIR DEL PUNTO NO LEE 
alert(z);  

let z = "3.14"; 
z = parseFloat(z);   Ahi si muestra 3.14 
alert(z); 