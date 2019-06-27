var numeroJuego = 0;
var intentos = 10;
var numran = parseInt(Math.round(Math.random() * 100)); //De aqui sale el numero random
//Boton con el que se inica el Juego
var getJugar = function(){
  numeroJuego = parseInt(document.getElementById('txtNumJuego').value);
  if(numeroJuego != numran){
    if (numeroJuego < numran) {
      document.getElementById("lblMensaje").innerHTML = "Es mas bajo que el numero aleatorio";
    }
    else {
      document.getElementById("lblMensaje").innerHTML = "Es mas alto que el numero aleatorio";
    }
    intentos--;
    document.getElementById("lblIntentos").innerHTML = "Numero de intentos: " + intentos;
  }
  else {
    document.getElementById("lblMensaje").innerHTML = "HAZ GANADO";
  }
  if (intentos == 0) {
    document.getElementById("lblMensaje").innerHTML = "HAZ PERDIDO";
    document.getElementById("btnJugar").disabled = true;
  }
}
//Boton para Reiniciar el juego
var getReiniciar = function(){
  intentos = 10;
  numran = parseInt(Math.round(Math.random() * 100));
  document.getElementById("btnJugar").disabled = false;
  document.getElementById("lblMensaje").innerHTML = "¡Buena Suerte!";
  document.getElementById("lblIntentos").innerHTML = "Numero de intentos: " + intentos;

}
