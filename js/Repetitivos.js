/*-----------------EJERCICIO 1-----------------*/
var contgas = 0;
var precio = 1.25;
var recaudacion = 0;
var pago = 0;
var mayor = 0;

function mayorDespacho(Despacho) {
  if (Despacho >= mayor) {
    mayor = Despacho;
  }
  return mayor;
}

function alertdatosvacios(list_elements) {
  var bandera = false;

  for (var i = 0; i < list_elements.length; i++) {
    if (list_elements[i] == "" || list_elements[i] == undefined) {
      bandera = true;
      i = list_elements.length++;
    }
  }

  if (bandera == true) {
    alert("Por favor, llene los campos.");
  }

  return bandera;
}

function gasolinera() {
  var Disponible = (Disponible = document.formulario1.cantGasolina.value);
  var Despacho = (Despacho = document.formulario1.cantDespacho.value);
  Despacho = Number(Despacho);
  Disponible = Number(Disponible);

  var list = [];
  list.push(Disponible);
  list.push(Despacho);

  if (Despacho > Disponible) {
    alert("Gasolina Insuficiente.");
  } else {
    if (!alertdatosvacios(list)) {
      if (Disponible >= 0) {
        Disponible = Disponible - Despacho;
        contgas += 1;
        pago = precio * Despacho;
        recaudacion = recaudacion + pago;
        document.getElementById("vehiculos").value = contgas;
        document.getElementById("recaudacion").value = recaudacion;
        document.getElementById("mayorDespacho").value =
          mayorDespacho(Despacho);
        document.getElementById("cantGasolina").value = Disponible;
      }
    }
  }
}
/*-----------------EJERCICIO 2-----------------*/
function invertirDigitos(numero) {
  var invertido = 0;
  var resto = numero;
  do {
    invertido = invertido * 10 + (resto % 10);
    resto = Math.floor(resto / 10);
  } while (resto > 0);
  return invertido;
}

function propiedadExtraña() {
  var texto = "";
  var contador = 1;
  var inversos = [];
  for (let i = 10; i < 100; i++) {
    for (let j = 10; j < 100; j++) {
      inverNum1 = invertirDigitos(i);
      inverNum2 = invertirDigitos(j);
      producto1 = i * j;
      producto2 = inverNum1 * inverNum2;
      newArray = [];
      var obj = {
        id: contador,
        numero1: i,
        numero2: j,
        inverso1: inverNum1,
        inverso2: inverNum2,
      };
      if (
        producto1 == producto2 &&
        i != j &&
        i != inverNum1 &&
        i != inverNum2
      ) {
        inversos.push(obj);
        inversos.forEach(function (item, index) {
          if (inversos[index].inverso1 == i && inversos[index].inverso2 == j) {
            inversos.splice(index, 1);
          }
        });
        contador++;
      }
    }
  }

  inversos.forEach(function (item, index) {
    texto += inversos[index].numero1;
    texto += "X";
    texto += inversos[index].numero2;
    texto += "=";
    texto += inversos[index].inverso1;
    texto += "X";
    texto += inversos[index].inverso2;
    texto += "\n";
  });
  document.getElementById("numerosR").innerHTML = texto;
}

/*-----------------EJERCICIO 3-----------------*/
function naturales() {
  var numeros = "";

  for (var numero = 1200; numero <= 2000; numero++) {
    var cant_divisores = 2;

    if(numero%5 == 0 && numero%7 == 0){
      cant_divisores = 4;
    }
    
    if (cant_divisores == 4) {
      numeros += numero + ",";
    }
  }

  document.getElementById("naturales").innerText = numeros;
}

/*-----------------EJERCICIO 4-----------------*/
function Pascal() {
  var n = (n = document.formulario4.fila.value);
  var A = new Array(n);

  for (var i = 1; i <= n; i++) {
    A[i] = new Array(n);
  }

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      A[i][j] = combina(i - 1, j - 1);
    }
  }

  var texto = "";
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      texto += A[i][j];
      texto += " ";
    }
    texto += "\n";
  }
  document.getElementById("Pascal").innerHTML = texto;
}

function combina(p, q) {
  return Math.round(fact(p) / (fact(q) * fact(p - q)));
}

function fact(h) {
  var f = 1;
  if (h !== 0) {
    for (k = 1; k <= h; k++) {
      f *= k;
    }
  }
  return f;
}
