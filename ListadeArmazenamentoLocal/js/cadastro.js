var listaUsuarios = []
if (localStorage.getItem("usuario") == null)
    localStorage.setItem("usuario", [])
function salvar() {
    email = document.getElementById("email").value;
    password = document.getElementById("senha").value;
    if (validarUsuario(email, password))
        if (password.length > 4) {
            if (localStorage.getItem("usuario").split(",")[0] == email) {
                alert("Usuario já existente. Tente outro.")
            } else {
                localStorage.setItem("usuario", [email, password])
                alert("Cadastrado com sucesso!!")
                limparCampos()
            }
        } else {
            alert("Senha inválida. Informe uma senha contendo pelo menos 5 caracteres.")
        }

}

function limparCampos() {
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
}


function validarUsuario(a, e) {
    return a != "" && e != "" ? true : alert("Email ou Senha vazios")
}