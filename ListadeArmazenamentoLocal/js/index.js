function logar() {
    dados = localStorage.getItem("usuario").split(",")
    usr = document.getElementById("email").value;
    password = document.getElementById("senha").value;
    if (validarUsuario(usr, password))
        if (dados[0] == usr) {
            if (dados[1] == password) {
                window.location.href = "./pag01.html";
            } else {
                alert("Usuário existente, porém senha inválida.")
            }
        } else {
            alert("Usuário inexistente. Tente outro usuário.")
        }
}


function validarUsuario(a, e) {
    return a != "" && e != "" ? true : alert("Email ou Senha vazios")
}