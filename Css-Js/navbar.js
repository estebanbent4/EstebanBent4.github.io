document.addEventListener("scroll", function(){

let NavClass = document.getElementById('header1'); //Toma un elemento del documento por su id. en este caso "header1"

if(scrollY >= 100){ 
    NavClass.classList.remove('header');
    NavClass.classList.add('header2');
}else if(scrollY <=45){
    NavClass.classList.add('header');
    NavClass.classList.remove('header2');
}});

/*

Lo que hice fue agregar un evento al documento que es "scroll". 
este evento tiene una funcion dentro que lo que hace es tomar
un elemnto dentro del html por su id. y si los px de scrollY son igules o mayores a 100px 
va a eleminar la clase header y va a agregar la clase header2. de lo contrario
si los px de scrollY son menores o igules a 45px va a eliminar la clase header2 
y va agregar la clase header.

*/
