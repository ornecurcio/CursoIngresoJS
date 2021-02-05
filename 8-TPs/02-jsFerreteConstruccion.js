/*2. Ornela Ivana Curcio 	
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

// superficie, largo x 2 + ancho x 2 
// cantidad de alambre, superficie /3 
function Rectangulo () 
{
let largo; 
let largoTotal; 
let ancho; 
let anchoTotal; 
let superficie; 
let alambre; 

largo = document.getElementById("txtIdLargo").value; 
largo = parseInt(largo); 

ancho = document.getElementById("txtIdAncho").value; 
ancho = parseInt(ancho); 

largoTotal = largo * 2; 
anchoTotal = ancho * 2; 

superficie = anchoTotal + largoTotal; 

alambre = superficie * 3; 

alert("Se necesitan " + alambre + " metros de alambre")

}

// superficie circulo = 2*3.14*r
function Circulo () 
{
    let radio; 
    let superficie; 
    let alambre; 
    
    radio = document.getElementById("txtIdRadio").value; 
    radio = parseInt(radio); 

    superficie = 2*3.14*radio; 

    alambre = superficie * 3; 
    
    alert("Se necesitan " + alambre + " metros de alambre")	
}
function Materiales () 
// 1m*1m 2bolsas cemento y 3 de cal 
// area de rec: largo al cuadrado + ancho al cuadrado 
{
    let ancho; 
    let largo;
    let area; 
    let cemento; 
    let cal; 

    ancho = document.getElementById("txtIdAncho").value; 
    ancho = parseInt(ancho); 

    largo = document.getElementById("txtIdLargo").value; 
    largo = parseInt(largo); 

    area = ancho * largo; 

    cemento = area * 3; 

    cal = area * 2; 

    alert("Se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento" )


}