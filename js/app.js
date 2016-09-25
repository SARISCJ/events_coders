
function validar() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var expresion = /\w+@\w+\.+[a-z]/;

  if (nombre === "") {
    alert("El campo nombre esta vacia");
    return false;
  }else if (email === ""){
    alert("El campo email esta vacia");
    return false;
  }else if (email.length>30){
    alert("Email es muy largo")
    return false;
  }else if(password.length<6){
    alert("La contraseña solo deben tener máximo 6 caracteres");
    return false;
  }else if(!expresion.test(email)){
    alert("Email no es válido");
    return false;
  }
}

