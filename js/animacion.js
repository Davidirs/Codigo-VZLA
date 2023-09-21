let animacionColor = document.getElementsByClassName('animacionColor');


for (let j = 0; j <animacionColor.length; j++) {
   animacionColor[j].addEventListener("click", function () {
        removerClase();
        agregarClase(j);
    }
    )
}
function removerClase() {
    for (let k = 0; k <animacionColor.length; k++) {
        //como k va de 0 a 6, se los va a quietar a todos
       animacionColor[k].classList.remove("activo");
    }
}
function agregarClase(j) {
    //agregar nueva clase llamada active
   animacionColor[j].classList.add("activo");
}

let mostrarOpciones= document.getElementById('mostrarOpciones')
let ocultar = document.querySelector('.ocultar');
let options=document.getElementsByClassName('options');

mostrarOpciones.addEventListener('click',()=>{ 
   for (let i = 0; i < options.length; i++) {
    options[i].classList.toggle("ocultar");
    options[i].classList.toggle("mostrar");
    
   }
});



