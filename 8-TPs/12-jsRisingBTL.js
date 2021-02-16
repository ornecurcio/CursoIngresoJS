/*Ornela Curcio
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide 
realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto; 
	let numeroLegajo; 
	let nacionalidad;  

	edadIngresada = prompt("Ingrese su edad")
	while(isNaN(edadIngresada)==true || edadIngresada<18 || edadIngresada>91)
	{
		edadIngresada = prompt("Error, ingrese su edad"); 
	}
    sexoIngresado = prompt("Ingrese su sexo: M o F");
	while(sexoIngresado!="F" && sexoIngresado!="M")
	{
		sexoIngresado = prompt("Error, ingrese F o M"); 
	} 
    estadoCivilIngresado = prompt("Ingrese su estado civil: 1-Soltero, 2-Casado, 3-Divorciado, 4-Viudo"); 
    while(isNaN(estadoCivilIngresado)==true || (estadoCivilIngresado>4) || (estadoCivilIngresado<1))
	{
		estadoCivilIngresado = prompt("Error, ingrese: 1-Soltero, 2-Casado, 3-Divorciado, 4-Viudo"); 
	}
	sueldoBruto = prompt("Ingrese sueldo bruto");
	while(isNaN(sueldoBruto)==true || sueldoBruto<8000)
	{
		sueldoBruto = prompt("Error, ingrese sueldo bruto"); 
	}
	numeroLegajo = prompt("Ingrese numero de legajo, cuatro cifras"); 
	while(isNaN(numeroLegajo)==true || numeroLegajo>9999 || numeroLegajo<0001)
	{
		numeroLegajo = prompt("Error, ingrese numero de legajo, 4 cifras"); 
	}
    nacionalidad = prompt("Ingrese nacionalidad: A-argentinos, E-extranjeros, N-nacionalizados");
	while(isNaN(nacionalidad)==false || nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		nacionalidad = prompt("Error, ingrese: A-argentinos, E-extranjeros, N-nacionalizados")
	}    
    
	document.getElementById("txtIdEdad").value = edadIngresada; 
	document.getElementById("txtIdSexo").value = sexoIngresado; 
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado; 
	document.getElementById("txtIdSueldo").value = sueldoBruto; 
	document.getElementById("txtIdLegajo").value = numeroLegajo; 
	document.getElementById("txtIdNacionalidad").value = nacionalidad; 

	//alert(edadIngresada); 
}
