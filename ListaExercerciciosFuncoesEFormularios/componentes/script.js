function validarSenha(){
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value
    confirmarSenha = document.getElementById("confirmarSenha").value

    if(login != ""){
        if (confirmarSenha == senha){
            alert("Todos os campos foram digitados corretamente")
        }else{
            alert("Os campos senha e confimar senha estão diferentes")
            document.getElementById(senha).value = ""
            document.getElementById(confirmarSenha).value = ""
        }
        
    }else
        alert("Login digitado vazio!!")

}