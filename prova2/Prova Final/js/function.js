function montarPagina(sexo) {
    lista = JSON.parse(localStorage.getItem("cadastro"))
    listaMasculinos = lista.user.filter((element) => element.sexo == sexo)

    sexo == "Masculino" ? imagem = "imagens/stickMan.png" : imagem = "imagens/stickWoman.png"
    setTimeout(listaMasculinos.forEach(element => {
        montaBonecos( imagem, element)
    }),100);

}

function montaBonecos(imagem, listaFiltrada) {
    texto = listaFiltrada.nome + " [" + listaFiltrada.idade + " anos]"

    parag = document.createElement("p")
    parag.innerHTML = texto

    img = document.createElement("img")
    img.setAttribute("src", imagem)
    img.setAttribute("name", texto)

    div = document.createElement("div")
    div.setAttribute("class", "boxInterna")
    div.appendChild(img)
    div.appendChild(parag)


    document.getElementById("box").appendChild(div)
}