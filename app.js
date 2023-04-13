// definiendo variables globales que se utilizarán en el código:
const d = document;
const n = navigator;
const body = d.body;
const resultContainer = d.querySelector(".result-container");
const text = d.getElementById("text");
//evento click para escuchar los clics en el documento
body.addEventListener("click", (e) => { 
    //Dentro del evento click, se utilizan condiciones if para verificar qué botón se ha hecho clic y qué acción tomar.
    if (e.target.id === "incriptar") {
        if (text.value === "") {
            console.log("El campo no puede estar vacío");
        } else {
            resultContainer.innerHTML = printDom(incriptar(text.value));
        }
          
    }
    if (e.target.id === "desincriptar") {
        if (text.value === "") {
            console.log("El campo no puede estar vacío");
        } else {
             resultContainer.innerHTML = printDom(desincriptar(text.value));
        }
         
    }
    if (e.target.id === "copyBtnResult") {
        const textToCopy = d.querySelector(".letter p").textContent;
        n.clipboard.writeText(textToCopy).then(() => {
            console.log(`El texto "${textToCopy}" ha sido copiado al portapapeles.`);
        });
    }  
})
//La función incriptar toma un string como parámetro y utiliza expresiones regulares para reemplazar las letras especificadas por sus respectivos valores encriptados.
function incriptar(str) {
   str = str.replace(/e/g, "enter")
         .replace(/i/g, "imes")
         .replace(/a/g, "ai")
         .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return str;
}
//La función desincriptar hace lo contrario a la función anterior, es decir, toma un string encriptado y lo devuelve desencriptado.
function desincriptar(str) {
    str = str.replace(/ufat/g, "u")
         .replace(/ober/g, "o")
         .replace(/ai/g, "a")
         .replace(/imes/g, "i")
        .replace(/enter/g, "e");
    return str;
}
//La función printDom toma un string como parámetro y lo utiliza para construir un nuevo elemento HTML con un div que contiene el string y un botón de copiar.
function printDom(str) {
    return `
            <div class="letter">
                <p>${str}</p>
            </div>
            <div class="copyBtn">
                <button id="copyBtnResult">Copiar</button>
            </div>
`
}


