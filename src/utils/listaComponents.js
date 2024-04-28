export const listaContato = [
    {
        double:[
            { titulo:"Primeiro Nome", name:"primeiroNome", tipo:"text"},
            { titulo:"Sobrenome", name:"sobrenome", tipo:"text"}
        ],
       
    },
    { titulo:"E-mail", name:"email", tipo:"email"},
    {
        double:[
            { titulo:"Contato", name:"telefone", tipo:"text"},
            { titulo:"WhatsApp", name:"whatsapp", tipo:"text"}
        ]
    },
    { borda:true},
    {
        double:[
            { titulo:"CEP", name:"cep", tipo:"text"}
        ]
    },
    { titulo:"Endereço", name:"endereco", tipo:"email"},
    {
        double:[
            { titulo:"Bairro", name:"bairro", tipo:"text"},
            { titulo:"Cidade", name:"cidade", tipo:"text"},
        ]
    },
    {
        double:[
            { titulo:"Estado", name:"estado", tipo:"text"},
        ]
    },
    { borda:true},
    {
        double:[
            { titulo:"Data Nascimento", name:"dataNasc", tipo:"data"},
            { titulo:"Habilitação", name:"cnh", tipo:"select", options:['Não Tenho CNH', 'ACC', 'A', 'B', 'AB', 'C', 'AC', 'D', 'AD', 'E', 'AE']},
        ]
    },
    {
        double:[
            { titulo:"Sexo", name:"sexo", tipo:"select", options:['Masculino', 'Femenino', 'Prefiro não informar']},
            { titulo:"Estado Civil", name:"estadoCivil", tipo:"select", options:[ 'Solteiro(a)', 'Casado(a)', 'Viúvo(a)', 'Divorciado(a)', 'Separado(a)']},
        ]
    },
    { borda:true},
    { imagem:{titulo:"Foto 3x4", name:"fotoPerfil"}},
]

export const listaObjetivo = [
    {
        textArea:[
            { titulo:"Objetivo Profissonal", name:"objetivo"},
        ]
    },
    { borda:true},
]

let dataAtual = new Date();
export const ListaEducacao = [
    { nome: "", cargo: "", anoI: dataAtual.getFullYear(),mesI:dataAtual.getMonth(),anoT:"",mesT:"",cidade:"" },
    { listaGrau:['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior', ' Ensino Superior Avançado'] }
]

export const ListaExperiencia = [
    { nome: "", grau: "",desc:"", anoI: dataAtual.getFullYear(),mesI:dataAtual.getMonth(),anoT:"",mesT:"",cidade:"" }
]

export const ListaHabilidades = [
    { nome: "", nivel: ""},
    {listaNivel:['Básico','Intermediário','Avançado']}
]