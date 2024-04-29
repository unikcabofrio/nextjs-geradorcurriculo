const dbArray = [{
            "primeiroNome": null,
            "sobrenome":null,
            "email":null,
            "cep":null,
            "endereco":null,
            "bairro":null,
            "cidade":null,
            "estado":null,
            "telefone":null,
            "whatsapp":null,
            "dataNasc":null,
            "idade":null,
            "cnh":null,
            "estadoCivil":null,
            "sexo":null,
            "fotoPerfil":null,
            "objetivo":null,
            "educacao": [
                {
                    "nome":null,
                    "grau":null,
                    "mesI":null,
                    "anoI":null,
                    "mesT":null,
                    "anoT":null,
                    "cidade":null
                }
            ],
            "expTrabalho": [
                {
                    "nome":null,
                    "cargo":null,
                    "desc":null,
                    "mesI":null,
                    "anoI":null,
                    "mesT":null,
                    "anoT":null,
                    "cidade":null
                }
            ],
            "habilidade": [
                {
                    "nome":null,
                    "nivel": null
                }
            ]
    }]

export function Select(keyFilter){
    return dbArray.map(element=>{
        if(keyFilter){
            return element[keyFilter]
        }
        return element
    })
}

export function Insert(value,key){
    dbArray[0][key] = value
}

export function Remove(key){
    delete dbArray[0][key]
}