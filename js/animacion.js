let animacionColor = document.querySelectorAll('.animacionColor');
let mostrar = document.getElementById('mostrarOpciones');
let options = document.getElementById('optionsChat');
let ocultar = document.querySelector('none')

mostrar.addEventListener('click',()=>{
    options.classList.toggle('none');
    options.classList.toggle('mostrar');
});







for (let j = 0; j < animacionColor.length; j++) {
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




