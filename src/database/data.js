const dbArray = [{
        "primeiroNome": "Rayan",
        "sobrenome": "Rodrigues Dutra",
        "email": "contato.unikcabofrio@gmail.com",
        "cep": "28920-239",
        "endereco": "Rua Apolinario Nascimento, 38",
        "bairro": "Jardim Esperança",
        "cidade": "Cabo Frio",
        "estado": "RJ",
        "telefone": "22992846675",
        "whatsapp": "22992846675",
        "dataNasc": "2000-01-22",
        "idade": 24,
        "cnh": "3",
        "estadoCivil":"0",
        "sexo":"0",
        "fotoPerfil": null,
        "objetivo": "Busco uma oportunidade desafiadora em uma empresa inovadora, onde possa aplicar minhas habilidades em [área de atuação] para contribuir com o crescimento da equipe e alcançar metas ambiciosas.",
        "educacao": [
            {
                "nome": "primeira escola",
                "grau": "0",
                "mesI": "01",
                "anoI": "2015",
                "mesT": "01",
                "anoT": "2018",
                "cidade":"Cabo Frio, RJ"
            },
            {
                "nome": "segunda escola",
                "grau": "1",
                "mesI": "01",
                "anoI": "2019",
                "mesT": "",
                "anoT": "",
                "cidade":"Cabo Frio, RJ"
            }
        ],
        "expTrabalho": [
            {
                "nome": "Nome da Empresa",
                "cargo": "Nome do Cargo que atuava",
                "desc": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
                "mesI": "01",
                "anoI": "2015",
                "mesT": "01",
                "anoT": "2018",
                "cidade":"Cabo Frio, RJ"
            },
            {
                "nome": "Nome da Empresa",
                "cargo": "Nome do Cargo que atuava",
                "desc": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
                "mesI": "01",
                "anoI": "2015",
                "mesT": null,
                "anoT": "",
                "cidade":"Cabo Frio, RJ"
            }
        ],
        "habilidade": [
            {
                "nome": "JavaScript",
                "nivel": "2"
            },
            {
                "nome": "HTML",
                "nivel": "2"
            },
            {
                "nome": "CSS",
                "nivel": "2"
            },
            {
                "nome": "Inglês",
                "nivel": "0"
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