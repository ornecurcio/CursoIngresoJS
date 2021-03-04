/*ornela curcio 

Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer pami mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar()
{
	let nombreIngresado; 
	let sexoIngresado; 
	let obraSocialIngresada; 
	let edadIngresada; 
	let temperaturaCorporalIngresada; 
	let contadorOsde; 
	let contadorPami; 
	let edadMujerMasJovenPami; 
	let nombreMujerJovenPami; 
	let temperaturaMujerJovenPami; 
	let contadorPasajeros; 
	let contadorOsdeSesenta; 
	let precio; 
	let precioTotal; 
	let descuento; 
	let mensajeOsdeSesenta;
	let mensajePamiJoven; 
	let mensajeDescuento; 

	respuesta="si"; 
	contadorOsde=0; 
	contadorPami=0; 
	contadorPasajeros=0; 
	contadorOsdeSesenta=0; 
	precio = 600; 
	descuento = 0; 



	while(respuesta=="si")
	{

		nombreIngresado = prompt("Ingrese su nombre"); 
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado = prompt("Error, ingrese su nombre"); 
		}

		sexoIngresado = prompt("Ingrese su sexo: M o F o 'otre'")
		while(sexoIngresado!="F" && sexoIngresado!="M" && sexoIngresado!="otre")
		{
			sexoIngresado = prompt("Error, ingrese F o M u otre"); 
		}

		obraSocialIngresada = prompt("Ingrese obra social: OSDE, PAMI, OTRA"); 
		while(isNaN(obraSocialIngresada)==false || obraSocialIngresada!="OSDE" && obraSocialIngresada!="PAMI" && obraSocialIngresada!="OTRA")
		{
			obraSocialIngresada = prompt("Error, ingrese obra social: OSDE, PAMI, OTRA"); 
		}

		edadIngresada = prompt("Ingrese Edad"); 
		while(isNaN(edadIngresada)==true || edadIngresada<50 || edadIngresada>95)
		{
			edadIngresada = prompt("Error, ustes debe tener mas de 50 y menos de 95"); 
		}
		temperaturaCorporalIngresada = prompt("Ingrese temperatura"); 
		while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada<28 || temperaturaCorporalIngresada>42)
		{
			temperaturaCorporalIngresada = prompt("Error, ingrese temperatura entre 28 y 42"); 
		}

		switch(obraSocialIngresada)
		{
			case"OSDE":
			contadorOsde=contadorOsde+1; 
			if(edadIngresada>60)
			{
				contadorOsdeSesenta = contadorOsdeSesenta+1; 
			}
			break; 
			case"PAMI": 
			contadorPami=contadorPami+1; 
			if(contadorPami==1)
			{
				edadMujerMasJovenPami=edadIngresada; 
				nombreMujerJovenPami=nombreIngresado; 
				temperaturaMujerJovenPami=temperaturaCorporalIngresada; 
			}
			else
			{
				if(edadMujerMasJovenPami>edadIngresada)
				{
					edadMujerMasJovenPami=edadIngresada; 
					nombreMujerJovenPami=nombreIngresado; 
					temperaturaMujerJovenPami=temperaturaCorporalIngresada; 
				}
			}
			break; 
			case"OTRA": 
			break; 
		} 
		contadorPasajeros=contadorPasajeros+1; 
		respuesta=prompt("desea ingresar otro pasajero?"); 
	}//fin while 
	
	precioTotal=precio*contadorPasajeros; 

	if(contadorPasajeros/contadorPami>0.5)
	{
		descuento=25; 
		precioTotal=precio*contadorPasajeros;
		precioTotal= precioTotal - (precioTotal*descuento/100); 
		mensajeDescuento="el viaje con el descuento aplicado sale "+ precioTotal; 
	} 
	else 
	{   
		descuento=0; 
		precioTotal=precio*contadorPasajeros;
		precioTotal= precioTotal - (precioTotal*descuento/100);
		mensajeDescuento="No se aplico ningun descuento sobre el viaje: "+precioTotal; 
	}

	if(contadorOsdeSesenta>0)
	{
		mensajeOsdeSesenta= "La cantidad de mayores de 60 con Osde es "+contadorOsdeSesenta; 
	}
	else
	{
		mensajeOsdeSesenta = "No hay mayores de sesenta con Osde"; 
	}
    if(contadorPami>0)
	{
		mensajePamiJoven="El nombre de la persona mas joven de pami es "+nombreMujerJovenPami+" y tiene "+temperaturaMujerJovenPami+" grados de temperatura. "
	}
	else 
	{
		mensajePamiJoven="No hay personas de pami"; 
	}
	console.log(mensajeOsdeSesenta); 
	console.log(mensajePamiJoven); 
	console.log("el precio total del viaje sin descuentos es: "+precioTotal); 
	console.log(mensajeDescuento); 

}
