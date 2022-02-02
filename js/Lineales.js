/*-----------------EJERCICIO 1-----------------*/
function getLados(l1, l2, l3) {
  l1 = Number(l1);
  l2 = Number(l2);
  l3 = Number(l3);
  var semiperimetro = (l1 + l2 + l3) / 2;
  var area = Math.sqrt(
    semiperimetro *
      (semiperimetro - l1) *
      (semiperimetro - l2) *
      (semiperimetro - l3)
  );

  document.getElementById("respuesta").value = area.toFixed(2);
}

function validarLados(l1, l2, l3) {
  if (l1 < 1 || l2 < 1 || l3 < 0) {
    alert("Los números deben ser mayores a cero");
  } else {
    getLados(l1, l2, l3);
  }
}

function validarCampos() {
  var a = document.formulario1.lado1.value;
  var b = document.formulario1.lado2.value;
  var c = document.formulario1.lado3.value;

  if (a == null || a == "" || b == null || b == "" || c == null || c == "") {
    alert("Rellena los campos");
  } else {
    validarLados(a, b, c);
  }
}

/*-----------------EJERCICIO 2-----------------*/
function validarCampos2() {
  var a = document.formulario2.numero.value;

  if (a == null || a == "") {
    alert("Rellena los campos");
  } else {
    validarNumero(a);
  }
}

function validarNumero(num) {
  if (num < 1) {
    alert("Los números deben ser mayores a cero");
  } else {
    getCalculos(num);
  }
}

function getCalculos(num) {
  num = Number(num);

  var antecesor = num - 1;
  var sucesor = num + 1;
  var partentera = Math.trunc(Math.sqrt(num));
  var cifras = Math.trunc(Math.log10(num)) + 1;

  document.getElementById("antecesor").value = antecesor;
  document.getElementById("sucesor").value = sucesor;
  document.getElementById("partentera").value = partentera;
  document.getElementById("cifras").value = cifras;
}

/*-----------------EJERCICIO 3-----------------*/
function getNumber(a, b, c, d, e) {
  var num =
    a.substring(0, 1) +
    b.substring(1, 2) +
    c.substring(2, 3) +
    d.substring(3, 4) +
    e.substring(4, 5);

  document.getElementById("respuesta2").value = num;
}

function validateNumber(a, b, c, d, e) {
  if (
    a <= 9999 ||
    b <= 9999 ||
    c <= 9999 ||
    d <= 9999 ||
    e <= 9999 ||
    a > 99999 ||
    b > 99999 ||
    c > 99999 ||
    d > 99999 ||
    e > 99999
  ) {
    alert("Los números deben tener 5 dígitos");
  } else {
    getNumber(a, b, c, d, e);
  }
}

function validateandgetNumber() {
  var a = document.formulario3.a.value;
  var b = document.formulario3.b.value;
  var c = document.formulario3.c.value;
  var d = document.formulario3.d.value;
  var e = document.formulario3.e.value;
  if (
    a == null ||
    a == "" ||
    b == null ||
    b == "" ||
    c == null ||
    c == "" ||
    d == null ||
    d == "" ||
    e == null ||
    e == ""
  ) {
    alert("Rellena los 5 campos");
  } else {
    validateNumber(a, b, c, d, e);
  }
}

let a = document.getElementById("a");

a.addEventListener("input", function () {
  if (this.value.length > 5) this.value = this.value.slice(0, 5);
});

let b = document.getElementById("b");

b.addEventListener("input", function () {
  if (this.value.length > 5) this.value = this.value.slice(0, 5);
});

let c = document.getElementById("c");

c.addEventListener("input", function () {
  if (this.value.length > 5) this.value = this.value.slice(0, 5);
});

let d = document.getElementById("d");

d.addEventListener("input", function () {
  if (this.value.length > 5) this.value = this.value.slice(0, 5);
});

let e = document.getElementById("e");

e.addEventListener("input", function () {
  if (this.value.length > 5) this.value = this.value.slice(0, 5);
});

a.addEventListener("keypress", function (e) {
  comprueba(e.key, "a");
});

b.addEventListener("keypress", function (e) {
  comprueba(e.key, "b");
});

c.addEventListener("keypress", function (e) {
  comprueba(e.key, "c");
});

d.addEventListener("keypress", function (e) {
  comprueba(e.key, "d");
});

e.addEventListener("keypress", function (e) {
  comprueba(e.key, "e");
});

function comprueba(valor, id) {
  if (valor == "-") {
    document.getElementById(id).value = "";
    Swal.fire(
      "Numero no válido",
      "Solo se adminiten numeros positivos",
      "warning"
    );
  }
}
