const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img"),
img = document.querySelector("img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generando QR ...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = " Codigo QR";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});



function getFileName(str){
    return str.substr(str.lastIndexOf('/') + 1)
}

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

