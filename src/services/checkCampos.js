import { Select } from "@/database/data";

let result = false

function AnaliseCampo(campo) {
    const check = Select(campo)[0]
    if (!check) {
        const elemet = document.getElementById(campo)
        elemet.focus()
        return false
    }
    return true
}

export default function CheckCampos(index) {
    
    console.log(index)
    switch (index) {
        case 0:
            result = AnaliseCampo('primeiroNome')
            if (result) result = AnaliseCampo('sobrenome')
            if (result) result = AnaliseCampo('email')
            if (result) result = AnaliseCampo('telefone')
            if (result) result = AnaliseCampo('whatsapp')
            if (result) result = AnaliseCampo('endereco')
            if (result) result = AnaliseCampo('cidade')
            // if(result) result = AnaliseCampo('dataNasc')
            break;

        case 1:
            result = AnaliseCampo('objetivo')
            break;

        case 2:
            result = result
            break;

        case 3:
            result = result
            break;

        case 4:
            result = result
            break;
    }
    return result
}