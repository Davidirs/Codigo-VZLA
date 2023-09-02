//creamos una constante y obtenemos el id del input
const input = document.getElementById("input");
const inputPlaceHolder = document.querySelector("#input .place-holder");
console.log(inputPlaceHolder);

//escuchamos el evento de tecla presionada
input.addEventListener("keypress", (key) => {
    //al input le agregamos la tecla precionada
    bar.remove();

    switch (key.code) {
        case "Enter":
            input.innerHTML += "<br>";
            break;
        case "Space":
            let etiqueta = document.createElement("a");
            //le creamos sus clases
            etiqueta.classList.add("space")
            etiqueta.textContent = " ";
            //se la agregamos a nuestro input
            input.appendChild(etiqueta);

            input.innerHTML += key.key;
            break;

        default:
            inputPlaceHolder.style.display = "none";
            input.innerHTML += key.key;
            break;
    }
    input.appendChild(bar);
    /* if(key.key="Enter"){
    
        input
    } */
    console.log(key.code);
});

//creamos una funcion para agregar emogi
function addEmoji(nameEmoji) {
    //definimos la etiqueta i que es la que usa fontawesome
    let etiqueta = document.createElement("a");
    //le creamos sus clases
    etiqueta.textContent = nameEmoji;
    //se la agregamos a nuestro input
    input.appendChild(etiqueta);
}

//seleccionamos todos los iconos
var allIcons = document.querySelectorAll("a.i");


for (let j = 0; j < allIcons.length; j++) {
    allIcons[j].addEventListener("click", () => {
        addEmoji(allIcons[j].textContent);
    });

}

let bar = document.getElementById("barra");
setInterval(function () {
    bar.classList.toggle("hide");
}, 500);
