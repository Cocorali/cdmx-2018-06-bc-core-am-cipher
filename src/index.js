//Aquí va todo lo del DOM: todo lo que mandamos y recibimos del html

// Tomar input desde html
    let messageCode = document.getElementById('message-to-code');
    let messageDecode = document.getElementById('message-to-decode');
    const offsetJs = document.getElementById('offset');

//Función arrow para cifrar
const buttonCode = () => {
  let message = messageCode.value;
  let offset = parseInt(offsetJs.value);
//Imprimiendo en HTML mi resultado. cipher es objeto, encode es método, entre paréntesis mis argumentos.
document.getElementById('message-to-decode').innerHTML = cipher.encode(message,offset);
}

//Función arrow para descifrar
const buttonDecode = () => {
  let message2 = messageDecode.value;
  let offset = parseInt(offsetJs.value);

document.getElementById('message-to-code').innerHTML = cipher.decode(message2, offset);
}
