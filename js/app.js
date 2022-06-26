document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("form").addEventListener("submit",validar);
});

function validar(evento){
    evento.preventDefault();
    var user = document.getElementById("user-field").value;
    if(!user.includes("@")){
        alert("Error: el user no contiene @");
        return;
    }
    var password = document.getElementById("password-field").value;
    if(password == ""){
        alert("Error: el password no puede estar vacio");
        return;
    }
    this.submit();
}
