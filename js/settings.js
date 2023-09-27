const butonOptionLenguaje =document.getElementById('butonOptionLenguaje');
const optionslenguaje= document.getElementById('optionsLenguaje');
const ocultarOption = document.querySelector('.ocultar');
const option = document.querySelector('.options');
const closeIcon = document.getElementById('close-icon')


butonOptionLenguaje.addEventListener('click',()=>{
     optionslenguaje.classList.toggle('ocultar');
     optionslenguaje.classList.toggle('block');
   

   });


closeIcon.addEventListener('click',()=>{
      optionslenguaje.classList.remove('block');
        optionslenguaje.classList.add('ocultar');
});

window.onclick = function(event)
{
    if(event.target== optionslenguaje){
        options.classList.remove('block');
        options.classList.add('ocultar');
    }
}