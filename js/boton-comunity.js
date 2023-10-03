let start = document.getElementById('start');
let comunity = document.getElementById('comunity');
let cerrar = document.getElementById('cerrar');



start.addEventListener('click',()=>{
    comunity.style.display='block';
});

cerrar.addEventListener('click',()=>{
    comunity.style.display='none';
})

