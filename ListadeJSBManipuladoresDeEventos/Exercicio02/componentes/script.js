function teste() {
    document.write("<h1>Em construção</h1>")
}

votos = [0, 0, 0, 0]
maisVotado = votos[0]
function urnaEletronica(candidato) {

    validarEleitor()
    switch (candidato) {
        case "candidato1": {
            votos[0] += 1
            document.getElementById("numeroVotos1").innerHTML = votos[0]
            break;
        }
        case "candidato2": {
            votos[1] += 1
            document.getElementById("numeroVotos2").innerHTML = votos[1]
            break;
        }
        case "candidato3": {
            votos[2] += 1
            document.getElementById("numeroVotos3").innerHTML = votos[2]
            break;
        }
        default: {
            votos[3] += 1
            document.getElementById("numeroVotos4").innerHTML = votos[3]
            break;
        }
    }
    corDeFundoMaisVotado()
    alert("Obrigado Pelo Seu voto")
}

function corDeFundoMaisVotado() {
    for (i = 0; i < votos.length; i++) {
        if (maisVotado <= votos[i]) {
            document.getElementById(`candidato${i + 1}`).style = "background-color: pink";
            maisVotado = votos[i]
        }
        for (j = 0; j < votos.length; j++) {
            if (maisVotado != votos[j]) {
                document.getElementById(`candidato${j + 1}`).style = "";
            }
        }
    }

}

function validarEleitor() {
    cpf = prompt("Digite seu cpf")
        if (localStorage.getItem(cpf) == null) {
            localStorage.setItem(cpf, "")
        } else {
            alert("Você Caro Eleitor, já votou!!!")
            validarEleitor()
        }
    
}