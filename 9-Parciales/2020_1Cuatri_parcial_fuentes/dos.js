/*Ornela Curcio
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
  let productoIngresado; 
  let cantidadBolsasIngresada; 
  let precioPorBolsaIngresado; 
  let importeBruto; 
  let descuento; 
  let importeConDescuento; 
  let cantidadCal; 
  let cantidadArena; 
  let cantidadCemento; 
  let precioBolsaCal; 
  let precioBolsaArena; 
  let precioBolsaCemento; 
  let tipoBolsaCara; 
  let bolsaMasCara; 
  let totalBolsas; 
  let tipoMayorCantidadBolsas; 
  let banderaCara; 
  let respuesta; 

  respuesta = "si"; 
  cantidadArena = 0; 
  cantidadCal = 0; 
  cantidadCemento = 0;
  banderaCara = 1; 
  descuento = 0; 
  
  while(respuesta=="si")
  {
    productoIngresado = prompt("Ingrese producto"); 
		while(isNaN(productoIngresado)==true && productoIngresado!="cal" && productoIngresado!="arena" && productoIngresado!="cemento")
		{
			productoIngresado = prompt("Error, ingrese producto: cal, arena, cemento"); 
		}
	    
		precioPorBolsaIngresado = prompt("Ingrese precio"); 
		precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado); 
		while(isNaN(precioPorBolsaIngresado)==true || precioPorBolsaIngresado<0)
		{
			precioPorBolsaIngresado = prompt("Error, ingrese precio mayor a cero"); 
		    precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado); 
		}
        
		cantidadBolsasIngresada = prompt("Ingrese cantidad"); 
		cantidadBolsasIngresada = parseInt(cantidadBolsasIngresada); 
		while(isNaN(cantidadBolsasIngresada)==true || cantidadBolsasIngresada<1 || cantidadBolsasIngresada>1000)
		{
			cantidadBolsasIngresada = prompt("Error, ingrese cantidad entre 1 y 1000"); 
			cantidadBolsasIngresada = parseInt(cantidadBolsasIngresada);
		}
    if(banderaCara==1)
    {
      bolsaMasCara = precioPorBolsaIngresado; 
      tipoBolsaCara = productoIngresado; 
      banderaCara = 0;
    }
    else
    {
      if(precioPorBolsaIngresado>bolsaMasCara)
      {
        bolsaMasCara = precioPorBolsaIngresado; 
        tipoBolsaCara = productoIngresado; 
      }
    }
    switch(productoIngresado)
    {
      case"cal": 
        cantidadCal = cantidadCal + cantidadBolsasIngresada; 
        precioBolsaCal = cantidadBolsasIngresada*precioPorBolsaIngresado
        break;
      case"arena": 
        cantidadArena = cantidadArena + cantidadBolsasIngresada; 
        precioBolsaArena = cantidadArena*precioPorBolsaIngresado; 
        break; 
      case"cemento": 
        cantidadCemento = cantidadCemento + cantidadBolsasIngresada;
        precioBolsaCemento = cantidadCemento*precioPorBolsaIngresado;   
        break; 
    }
		respuesta = prompt("Desea continuar?"); 
  }

  if(cantidadArena>cantidadCemento)
  {
     tipoMayorCantidadBolsas = "Arena"; 
  }
  else
  {
     if(cantidadCemento>cantidadCal)
     {
       tipoMayorCantidadBolsas = "Cemenento"; 
     }
     else
     {
       tipoMayorCantidadBolsas = "Cal"; 
     }
  }

  totalBolsas = cantidadArena + cantidadCal + cantidadCemento; 
  importeBruto = precioBolsaCemento + precioBolsaCal + precioBolsaArena;
  
  if(totalBolsas>30)
  {
    descuento = 25;  
    importeConDescuento = importeBruto - importeBruto*descuento/100; 
    console.log("El importe total a pagar con descuento es: "+importeConDescuento); 
  }
  else
  {
    if(totalBolsas>10)
    {
      descuento = 15; 
      importeConDescuento = importeBruto - importeBruto*descuento/100; 
      console.log("El importe total a pagar con descuento es: "+importeConDescuento); 

    }
    else
    {
      descuento = 0; 
      importeConDescuento = importeBruto - importeBruto*descuento/100; 
    }
  }

  

 console.log("El importe total a pagar bruto sin descuento es: "+importeBruto); 
 console.log("El producto con mas cantidad de bolsa es: "+ tipoMayorCantidadBolsas); 
 console.log("El producto con bolsa mas cara es "+tipoBolsaCara+"cuyo valor es "+bolsaMasCara); 



}//findelafuncion
