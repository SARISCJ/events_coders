
var element = document.querySelector(".form-signup");
  element.addEventListener("click", function(event) {
  event.preventDefault();
  validateForm();
  });

  function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
      var span = document.createElement("span");
      var referencia= document.getElementById("nombre");
      var padre=referencia.parentNode;
      padre.insertBefore(span,referencia);
      var texto = document.createTextNode("Debe ingresar su nombre");
      span.appendChild(texto);
      return false;
    } if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
      var span = document.createElement("span");
      var referencia= document.getElementById("email");
      var padre=referencia.parentNode;
      padre.insertBefore(span,referencia);
      var texto = document.createTextNode("Verifique su email");
      span.appendChild(texto);
      return false;
    } if(password.length < 6){
      var referencia= document.getElementById("password");
      var padre=referencia.parentNode;
      padre.insertBefore(span,referencia);
      var texto = document.createTextNode("Ingresa una contraseña válida");
      span.appendChild(texto);
      return false;
     }
     return true;
  } 
