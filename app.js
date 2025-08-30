let numeroSecreto = aleatorio();
let intentos = 1;
//let listaSorteados = []; ->ERROR DESCONOCIDO, NO PUEDO ENTRAR A LA LISTA
//let numM = 100;


function asignarTextoElemento(Elemento, Texto) {
    let ElementoHTML = document.querySelector(Elemento); // Selecciona el primer elemento <h1> del documento y lo asigna a la variable titulo
    ElementoHTML.innerHTML = Texto;
}


function intentousuario() {
    let numU = parseInt(document.querySelector("input").value); //Selecciona el valor del input
     //let numU = document.getElementById("numUsuario").value;// -> es otra forma de hacerlo pero esta buscando por el id y por su etiqueta
     console.log(intentos);
     console.log(numU);
     if (numU === numeroSecreto){
        asignarTextoElemento('p',`FELICIDADES :D... acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
     }else {
         if (numU > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor que el digitado");
            
         }else{
            asignarTextoElemento("p",'El numero secreto es mayor al digitado');
         }
         intentos++;
         limpiar();
     }
 return;
}


function limpiar(){
    let Vcaja = document.querySelector('#numUsuario');//-> otra forma seria document.querySelector('#numUsuario').value = '';
    Vcaja.value = '';
}


function aleatorio() {
   let numeroS = Math.floor(Math.random()*100)+1; //(Version 1.0)
   return numeroS; //->Poner el return no influye en la variable global pero es buena practica :D.// (VERSION 1.0)
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego de locos xD");
    asignarTextoElemento("P","Escoge un numero entre 1 y 100"); //->TODO esto sirve para automatizar la asignacion de texto a un elemento HTML
    numeroSecreto = aleatorio();
    intentos = 1;
    console.log(numeroSecreto);
}

function nuevoJuego(){
    limpiar();
    condicionesIniciales();
    //Deshabilitar el boton de "Nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();


/*let titulo = document.querySelector('h1'); // Selecciona el primer elemento <h1> del documento y lo asigna a la variable titulo
titulo.innerHTML = 'Juego de numero secreto';

//-> si usamos el doble "==" funciona para comparar entre un valor y otro, pero, el "===" fuerza a que estos
// de igual caracteristica osea que no se permitiria la mezcla de string y number mientras que con el doble si se permitiria
// (y aunque es practico no es recomendable w)

let parrafo = document.querySelector('p'); // Selecciona el primer elemento <p> dentro del <h1> y lo asigna a la variable parrafo
parrafo.innerHTML = "Adivina el numero secreto entre 1 y 10";*/ //-> Lo mismo que la funcion de arriba pero sin automatizar :D

//console.log(numerosSorteados)[numerosSorteados.length-1]; -> sirve para conocer el ultimo elemento de una lista

//console.log(numerosSorteados.length); -> sirve para conocer el tamaño de una lista o arreglo (NOTA: Tanto el de arriba como este usan la variable
//dada en alura osea el curso de programacio)

//CTRL + F -> para buscar palabras o numeros en un codigo

//return math.floor(math.random()*10)+1; //es lo mismo que hacer las 3 lineas de abajo pero mas eficiente y ya no se necesita la variable :D (VERSION2.0)
   
/* let numeroG = Math.floor(Math.random()*100)+1;

/*function aleatorio() {
 //let numeroS = Math.floor(Math.random()*numM)+1; // (Version 3.0)
   
 ***CONFIRMACION DE SI SE PUEDE SEGUIR JUGANDO***
    if (listasS.lenth == numM){
        asignartextoelemento('p',"Ya se sortearon todos los numeros posibles");
    }else{
        }
    //Comprabacion si el numero ya fue mostrado
    if (listaSorteados.includes(numeroG)){
        return aleatorio();
    } else {
        listaSorteados.push(numeroG);
        return numeroG();
    }

}*/
