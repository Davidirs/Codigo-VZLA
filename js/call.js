let finCall = document.getElementById('fin-call');
let call = document.getElementById('call');
let starCall= document.getElementById('startCall');


starCall.addEventListener('click',()=>{
    setTimeout(() => {
    call.style.display = "flex";
}, 1000), setTimeout(() =>{
 
    call.style.display="none";
},10000);

});

finCall.addEventListener('click',()=>{
    call.style.display="none";
});