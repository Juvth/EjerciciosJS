function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras =
    "ABECDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzáéíóú1234567890-_";
  especiales = [8, 32];
  tecla_especial = false;
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    alert("Ingresar datos correspondientes");
    return false;
  }
}

function soloNum(ev) {
  if (window.event) {
    keynum = ev.keyCode;
  } else {
    keynum = ev.which;
  }
  if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13) {
    return true;
  } else {
    alert("Ingresar solo números");
    return false;
  }
}

/*function validarCedula() {
  var cad = document.getElementById("ced").value.trim();
  var total = 0;
  var longitud = cad.length;
  var longcheck = longitud - 1;

  if (cad !== "" && longitud === 10){
    for(i = 0; i < longcheck; i++){
      if (i%2 === 0) {
        var aux = cad.charAt(i) * 2;
        if (aux > 9) aux -= 9;
        total += aux;
      } else {
        total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
      }
    }

    total = total % 10 ? 10 - total % 10 : 0;

    if (cad.charAt(longitud-1) == total) {
      document.getElementById("salida").innerHTML = ("Cedula Válida");
    }else{
      document.getElementById("salida").innerHTML = ("Cedula Inválida");
    }
  }
}*/


function soloNum10(ev) {
  if (window.event) {
    keynum = ev.keyCode;
  } else {
    keynum = ev.which;
  }
  if ((keynum > 47 && keynum < 50) || keynum == 8 || keynum == 13) {
    return true;
  } else {
    alert("Solo se permite valores de 0 y 1");
    return false;
  }
}

(function ($) {
  //Añade la funcionalidad de maxlength a los inputs number
  methods = {
    /*
     * addMax will take the applied element and add a javascript behavior
     * that will set the max length
     */
    addMax: function () {
      // set variables
      var maxlAttr = $(this).attr("maxlength"),
        maxAttR = $(this).attr("max"),
        x = 0,
        max = "";

      // If the element has maxlength apply the code.
      if (typeof maxlAttr !== typeof undefined && maxlAttr !== false) {
        // create a max equivelant
        if (typeof maxlAttr !== typeof undefined && maxlAttr !== false) {
          while (x < maxlAttr) {
            max += "9";
            x++;
          }
          maxAttR = max;
        }

        // Permissible Keys that can be used while the input has reached maxlength
        var keys = [
          8, // backspace
          9, // tab
          13, // enter
          46, // delete
          37,
          39,
          38,
          40, // arrow keys<^>v
        ];

        // Apply changes to element
        $(this)
          .attr("max", maxAttR) //add existing max or new max
          .keydown(function (event) {
            // restrict key press on length reached unless key being used is in keys array or there is highlighted text
            if (
              $(this).val().length == maxlAttr &&
              $.inArray(event.which, keys) == -1 &&
              methods.isTextSelected() == false
            )
              return false;
          });
      }
    },
    /*
     * isTextSelected returns true if there is a selection on the page.
     * This is so that if the user selects text and then presses a number
     * it will behave as normal by replacing the selection with the value
     * of the key pressed.
     */
    isTextSelected: function () {
      // set text variable
      text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
      }
      return text.length > 0;
    },
  };

  $.maxlengthNumber = function () {
    // Get all number inputs that have maxlength
    methods.addMax.call($("input[type=number]"));
  };
})($);

// Apply it:
$.maxlengthNumber();
