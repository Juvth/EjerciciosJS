/*-----------------EJERCICIO 1-----------------*/
function getNota(nota){
    nota = Number(nota);
    
    if(nota >= 95 && nota <= 100){
        document.getElementById('categoria').value = "Excelente";
    }else{
        if(nota >= 90 && nota <= 94){
            document.getElementById('categoria').value = "Muy Bien";
        }else{
            if(nota >= 80 && nota <= 89){
                document.getElementById('categoria').value = "Bien";
            }else{
                if(nota >= 60 && nota <= 79){
                    document.getElementById('categoria').value = "Regular";
                }else{
                    document.getElementById('categoria').value = "Insuficiente";
                }
            }
        }
    }
    
}

function validarNota(nota){
    if(nota < 0 || nota > 100){
        alert("La nota debe estar entre el rango de 0 a 100");
    }else{
        getNota(nota);
    }
}

function validarCampos() {
    var a = document.formulario1.nota.value;

    if (a == null || a == "") {
        alert("Rellena los campos");
    } else {
        validarNota(a);
    };
};

/*-----------------EJERCICIO 2-----------------*/
function Ecuacion(a, b, c){
    a = Number(a);
    b = Number(b);
    c = Number(c);
    
    var discriminante = Math.pow(b, 2) - 4*a*c;

    if(a == 0){
        document.getElementById('raiz1').value = "Ecuación lineal.";
    }else{
        if(discriminante >= 0){
            var r1 = (-b + Math.sqrt(discriminante))/(2*a);
            var r2 = (-b - Math.sqrt(discriminante))/(2*a);
            document.getElementById('raiz1').value = r1.toFixed(2);
            document.getElementById('raiz2').value = r2.toFixed(2);
        }else{
                document.getElementById('raiz1').value = "Discriminante negativo, raíces imaginarias.";
        }
    }  
}

function validarCampos2() {
    var a = document.formulario2.a.value;
    var b = document.formulario2.b.value;
    var c = document.formulario2.c.value;

    if (a == null || a == "" || b == null || b == "" || c == null || c == "") {
        alert("Rellena los campos");
    } else {
        Ecuacion(a, b, c);
    };
};

/*-----------------EJERCICIO 3-----------------*/
function validarCampos3() {
    var a = document.formulario3.Recorrido.value;

    if(a == null || a == ""){
        alert("Rellena los campos");
    }else{
        validarRecorrido(a);
    }
}

function validarRecorrido(rec){
    if(rec < 0){
        alert("Recorrido debe ser mayor a 0");
    }else{
        Calcular(rec);
    }
}

function Calcular(rec){
    rec = Number(rec);
    var impuesto = 0.2;
    var valorximp;
    var valornoimp;
    var aux;

    if(rec >= 0 && rec <= 300){
        valorximp = 300000 * impuesto;
        valornoimp = 300000 - valorximp;

        document.getElementById('PrecioSinImpuesto').value = valornoimp;
        document.getElementById('ValorImpuesto').value = valorximp;
        document.getElementById('ValorRecorrido').value = valornoimp + valorximp;
    }else{
        if(rec > 300 && rec <= 1000){
            aux = 15000 * (rec - 300);
            valorximp = (300000 + aux) * impuesto;
            valornoimp = (300000 + aux) - valorximp;

            document.getElementById('PrecioSinImpuesto').value = valornoimp;
            document.getElementById('ValorImpuesto').value = valorximp;
            document.getElementById('ValorRecorrido').value = valornoimp + valorximp;
        }else{
            aux = 10000 * (rec - 1000);
            valorximp = (300000 + aux) * impuesto;
            valornoimp = (300000 + aux) - valorximp;

            document.getElementById('PrecioSinImpuesto').value = valornoimp;
            document.getElementById('ValorImpuesto').value = valorximp;
            document.getElementById('ValorRecorrido').value = valornoimp + valorximp;
        }
    }
}

/*-----------------EJERCICIO 3-----------------*/
function validarCampos4() {
    var a = document.formulario4.bin1.value;
    var b = document.formulario4.bin2.value;

    if(a == null || a == "" || b == null || b == ""){
        alert("Rellena los campos");
    }else{
        suma_binarios(a, b);
    }
}

function suma_binarios(b1,b2){

    var numerob1 = b1.split("");
    var numerob2 = b2.split("");
    var principal = (numerob1.length>numerob2.length || numerob1.length==numerob2.length) ? b1 : b2;
    var secundario = (numerob1.length<numerob2.length) ? b1 : b2;
    var minuendo = principal.split("");
    var sustraendo = secundario.split("");
    var lleva = 0;
    var resultado_arreglo = [];
    var array_sus = [];
    var pos;

    for (var i = 0; i < minuendo.length; i++) {
        array_sus.push(sustraendo[i]);
        if(array_sus[i] === undefined){
            array_sus.unshift('');
            array_sus.pop();
        }
    }
    
    for (var i = minuendo.length - 1; i >= 0; i--) {
        if(minuendo[i] == lleva){
            minuendo[i] = 0;
        } else {
            minuendo[i] = 1;
            lleva = 0;
        }
        if(minuendo[i] != array_sus[i]){
            resultado_arreglo[i] = 1;
        } else if(minuendo[i] == array_sus[i] && minuendo[i] != 1 && array_sus[i] != 1){
            resultado_arreglo[i] = 0;
        } else if(minuendo[i] == array_sus[i] && minuendo[i] == 1 && array_sus[i] == 1){
            lleva = 1;
            resultado_arreglo[i] = 0;
        }
        if(i == 0 && lleva == 1){
            resultado_arreglo.unshift(1);
        }
    };

    var resultado_suma_binario = '';
    for(var a = 0; a < resultado_arreglo.length; a++){
        resultado_suma_binario+=resultado_arreglo[a];
    }
    
    document.getElementById('sumaBin').value = resultado_suma_binario;

}