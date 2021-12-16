if (localStorage.getItem("aluno") == null)
    localStorage.setItem("aluno", [])
var alunos = []
var flag = false;
function salvar() {
    nomeAluno = document.getElementById("nome").value;
    ra = document.getElementById("ra").value;
    nota1 = document.getElementById("notaUm").value;
    nota2 = document.getElementById("notaDois").value;
    if (validarUsuario(nomeAluno, ra, nota1, nota2)) {
        var aluno = {
            nomeAluno: nomeAluno,
            ra: ra,
            nota1: nota1,
            nota2: nota2,
            total: parseInt(nota1)+parseInt(nota2),
            situacao: parseInt(nota1)+parseInt(nota2) >59 ? "Aprovado":"Reprovado"
        }
        alunos.push(JSON.stringify(aluno) + "*")
        localStorage.setItem("aluno", alunos)
        flag=true
        alert("Cadastrado com sucesso!!")
        limparCampos()
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("ra").value = "";
    document.getElementById("notaUm").value = "";
    document.getElementById("notaDois").value = "";
}


function validarUsuario(a, b, c, d) {
    return a != "" && b != "" && c != "" && d != ""
        ? true
        : alert("Algum(s) campo(s) vazio(s)")
}

function montarLista() {
    //    var aluno = {nomeAluno, ra, nota1, nota2, total, situacao}
    var alunosStorage = { aluno: [] }
    var table = document.getElementById("tabela")
    table.hidden = false
    alunosStorage = localStorage.getItem("aluno").concat(",").split("*,")
    if(flag)
    alunosStorage.forEach(element => {
        linha = document.createElement("tr")
        if (element != "") {
            obj = JSON.parse(element);
            coluna1 = document.createElement("td")
            coluna1.innerHTML = obj.nomeAluno
            linha.appendChild(coluna1)

            coluna2 = document.createElement("td")
            coluna2.innerHTML = obj.ra
            linha.appendChild(coluna2)

            coluna3 = document.createElement("td")
            coluna3.innerHTML = obj.nota1
            linha.appendChild(coluna3)

            coluna4 = document.createElement("td")
            coluna4.innerHTML = obj.nota2
            linha.appendChild(coluna4)

            coluna5 = document.createElement("td")
            coluna5.innerHTML = obj.total
            linha.appendChild(coluna5)

            coluna6 = document.createElement("td")
            coluna6.innerHTML = obj.situacao
            linha.appendChild(coluna6)
        }
        table.appendChild(linha)
    });
    flag =false

    console.log(alunosStorage);
}