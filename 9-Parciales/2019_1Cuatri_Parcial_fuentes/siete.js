/*Ornela Curcio 
Enunciado:1

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/

function mostrar()
{
let tipoCategoriaIngresada; 
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
let tipoCategoriaMasUnidades; 
let acumuladorDesinfectante; 
let acumuladorDetergente; 
let acumuladorBactericida; 
let acumuladorDetergenteMenosDosCientos; 
let precioProductoMasCaro; 
let marcaProductoMasCaro; 
let tipoProductoMasCaro; 
let promedioAlcohol; 
let promedioIac; 
let promedioQuat; 
let mensajeMenosDosCientos; 


contadorProducto=0; 
contadorAlcohol=0; 
contadorIac=0; 
contadorQuat=0; 
acumuladorDetergente=0; 
acumuladorBactericida=0; 
acumuladorBactericida=0; 
acumuladorDesinfectante=0; 
acumuladorQuat=0; 
acumuladorIac=0; 
acumulardorAlcohol=0; 
acumuladorDetergenteMenosDosCientos=0; 

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
    tipoCategoriaIngresada = prompt("Ingrese tipo inflamable de  producto: desinfectante, bactericida, detergente"); 
		while(isNaN(tipoCategoriaIngresada)==false || tipoCategoriaIngresada!="desinfectante" && tipoCategoriaIngresada!="bactericida" && tipoCategoriaIngresada!="detergente")
		{
			tipoCategoriaIngresada = prompt("Error, ingrese tipo inflamable de  producto: ignifugo, combustible, explosivo"); 
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
               case"QUAT": 
        contadorQuat=contadorQuat+1; 
        acumuladorQuat=acumuladorQuat+cantidadIngresada; 
        break; 
    }

    switch(tipoCategoriaIngresada)
    {
        case"detergente": 
        acumuladorDetergente = acumuladorDetergente+cantidadIngresada;
        acumuladorDetergente = parseInt(acumuladorDetergente);  
        if(precioIngresado<201)
        acumuladorDetergenteMenosDosCientos=acumuladorDetergenteMenosDosCientos+cantidadIngresada; 
        break; 
        case"bactericida":
        acumuladorBactericida=acumuladorBactericida+cantidadIngresada; 
        acumuladorBactericida=parseInt(acumuladorBactericida); 
        break; 
        case"desinfectante": 
        acumuladorDesinfectante=acumuladorDesinfectante+cantidadIngresada;
        acumuladorDesinfectante=parseInt(acumuladorDesinfectante);  
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

if(acumuladorDetergente>acumuladorBactericida)
{
    tipoCategoriaMasUnidades = "El tipo inflamable con mas cantidad es Detergente. "; 
}
else
{
    if(acumuladorBactericida>acumuladorDesinfectante)
    {
        tipoCategoriaMasUnidades = "El tipo inflamable con mas cantidad es Bactericida. "; 
    }
    else
    {
        tipoCategoriaMasUnidades = "El tipo inflamable con mas cantidad es Desinfectante. "; 
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
if(acumuladorDetergenteMenosDosCientos>0)
{
    mensajeMenosDosCientos = "Se compraron "+acumuladorDetergenteMenosDosCientos+" unidades de detergente con precio menor a doscientos. "; 
}
else
{
    mensajeMenosDosCientos = "No se compraron unidades de detergente con precio menor a 200. "; 
}
console.log(promedioAlcohol+promedioIac+promedioQuat); 
console.log(tipoCategoriaMasUnidades); 
console.log(mensajeMenosDosCientos); 
console.log("La marca del producto mas caro es "+marcaProductoMasCaro+" de tipo "+tipoProductoMasCaro+" con "+precioProductoMasCaro+" de precio. "); 


}//fin de funcion; 
