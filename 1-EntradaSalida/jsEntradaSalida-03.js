/* Curcio Ornela
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	//nombreIngresado = txtIdNombre.value; esto es valido solo para google cromt 

	nombreIngresado = document.getElementById("txtIdNombre").value // no olvidar las comillas para el get

	//nombreIngresado = document.getElementById(txtIdNombre).value //asi sin comillas no funciona. 
	
	alert(nombreIngresado);
}


