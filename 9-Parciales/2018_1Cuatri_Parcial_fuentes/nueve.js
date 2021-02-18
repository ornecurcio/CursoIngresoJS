/*Ornela Curcio 
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )*/
function mostrar()
{
  let marcaIngresada; 
  let pesoIngresado; 
  let temperaturaIngresada; 
  let temperaturasPares;  //contador
  let productosCeroGrados; //contador
  let marcaPesoMax;  
  let promedioPeso; 
  let pesoMaximo; 
  let pesoMinimo; 
  let respuesta; 
  let bandera; 
  let contadorPeso; 
  let acumuladorPeso; 
  

 respuesta = "si";
 bandera = 1; 
 contadorPeso = 0; 
 acumuladorPeso = 0; 
 temperaturasPares = 0; 
 productosCeroGrados = 0; 

 while(respuesta=="si")
 {
    marcaIngresada = prompt("Ingrese marca"); 
    while(isNaN(marcaIngresada)==false)
    {
        marcaIngresada = prompt("Error, ingrese marca"); 
    }
    
    pesoIngresado = prompt("Ingrese peso en kilos"); 
    pesoIngresado = parseInt(pesoIngresado); 
    while(isNaN(pesoIngresado)==true || pesoIngresado<1 || pesoIngresado>100)
    {
        pesoIngresado = prompt("Error, ingrese peso en kilos"); 
        pesoIngresado = parseInt(pesoIngresado); 
    }
    contadorPeso = contadorPeso + 1; 
    acumuladorPeso = acumuladorPeso + pesoIngresado;
    
    temperaturaIngresada = prompt("Ingrese temperatura en grados"); 
    temperaturaIngresada = parseInt(temperaturaIngresada); 
    while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<-30 || temperaturaIngresada>30)
    { 
        temperaturaIngresada = prompt("Error, ingrese temperatura en grados"); 
        temperaturaIngresada = parseInt(temperaturaIngresada);
    }
    
    if(bandera=1)
    {
        pesoMaximo = pesoIngresado; 
        pesoMinimo = pesoIngresado; 
        marcaPesoMax = marcaIngresada; 
        bandera = 0; 
    }
    if(pesoIngresado>pesoMaximo)
    {
        pesoMaximo = pesoIngresado; 
        marcaPesoMax = marcaIngresada; 
    }
    if(pesoIngresado<pesoMinimo)
    {
        pesoMinimo = pesoIngresado; 
    }

    if(temperaturaIngresada%2==0)
    {
        temperaturasPares = temperaturasPares + 1; 
    }
    if(temperaturaIngresada<0)
    {
        productosCeroGrados = productosCeroGrados + 1; 
    }
    
    respuesta = prompt("desea cargar nuevo producto?"); 
 }
 
 promedioPeso = acumuladorPeso/contadorPeso; 

 console.log("La cantidad de temperaturas pares son: "+temperaturasPares); 
 console.log("La marca del producto más pesado es: "+marcaPesoMax); 
 console.log("La cantidad de productos que se conservan a menos de 0 grados es: "+productosCeroGrados); 
 console.log("El promedio del peso de todos los productos es :"+promedioPeso+" kilos");  
 console.log("El peso máximo es: " +pesoMaximo+" kilos, y el peso minimo es: "+pesoMinimo+" kilos"); 
 
 

}//FIn de FUNCION
