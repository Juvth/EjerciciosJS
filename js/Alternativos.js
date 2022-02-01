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
    if(nota < 0){
        alert("La nota debe ser mayor a cero");
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
