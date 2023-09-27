const butonOptionLenguaje =document.getElementById('butonOptionLenguaje');
const optionslenguaje= document.getElementById('optionsLenguaje');
const ocultarOption = document.querySelector('.ocultar');


butonOptionLenguaje.addEventListener('click',()=>{
     optionslenguaje.classList.toggle('ocultar');
     optionslenguaje.classList.toggle('block');
   

   });

window.onclick = function(event)
{
    if(event.target== optionslenguaje){
        optionslenguaje.classList.remove('block');
        optionslenguaje.classList.add('ocultar');
    }
}