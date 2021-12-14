tab = {user:[]}

function cadastrar() {
    var nomeUser =  document.getElementById("name").value
    var senhaUser = document.getElementById("password").value
    usr = { nome:nomeUser , senha:senhaUser}
    tab.user.push(usr)
    localStorage.setItem("tabUser",JSON.stringify(tab))
}

function listar() {
    usr = JSON.parse(localStorage.getItem("tabUser"))
    if (usr == null)
        document.write(`Não existe usuarios cadastrados`)
    
    document.write("<table border=1><th>Nome</th><th>Senha</th>")
    usr.user.map(
        (element) => {document.write(
            `<tr>
                <td>
                    ${element.nome}
                </td>
                <td>
                    ${element.senha}
                </td>
                </th>`)
            })
    document.write("<table>")
}