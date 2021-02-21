/////VARIABLES/////
var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
var botonlimpiar = document.getElementById('botonBorrar');
var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext('2d');

/////EVENTOS/////
boton.addEventListener('click', dibujoPorclick );
botonlimpiar.addEventListener('click', borrarLienzo);


/////FUNCIONES////
function borrarLienzo()
{
  d.width=d.width
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorclick()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var yi, xf;
  var xi, yf;
  var colorvariable1 = document.getElementById('botonColor1').value;
  var colorvariable2 = document.getElementById('botonColor2').value;
  var colorvariable3 = document.getElementById('botonColor3').value;
  var colorvariable4 = document.getElementById('botonColor4').value;
  var colorvariable5 = document.getElementById('botonColor5').value;
  var colorvariable6 = document.getElementById('botonColor6').value;
  // var colorvariable1 = 'red'
  // var colorvariable2 = 'lime'
  // var colorvariable3 = 'cyan'
  // var colorvariable4 = 'purple'

  for(l = 0; l < lineas; l++) // while(l < lineas)
  {
    yi = espacio * l;
    xf = ancho - espacio * (l + 1);
    dibujarLinea(colorvariable1, ancho, yi, xf, ancho);

    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorvariable2, 0, yi, xf, ancho);

    yi = ancho - espacio * l;
    xf = espacio * l;
    dibujarLinea(colorvariable3, 0, yi, xf, 0);

    xi = ancho - espacio * (l + 1);
    yf = ancho - espacio * l;
    dibujarLinea(colorvariable4, xi, 0, ancho, yf);

    /////ESTRELLA/////
    yi=(espacio/2)*l;
    xf=(ancho/2)-(espacio/2)*(l+1);
    dibujarLinea(colorvariable5, (ancho/2), yi, xf, (ancho/2));

    xf=(espacio/2)*l;
    yi=(ancho/2)+(espacio/2)*(l+1)
    dibujarLinea(colorvariable5, (ancho/2), xf, yi, (ancho/2));

    xi=(ancho/2)+(espacio/2)*(l+1);
    yf=(ancho)-(espacio/2)*l;
    dibujarLinea(colorvariable5, xi, (ancho/2), (ancho/2), yf);

    xi=(ancho/2)-(espacio/2)*(l+1);
    yf=ancho-(espacio/2)*l;
    dibujarLinea(colorvariable5, xi, (ancho/2), (ancho/2), yf);
    console.log('linea' + 1);
    // l = l + 1;
  }
    dibujarLinea(colorvariable1, 1, 1, 1, 299);
    dibujarLinea(colorvariable2, 1, 299, 299, 299);
    dibujarLinea(colorvariable3, 299, 299, 299, 1);
    dibujarLinea(colorvariable4, 299, 1, 1, 1);
    dibujarLinea(colorvariable6,(ancho/2),0,(ancho/2),ancho);
    dibujarLinea(colorvariable6,0,(ancho/2),ancho,(ancho/2));

}