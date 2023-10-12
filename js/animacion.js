let animacionColor = document.getElementsByClassName('animacionColor');


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




