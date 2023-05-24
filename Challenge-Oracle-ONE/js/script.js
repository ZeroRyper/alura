function encriptar() {
  var cifrado = [];
  var textarea = document.getElementById("texto-area");
  var elementoMostrado = document.getElementById("myDIV");
  var boton = document.getElementById("miBoton");
  boton.style.display = "grid";
  var texto = textarea.value;
  if (texto.length == 0) {
    elementoMostrado.textContent = "";
  }
  for (var i = 0; i < texto.length; i++) {
    var letra = texto.charAt(i);
    if (letra == "e") {
      cifrado.push("enter");
    }
    if (letra == "i") {
      cifrado.push("imes");
    }
    if (letra == "a") {
      cifrado.push("ai");
    }
    if (letra == "o") {
      cifrado.push("ober");
    }
    if (letra == "u") {
      cifrado.push("ufat");
    }
    if (
      !(letra == "e") &&
      !(letra == "i") &&
      !(letra == "a") &&
      !(letra == "o") &&
      !(letra == "u")
    ) {
      cifrado.push(letra);
    }
    elementoMostrado.textContent = cifrado.join("");
  }
}
function desencriptar() {
  var textarea = document.getElementById("texto-area");
  var elementoMostrado = document.getElementById("myDIV");
  var texto = textarea.value;
  var desencriptada = [];
  for (x = 0; x < texto.length; x++) {
    if (texto.substr(x, 2) == "ai") {
      desencriptada.push("a");
      x+=2;
    }
    if (texto.substr(x, 4) == "imes") {
      desencriptada.push("i");
      x+=4;
    }
    if (texto.substr(x, 4) == "ober") {
      desencriptada.push("o");
      x+=4;
    }
    if (texto.substr(x, 4) == "ufat") {
      desencriptada.push("u");
      x+=4;
    }
    if (texto.substr(x, 5) == "enter") {
      desencriptada.push("e");
      x+=4;
    } 
    else {
        console.log(x)
        desencriptada.push(texto[x]);

        
        if(x>texto.length){
            break
        }
        
    }
  }
  elementoMostrado.textContent = desencriptada.join("");
}

function copyToClipBoard() {

  var content = document.getElementById('myDIV').innerHTML;

  navigator.clipboard.writeText(content)
      .then(() => {
      console.log("Text copied to clipboard...")
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })
}