//Aquí va todo lo del DOM: todo lo que mandamos y recibimos del html

// Tomar input desde html
    const messageCode = document.getElementById('mensajito');
    const messageDecode = document.getElementById('mensajito2');
    const offsetJs = document.getElementById('offset');

//Función arrow para cifrar
const buttonCode = () => {
  let message = messageCode.value;
  let offset = parseInt(offsetJs.value);
//Imprimiendo en HTML mi resultado. cipher es objeto, encode es método, entre paréntesis mis argumentos.
document.getElementById('cajitaCifrado').innerHTML = cipher.encode(message,offset);
}

//Función arrow para descifrar
const buttonDecode = () => {
  let message2 = messageDecode.value;
  let offset = parseInt(offsetJs.value);

document.getElementById('cajitaDescrifado').innerHTML = cipher.decode(message2, offset);
}
