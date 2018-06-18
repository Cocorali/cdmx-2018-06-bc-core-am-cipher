window.cipher = {
//Función para cifrar
    encode : (message, offset) => {
      let cifradoJs = "";
      //Bucle para iterar letra regular y obtener posición ASCII
      for(let i= 0; i< message.length; i++) {
        //Creando variable para almacenar posición regular ASCII
        let codeNumber = message.charCodeAt(i);
        //Estableciendo rangos para mayúsculas
        if (codeNumber >= 65 && codeNumber <=90) {
          //Aplicando fórmula para obtener posición cifrada ASCII y creando variable para almacenarla
          let codeNew = (codeNumber - 65 + offset) % 26 + 65;
          //Obteniendo letras cifradas a partir de let codeNew y concatenando con let cipher
          cifradoJs+= String.fromCharCode(codeNew);
        } else if (codeNumber >= 97 && codeNumber <=122) {
          //Estableciendo rangos para minúsculas
          let codeNew = (codeNumber - 97 + offset) % 26 + 97;
          cifradoJs+= String.fromCharCode(codeNew);
        } else if (codeNumber === 32) {
          cifradoJs+= String.fromCharCode(codeNumber);
        }
        //console.log(cifradoJs);
      }
      return cifradoJs;
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
