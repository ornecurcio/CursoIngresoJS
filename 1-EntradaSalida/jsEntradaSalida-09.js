/* Ornela Ivana Curcio
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo; 
	let aumento1; 
	let resultado;

sueldo = document.getElementById("txtIdSueldo").value; 
sueldo = parseInt(sueldo); 

aumento1 = sueldo / 10; 
aumento1 = parseInt(aumento1)

resultado = sueldo + aumento1; 

document.getElementById("txtIdResultado").value = resultado	;
}
