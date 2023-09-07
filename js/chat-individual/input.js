//creamos una constante y obtenemos el id del input
const mostrarEmoji = document.getElementById('mostrarEmoji');
const ocultar = document.querySelectorAll('.none');
const textarea = document.getElementById('texarea');
const botonIcon = document.getElementById('boton-icon-chage');


function cambiarIcono() {
    botonIcon.classList.toggle('fa-microphone');
    botonIcon.classList.toggle('fa-paper-plane');
    console.log('lala');
}
   


mostrarEmoji.addEventListener('click',()=>{
    for (let i = 0; i < ocultar.length; i++) {
        ocultar[i].classList.toggle('none');
        ocultar[i].classList.toggle('block');
        
    }
    
});


//creamos una funcion para agregar emogi
function addEmoji(emoji) {
    //definimos la etiqueta i que es la que usa fontawesome
    textarea.textContent += emoji;
    console.log(emoji);

}

//seleccionamos todos los iconos
var allIcons = document.querySelectorAll("a.i");


for (let j = 0; j < allIcons.length; j++) {
    allIcons[j].addEventListener("click", () => {
        addEmoji(allIcons[j].textContent);
    });

}


