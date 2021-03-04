/*Ornela Curcio 
El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos? */
function mostrar()
{
	let nombreIngresado; 
	let carreraIngresada; 
	let estadoCarrera; 
	let sexoIngresado; 
	let edadIngresada; 
	let notaIngresada; 
	let respuesta; 
    let contadorProgramacion; 
	let contadorPsicologia; 
	let contadorDiseñoGrafico; 
	let contadorMujeresProgramacion; 
	let contadorNoBinarios; 
	let promedioNotaAlumnoFinalizante; 
	let contadorAlumnoFinalizante; 
	let acumuladorNotaAlumnoFinalizante; 
	let nombreAlumnoMasViejoPsicologia;
	let sexoAlumnoMasViejoPsicologia; 
	let edadAlumnoMasViejoPsicologia; 
	let notaMejorAlumnoNoBinarioPsicologia; 
	let nombreMejorALumnoNoBinarioPsicologia; 
	let estadoMejorAlumnoNoBinarioPsicologia; 

	respuesta= "si"; 
    contadorProgramacion=0; 
	contadorPsicologia=0; 
	contadorDiseñoGrafico=0; 
	contadorMujeresProgramacion=0; 
	contadorNoBinarios=0; 
	contadorAlumnoFinalizante=0; 
	acumuladorNotaAlumnoFinalizante=0; 

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
			sexoIngresado = prompt("Error, ingrese F o M"); 
		} 

		carreraIngresada = prompt("Ingrese carrera"); 
		while(isNaN(carreraIngresada)==false || carreraIngresada!="programacion" && carreraIngresada!="psicologia" && carreraIngresada!="diseño grafico")
		{
			carreraIngresada = prompt("Error, ingrese carrera: psicologia, programacion, diseño grafico"); 
		}

		estadoCarrera = prompt("Ingrese estado"); 
		while(isNaN(estadoCarrera)==false || estadoCarrera!="curso" && estadoCarrera!="abandono" && estadoCarrera!="finalizado")
		{
			estadoCarrera = prompt("Error, ingrese estado: psicologia, programacion, diseño grafico"); 
		}

		edadIngresada = prompt("Ingrese Edad"); 
		while(isNaN(edadIngresada)==true || edadIngresada<17)
		{
			edadIngresada = prompt("Error, ustes debe tener mas de 18 años, ingrese Edad")
		}

		notaIngresada = prompt("Ingrese Nota"); 
		while(isNaN(notaIngresada)==true || notaIngresada<0 || notaIngresada>10)
		{
			notaIngresada = prompt("Error, ingrese nota entre 1 y 10"); 
		}

		switch(carreraIngresada)
		{
			case"psicologia": 
			contadorPsicologia = contadorPsicologia + 1; 
			if(contadorPsicologia==1)
			{
				edadAlumnoMasViejoPsicologia=edadIngresada; 
				nombreAlumnoMasViejoPsicologia = nombreIngresado; 
				sexoAlumnoMasViejoPsicologia = sexoIngresado; 
			}
			else
			{
				if(edadAlumnoMasViejoPsicologia<edadIngresada)
				{
					edadAlumnoMasViejoPsicologia=edadIngresada; 
					nombreAlumnoMasViejoPsicologia = nombreIngresado; 
					sexoAlumnoMasViejoPsicologia = sexoIngresado; 
				}	
			}

			break; 
			case"programacion": 
			contadorProgramacion=contadorProgramacion+1; 
			if(sexoIngresado=="F")
			{
				contadorMujeresProgramacion=contadorMujeresProgramacion+1; 
			}
			break; 
			case"diseño grafico": 
			contadorDiseñoGrafico=contadorDiseñoGrafico*1; 
			break; 
		}

		switch(sexoIngresado)
		{
			case"otre": 
			contadorNoBinarios = contadorNoBinarios+1; 
			if(carreraIngresada=="psicologia")
			{
				if(banderaMejorAlumno)
				{
					notaMejorAlumnoNoBinarioPsicologia=notaIngresada; 
					nombreMejorALumnoNoBinarioPsicologia=nombreIngresado; 
					estadoMejorAlumnoNoBinarioPsicologia=estadoCarrera; 
				}
			}
			break; 
			case"F": 
			break; 
			case"M": 
			break; 
		}
		if(estadoCarrera=="finalizado")
		{
			contadorAlumnoFinalizante = contadorAlumnoFinalizante+1; 
			acumuladorNotaAlumnoFinalizante=acumuladorNotaAlumnoFinalizante+notaIngresada; 
		}
		respuesta=prompt("desea ingresar otro alumno?")
	}
    
	promedioNotaAlumnoFinalizante=acumuladorNotaAlumnoFinalizante/contadorAlumnoFinalizante; 
	if(contadorProgramacion>contadorPsicologia)
	{
		mensajeCarrera="La carrera con mas alumnos es Programacion"; 
	}
	else
	{
		if(contadorPsicologia>contadorDiseñoGrafico)
		{
			mensajeCarrera = "La carrera con mas alumnos es Psicologia"; 
		}
		else
		{
			mensajeCarrera="La carrera con mas alumnos es Diseño Grafico"; 
		}
	}

	
	/*A.*/ console.log("Hay "+contadorProgramacion*"alumnos en programacion. "+contadorPsicologia+" alumnos en psicologia. "+contadorDiseñoGrafico+"alumnos en diseño grafico. ")
	/*.*/ console.log("Cantidad total de mujeres que cursan la carrera de programación es: "+contadorMujeresProgramacion); 
	/*C.*/ console.log("Cantidad de alumnos no binarios es: "+contadorNoBinarios); 
	/*D.*/ console.log("Promedio de notas de los alumnos finalizantes es: "+promedioNotaAlumnoFinalizante); 
	/*E.*/ console.log("el alumno mas viejo en la carrera de psicología se llama "+nombreAlumnoMasViejoPsicologia+" de "+sexoAlumnoMasViejoPsicologia+" orientaciones sexual y tiene "*edadAlumnoMasViejoPsicologia+" años. "); 
	/*F.*/ console.log("El mejor alumno no Binario de psicologia se llama "+nombreMejorALumnoNoBinarioPsicologia+", tiene "+notaMejorAlumnoNoBinarioPsicologia+" y el estado de su carrera es: "+estadoMejorAlumnoNoBinarioPsicologia); 
	/*G.*/ console.log(mensajeCarrera); 

}//fin de funcion
