//creamos una constante y obtenemos el id del input
const mostrarEmoji = document.getElementById('mostrarEmoji');
const ocultar = document.querySelectorAll('.none');
const textarea = document.getElementById('texarea');
const botonIcon = document.getElementById('boton-icon-chage');
const chat = document.getElementById('chat');


function cambiarIcono() {

    if( textarea.value.length===0){
        botonIcon.classList.add('fa-microphone');
        botonIcon.classList.remove('fa-paper-plane');
    }else{
        botonIcon.classList.remove('fa-microphone');
        botonIcon.classList.add('fa-paper-plane');
    }    
}

function sendmessage() {

    if (textarea.value !=="") {
        const messageElement= document.createElement('div');
        messageElement.classList.add('chat-text');
        messageElement.textContent = textarea.value;
       chat.appendChild(messageElement);
       textarea.value ="";
        
    }
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


