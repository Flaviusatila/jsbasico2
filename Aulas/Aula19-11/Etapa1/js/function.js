function cadastrar() {
    var nomeUser =  document.getElementById("nome").value
    var senhaUser = document.getElementById("senha").value
    usr = { nome:nomeUser , senha:senhaUser}
    localStorage.setItem("dadosUser",JSON.stringify(usr))
}

function listar() {
    usr = JSON.parse(localStorage.getItem("tabUser"))
    if (usr == null)
        document.write(`Não existe usuarios cadastrados`)
    document.write(`Usuario: ${usr.nome} e Senha: ${usr.senha}`)

}