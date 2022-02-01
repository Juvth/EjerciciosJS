/*-----------------EJERCICIO 1-----------------*/

/*-----------------EJERCICIO 2-----------------*/
function otros2() {
    var palabra = document.getElementById("frase").value

    var list = []
    list.push(palabra)
    if (!alertdatosvacios(list)) {
        var vector_palabras_unicas = []
        var palabra_sin_espacios = palabra.replace(/ /g, "")
        var vector_palabras = palabra_sin_espacios.split('')
        var resultado = ""

        for (var i = 0; i < vector_palabras.length; i++) {
            for (var j = 0; j < vector_palabras.length; j++) {
                if (vector_palabras[i] == vector_palabras[j] &&
                    !existe_ant(vector_palabras[i], vector_palabras_unicas)) {
                    vector_palabras_unicas.push(vector_palabras[i])
                }
            }
        }

        for (var k = 0; k < vector_palabras_unicas.length; k++) {
            var cont = 0

            for (var l = 0; l < vector_palabras.length; l++) {
                if (vector_palabras_unicas[k] == vector_palabras[l]) {
                    cont++
                }
            }
            resultado += vector_palabras_unicas[k] + " -> " + cont + " \n "
        }
        document.getElementById("resp").innerText = resultado
    }
}

function existe_ant(letra, frase) {
    var bandera = false

    if (frase.length > 0) {
        for (var i = 0; i < frase.length; i++) {
            if (frase[i] == letra) {
                bandera = true
            }
        }
    }
    return bandera
}

function alertdatosvacios(list_elements) {
    var bandera = false

    for (var i = 0; i < list_elements.length; i++) {
        if (list_elements[i] == "" || list_elements[i] == undefined) {
            bandera = true;
            i = list_elements.length++
        }
    }

    if (bandera == true) {
        alert("Debe llenar las celdas");
    }
    return bandera
}

/*-----------------EJERCICIO 3-----------------*/
function random(){
    var id = document.getElementById("dado").value;
    id = Number(id);
    
    if(id == 1){ 
        document.getElementById("rd").innerText = Math.floor(Math.random() * 6) + 1;
    }else{
        if(id == 2){ 
            document.getElementById("rd").innerText = Math.floor(Math.random() * 10) + 1;
        }else{
            document.getElementById("rd").innerText = Math.floor(Math.random() * 20) + 1;
        }
    }
}