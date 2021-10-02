valorSelect =""
function validarEntradaValores() {
    result = ""
    vet_inputs = document.getElementsByTagName("input");
    for (i = 0; i < vet_inputs.length; i++) {
        typo = vet_inputs[i].type
        // if ((vet_inputs[i].type == "text") && (vet_inputs[i].value == "")) {
        //     alert(`${vet_inputs[i].name} está vazio!!!`);
        //     break;
        // }

        switch (typo) {
            case "text": {
                if (vet_inputs[i].value == "")
                    result = vet_inputs[i].name
                break;
            }
            case "email": {
                if (vet_inputs[i].value == "")
                    result = vet_inputs[i].name
                break;
            }
            case "tel": {
                if (vet_inputs[i].value == "")
                    result = vet_inputs[i].name
                break;
            }
            case "radio": {
                h = i+1
                if ((vet_inputs[i].value == "sim"))
                    if((!vet_inputs[i].checked) && (!vet_inputs[h].checked))
                        result = vet_inputs[i].name
                break;
            }
            default:
                result = outrosTiposDeInputs();
        }
        if (result != "") {
            alert("O Campo " + result + " esta com valor invalidos!!")
            break
        }
    }
}

function outrosTiposDeInputs() {
    result = ""
    // vet_option = document.getElementsByTagName("option")
    // select = document.querySelector('select');
    // for (k = 0; k < select.length; k++) {
    //     if (select.children[k].value == "")
    //         result = "Estado"
    //     break;
    // }
    vet_textArea = document.getElementsByTagName("textarea")

    if (valorSelect == "") {
        result = "Estado"
        return result
    }

    for (j = 0; j < vet_textArea.length; j++) {
        if (vet_textArea[j].value == "")
            result = vet_textArea[j].name
        break;
    }

    return result
}

function pegaValor(texto) {
    valorSelect = texto
    return valorSelect
}