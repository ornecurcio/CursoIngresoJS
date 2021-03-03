/*Enunciado:1

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/

function mostrar()
{
let tipoInflamaleDeProducto; 
let precioIngresado; 
let cantidadIngresada; 
let tipoDeproductoIngresado;
let marcaIngresada; 
let contadorProducto; 
let contadorAlcohol; 
let contadorIac; 
let contadorQuat; 
let acumulardorAlcohol; 
let acumuladorIac; 
let acumuladorQuat; 
let tipoInflamableConMasCantidad; 
let acumuladorIgnifugo; 
let acumuladorCombustible; 
let acumuladorExplosivo; 
let acumuladorIacMenosDosCientos; 
let precioProductoMasCaro; 
let marcaProductoMasCaro; 
let tipoProductoMasCaro; 
let promedioAlcohol; 
let promedioIac; 
let promedioQuat; 
let mensajeIacMenorDosCientos; 


contadorProducto=0; 
contadorAlcohol=0; 
contadorIac=0; 
contadorQuat=0; 
acumuladorCombustible=0; 
acumuladorExplosivo=0; 
acumuladorExplosivo=0; 
acumuladorIgnifugo=0; 
acumuladorQuat=0; 
acumuladorIac=0; 
acumulardorAlcohol=0; 
acumuladorIacMenosDosCientos=0; 

while(contadorProducto<5)
{
    contadorProducto=contadorProducto+1; 

    tipoDeproductoIngresado = prompt("Ingrese tipo de producto: ALCOHOL, IAC, QUAT"); 
		while(isNaN(tipoDeproductoIngresado)==false || tipoDeproductoIngresado!="ALCOHOL" && tipoDeproductoIngresado!="IAC" && tipoDeproductoIngresado!="QUAT")
		{
			tipoDeproductoIngresado = prompt("Error, ingrese producto: ALCOHOL, IAC, QUAT"); 
		}
    precioIngresado = prompt("Ingrese precio"); 
	precioIngresado = parseFloat(precioIngresado); 
		while(isNaN(precioIngresado)==true || precioIngresado>300 || precioIngresado<100)
		{
			precioIngresado = prompt("Error, ingrese precio entre 100 y 300"); 
		    precioIngresado = parseFloat(precioIngresado); 
		}
    cantidadIngresada = prompt("Ingrese cantidad"); 
	cantidadIngresada = parseInt(cantidadIngresada); 
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<1 || cantidadIngresada>1000)
		{
			cantidadIngresada = prompt("Error, ingrese cantidad entre 1 y 1000"); 
			cantidadIngresada = parseInt(cantidadIngresada);
		}
    tipoInflamaleDeProducto = prompt("Ingrese tipo inflamable de  producto: ignifugo, combustible, explosivo"); 
		while(isNaN(tipoInflamaleDeProducto)==false || tipoInflamaleDeProducto!="ignifugo" && tipoInflamaleDeProducto!="combustible" && tipoInflamaleDeProducto!="explosivo")
		{
			tipoInflamaleDeProducto = prompt("Error, ingrese tipo inflamable de  producto: ignifugo, combustible, explosivo"); 
		}

    marcaIngresada = prompt("Ingrese marca"); 
        while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada = prompt("Error, ingrese marca"); 
		}
    
    switch(tipoDeproductoIngresado)
    {
        case"ALCOHOL": 
        contadorAlcohol=contadorAlcohol+1; 
        acumulardorAlcohol=acumulardorAlcohol+cantidadIngresada; 
        break; 
        case "IAC": 
        contadorIac=contadorIac+1; 
        acumuladorIac=acumuladorIac+cantidadIngresada; 
        if(precioIngresado<201)
        {
            acumuladorIacMenosDosCientos=acumuladorIacMenosDosCientos+cantidadIngresada; 
        }
        break; 
        case"QUAT": 
        contadorQuat=contadorQuat+1; 
        acumuladorQuat=acumuladorQuat+cantidadIngresada; 
        break; 
    }

    switch(tipoInflamaleDeProducto)
    {
        case"combustible": 
        acumuladorCombustible = acumuladorCombustible+cantidadIngresada;
        acumuladorCombustible = parseInt(acumuladorCombustible);  
        break; 
        case"explosivo":
        acumuladorExplosivo=acumuladorExplosivo+cantidadIngresada; 
        acumuladorExplosivo=parseInt(acumuladorExplosivo); 
        break; 
        case"ignifugo": 
        acumuladorIgnifugo=acumuladorIgnifugo+cantidadIngresada;
        acumuladorIgnifugo=parseInt(acumuladorIgnifugo);  
        break; 
    }
    if(contadorProducto==1)
    {
        precioProductoMasCaro=precioIngresado; 
        marcaProductoMasCaro=marcaIngresada; 
        tipoProductoMasCaro=tipoDeproductoIngresado; 
    }
    else
    {
        if(precioProductoMasCaro<precioIngresado)
        {
            precioProductoMasCaro=precioIngresado; 
            marcaProductoMasCaro=marcaIngresada; 
            tipoProductoMasCaro=tipoDeproductoIngresado;   
        }
    }
}//finwhile

if(acumuladorCombustible>acumuladorExplosivo)
{
    tipoInflamableConMasCantidad = "El tipo inflamable con mas cantidad es Combustible. "; 
}
else
{
    if(acumuladorExplosivo>acumuladorIgnifugo)
    {
        tipoInflamableConMasCantidad = "El tipo inflamable con mas cantidad es Explosivo. "; 
    }
    else
    {
        tipoInflamableConMasCantidad = "El tipo inflamable con mas cantidad es Ignifugo. "; 
    }
}

if(contadorAlcohol>0)
{
    promedioAlcohol="El promedio de alcohol es "+(acumulardorAlcohol/contadorAlcohol)+" unidades. "; 
}
else
{
    promedioAlcohol = "No se registro alcohol. "; 
}
if(contadorIac>0)
{
    promedioIac = "El promedio de Iac es "+(acumuladorIac/contadorIac)+" unidades. "; 
}
else
{
    promedioIac = "No se registro Iac. "; 
}
if(contadorQuat>0)
{
    promedioQuat = "El promedio de Quat es "+(acumuladorQuat/contadorQuat)+" unidades. "; 
}
else
{
    promedioQuat = "No se registro Quat. "; 
}
if(acumuladorIacMenosDosCientos>0)
{
    mensajeIacMenorDosCientos = "Se compraron "+acumuladorIacMenosDosCientos+" unidades de Iac con precio menor a doscientos. "; 
}
else
{
    mensajeIacMenorDosCientos = "No se compraron unidades de IAC con precio menor a 200. "; 
}
console.log(promedioAlcohol+promedioIac+promedioQuat); 
console.log(tipoInflamableConMasCantidad); 
console.log(mensajeIacMenorDosCientos); 
console.log("La marca del producto mas caro es "+marcaProductoMasCaro+" de tipo "+tipoProductoMasCaro+" con "+precioProductoMasCaro+" de precio. "); 







}//fin de funcion; 
