function encriptar() {
  var cifrado = "";
  var textarea = document.getElementById("texto-area");
  var texto_encontrado = document.getElementById("texto_encontrado");
  var texto_encriptado = document.getElementById("texto_encriptado");
  var ningun_texto = document.getElementById("ningun_texto");
  ningun_texto.style.display = "none";
  texto_encontrado.style.display = "flex";
  var texto = textarea.value;

  if (texto.length == 0) {
    texto_encontrado.style.display = "none";
    ningun_texto.style.display = "flex";
  }
  function contieneCaracteresEspeciales(texto) {
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return regex.test(texto);
  }
  function tieneMayusculas(texto) {
    return /[A-Z]/.test(texto);
  }
  if(tieneMayusculas(texto)==true || contieneCaracteresEspeciales(texto)==true  ){
    window.alert("Caracter no valido");
    texto_encontrado.style.display = "none";
    ningun_texto.style.display = "flex";
  }
  for (var i = 0; i < texto.length; i++) {
    var letra = texto.charAt(i);
    if (letra == "e") {
      cifrado += "enter";
    } else if (letra == "i") {
      cifrado += "imes";
    } else if (letra == "a") {
      cifrado += "ai";
    } else if (letra == "o") {
      cifrado += "ober";
    } else if (letra == "u") {
      cifrado += "ufat";
    } else {
      cifrado += letra;
    }
  }
    texto_encriptado.textContent = cifrado;



}
function desencriptar() {
  var textarea = document.getElementById("texto-area");
  var texto_encontrado = document.getElementById("texto_encontrado");
  var texto_desencriptado = document.getElementById("texto_encriptado");
  var ningun_texto = document.getElementById("ningun_texto");
  ningun_texto.style.display = "none";
  texto_encontrado.style.display = "flex";
  var texto = textarea.value;
  var desencriptado = "";

  if(texto.length == 0){
    texto_encontrado.style.display = "none";
    ningun_texto.style.display = "flex";
  }
  function contieneCaracteresEspeciales(texto) {
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return regex.test(texto);
  }
  function tieneMayusculas(texto) {
    return /[A-Z]/.test(texto);
  }
  if(tieneMayusculas(texto)==true || contieneCaracteresEspeciales(texto)==true  ){
    window.alert("Caracter no valido");
    texto_encontrado.style.display = "none";
    ningun_texto.style.display = "flex";
  }
  for (var x = 0; x < texto.length; x++) {
    if (texto.substr(x, 2) == "ai") {
      desencriptado+="a";
      x+=1;
    }
    else if(texto.substr(x, 4) == "imes") {
      desencriptado+="i";
      x+=3;
    }
    else if (texto.substr(x, 4) == "ober") {
      desencriptado+="o";
      x+=3;
    }
    else if (texto.substr(x, 4) == "ufat") {
      desencriptado+="u";
      x+=3;
    }
    else if (texto.substr(x, 5) == "enter") {
      desencriptado+="e";
      x+=4;
    } 
    else {

      desencriptado+=(texto[x]);
        
        if(x>texto.length){
            break
        }  
    }


  }
  texto_desencriptado.textContent = desencriptado;
}

function copyToClipBoard() {

  var content = document.getElementById('texto_encriptado').innerHTML;

  navigator.clipboard.writeText(content)
      .then(() => {
      console.log("Text copied to clipboard...")
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })
}