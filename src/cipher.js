window.cipher = {
//Función para cifrar
    encode : (message, offset) => {
      let codedMessage = "";
      //Bucle para iterar letra regular y obtener posición ASCII
      for(let i= 0; i< message.length; i++) {
        //Creando variable para almacenar posición regular ASCII
        let keyNumber = message.charCodeAt(i);
        //Estableciendo rangos para mayúsculas
        if (keyNumber >= 65 && keyNumber <=90) {
          //Aplicando fórmula para obtener posición cifrada ASCII y creando variable para almacenarla
          let codeNew = (keyNumber - 65 + offset) % 26 + 65;
          //Obteniendo letras cifradas a partir de let codeNew y concatenando con let cipher
          codedMessage+= String.fromCharCode(codeNew);
        } else if (keyNumber >= 97 && keyNumber <=122) {
          //Estableciendo rangos para minúsculas
          let codeNew = (keyNumber - 97 + offset) % 26 + 97;
          codedMessage+= String.fromCharCode(codeNew);
        } else if (keyNumber === 32) {
          codedMessage+= String.fromCharCode(keyNumber);
        }
        //console.log(cifradoJs);
      }
      return codedMessage;
  },

  decode : (message2, offset) => {
    let descifradoJs = "";
    for (let  i= 0; i< message2.length; i++) {
      //Establecer rango para mayúsculas
      let decodeNumber = message2.charCodeAt(i);
      if (decodeNumber >= 65 && decodeNumber <=90) {
        let decodeNew = (decodeNumber - 90 - offset) % 26 + 90;
        descifradoJs+= String.fromCharCode(decodeNew);
      } else if (decodeNumber >= 97 && decodeNumber <=122) {
        //Establecer rango para minúsculas
        let decodeNew = (decodeNumber - 122 - offset) % 26 + 122;
        descifradoJs+= String.fromCharCode(decodeNew);
      } else if (decodeNumber === 32) {
        descifradoJs+= String.fromCharCode(decodeNumber);
      }
    }
    return descifradoJs;
  }
}
