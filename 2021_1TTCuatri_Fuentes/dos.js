/*Ornela CUrcio 
Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando

b) El nombre del mas viejo de los alumnos que solo sea estudiantes

c) El promedio de nota por situacion laboral

d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
*/
function mostrar()
{
  let nombreIngresado; 
	let cantidadDeMaterias; 
	let situacionLaboralIngresada; 
	let sexoIngresado; 
	let edadIngresada; 
	let notaIngresada; 
	let respuesta; 
  let contadorBuscando; 
	let contadorTrabajando; 
	let contadorEstudiante; 
	let contadorNoBinarios; 
	let acumuladorNotaTrabajando; 
  let acumuladorNotaBuscando; 
  let acumuladorNotaEstudiante; 
  let mejorPromedioEstudiante; 
  let nombreMejorNotaEstudiante; 
  let edadAlumnoMasViejoEstudiante; 
  let nombreAlumnoMasViejoEstudiante; 
  let menorCantidadMateriasEnBuscando; 
  let edadMenorCantidadMateriasEnBuscando; 
  let nombreMenorCantidadMateriasEnBuscando; 
  let promedioBuscando; 
  let promedioTrabajando; 
  let promedioEstudiante; 
  let mensajeEstudianteMasViejo; 
  let mensajeTrabajando; 
  let mensajeEstudiante; 
  let mensajeBuscando; 
  let mensajeMenorCantidadMaterias; 
  let mensajeMejorNotaEstudiante; 
 

	respuesta= "si"; 
  contadorBuscando=0; 
	contadorTrabajando=0; 
	contadorEstudiante=0; 
	contadorMujeresProgramacion=0; 
	contadorNoBinarios=0; 
	contadorAlumnoFinalizante=0; 
	acumuladorNotaBuscando=0; 
  acumuladorNotaEstudiante=0; 
  acumuladorNotaTrabajando=0; 

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

		cantidadDeMaterias = prompt("Ingrese cantidad de materias entre 1 y 8"); 
		while(isNaN(cantidadDeMaterias)==true || cantidadDeMaterias>8 || cantidadDeMaterias<1)
		{
			cantidadDeMaterias = prompt("Error, ingrese cantidad de materias entre 1 y 8"); 
		}

		situacionLaboralIngresada = prompt("Ingrese situacion laboral"); 
		while(isNaN(situacionLaboralIngresada)==false || situacionLaboralIngresada!="buscando" && situacionLaboralIngresada!="trabajando" && situacionLaboralIngresada!="estudiante")
		{
			situacionLaboralIngresada = prompt("Error, ingrese buscando, trabajando, estudiante"); 
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

		switch(situacionLaboralIngresada)
		{
			case"buscando": 
      contadorBuscando=contadorBuscando+1; 
      acumuladorNotaBuscando=acumuladorNotaBuscando+notaIngresada; 
      if(contadorBuscando==1)
      {
        menorCantidadMateriasEnBuscando=cantidadDeMaterias; 
        nombreMenorCantidadMateriasEnBuscando=nombreIngresado; 
        edadMenorCantidadMateriasEnBuscando=edadIngresada; 
      }
      else
      {
        if(menorCantidadMateriasEnBuscando>cantidadDeMaterias)
        {
          menorCantidadMateriasEnBuscando=cantidadDeMaterias; 
          nombreMenorCantidadMateriasEnBuscando=nombreIngresado; 
          edadMenorCantidadMateriasEnBuscando=edadIngresada; 
        }
      }
			
			break; 
			case"trabajando": 
      contadorTrabajando=contadorTrabajando+1; 
      acumuladorNotaTrabajando=acumuladorNotaTrabajando+notaIngresada; 
		
			break; 
			case"estudiante": 
		  contadorEstudiante=contadorEstudiante+1; 
      acumuladorNotaEstudiante=acumuladorNotaEstudiante+1; 
      if(contadorEstudiante==1)
      {
        edadAlumnoMasViejoEstudiante=edadIngresada; 
        nombreAlumnoMasViejoEstudiante=nombreAlumnoMasViejoEstudiante; 
      }
      else 
      {
        if(edadAlumnoMasViejoEstudiante<edadIngresada)
        {
          edadAlumnoMasViejoEstudiante=edadIngresada; 
          nombreAlumnoMasViejoEstudiante=nombreAlumnoMasViejoEstudiante; 
        }
      }
      if(contadorEstudiante==1)
      {
        mejorPromedioEstudiante=notaIngresada; 
        nombreMejorNotaEstudiante = nombreIngresado; 
      }
      else
      {
        if(mejorPromedioEstudiante<notaIngresada)
        {
          mejorPromedioEstudiante=notaIngresada; 
          nombreMejorNotaEstudiante = nombreIngresado; 
        }
      }
			break; 
		}
     
    respuesta=prompt("desea ingresar otro alumno?"); 
  }//fin de while

  if(contadorBuscando>0)
  {
    promedioBuscando=acumuladorNotaBuscando/contadorBuscando; 
    mensajeBuscando="El promedio de Nota de los alumnos que buscan trabajo es "+promedioBuscando; 
    mensajeMenorCantidadMaterias=" el nombre del que cursa menos cantidad de materias y que este buscando trabajo es "+nombreMenorCantidadMateriasEnBuscando+" y tiene "+edadMenorCantidadMateriasEnBuscando+" años. "
  }
  else 
  {
    mensajeBuscando="No hay alumnos buscando trabajo. "; 
    mensajeMenorCantidadMaterias = "No hay alumnos buscando trabajo. "; 
  }
  if(contadorEstudiante>0)
  {
    promedioEstudiante=acumuladorNotaEstudiante/contadorEstudiante; 
    mensajeEstudiante = "El promedio de Nota de los alumnos que solo estudian es "+promedioEstudiante; 
    mensajeEstudianteMasViejo="El nombre del alumno mas viejo solo estudiante es "+nombreAlumnoMasViejoEstudiante;
    mensajeMejorNotaEstudiante="El nombre del mejor promedio que no de los que tarbajan o estan buscando es"+ nombreMejorNotaEstudiante; 
  }
  else
  {
    mensajeEstudiante="No hay alumnos que solo estudien. "; 
    mensajeEstudianteMasViejo="No hay alumnos que solo esten estudiando. "; 
    mensajeMejorNotaEstudiante="No hay alumnos que solo esten estudiando. "; 
  }
  if(contadorTrabajando>0)
  {
  promedioTrabajando=acumuladorNotaTrabajando/contadorTrabajando; 
  mensajeTrabajando="El promedio de Nota de los alumnos que estan trabajando es "+promedioTrabajando;  
  }
  else
  {
    mensajeTrabajando="No hay alumnos que esten trabajando"; 
  }
   

	/*A.*/ console.log(mensajeMejorNotaEstudiante); 
	/*B*/ console.log(mensajeEstudianteMasViejo);  
	/*C.*/ console.log(mensajeBuscando+mensajeEstudiante+mensajeTrabajando); 
	/*D.*/ console.log(mensajeMenorCantidadMaterias); 
	
}
