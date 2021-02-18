/*Ornela Curcio 
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt 
y que muestre el perímetro por alert.*/
function mostrar()
{
let ancho; 
let largo; 
let perimetro; 

ancho = prompt("Ingrese ancho en metros"); 
ancho = parseFloat(ancho); 
while(isNaN(ancho)==true || ancho<1 || ancho>1000000)
{
    ancho = prompt("Error, ingrese ancho en metros"); 
    ancho = parseFloat(ancho);  
}
largo = prompt("Ingrese largo en metros"); 
largo = parseFloat(largo); 
while(isNaN(largo)==true || largo<1 || largo>10000000)
{
    largo = prompt("Error, ingrese largo en metros"); 
    largo = parseFloat(largo);   
}

perimetro = 2*(largo + ancho); 
alert("El perimetro es "+perimetro+" metros"); 
}
