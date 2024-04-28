import Imagem from '@/components/image';
import Icone from '@/components/icone';
import { Select } from "@/database/data";
import * as Lista from '@/utils/listaComponents'

import Logo from "@/assets/perfil.png"

export default function ViewCurriculo() {

  function AnaliseData(mes, ano,text) {
    return mes ? `${mes}/${ano}` : text
  }

  function DataNastimento(data){
    const text = data.split('-')
    return `${text[2]}/${text[1]}/${text[0]}`
  }

  return (
    <div className="viewer notScroll full">

      <div id="paperPDF" className='paper'>

        <div className='left'>

          <Imagem src={Logo} alt={'Foto Perfil'} />

          <div className='info'>
            <h5>Objetivo Profissional</h5>
            <p>{Select('objetivo')[0]}</p>
          </div>

          <div className='info'>
            <h5>Habilidades</h5>
            {Select('habilidade')[0].map((item, index) => { return (<p key={index}><Icone nome={'check_circle'} /> {item.nome} | {Lista.ListaHabilidades[1].listaNivel[item.nivel]}</p>) })}
          </div>

        </div>

        <div className='right'>

          <h5 className='firstName'>{Select('primeiroNome')[0]}</h5>
          <h5 className='lastName'>{Select('sobrenome')[0]}</h5>

          <div className='infoHeader'>
            <p><strong><Icone nome={'mail'} /></strong>{Select('email')[0]}</p>
            <p><strong><Icone nome={'call'} /></strong>{Select('telefone')[0]} | {Select('whatsapp')[0]}</p>
            <p><strong><Icone nome={'calendar_month'} /></strong>{DataNastimento(Select('dataNasc')[0])}, Tenho {Select('idade')[0]} Anos</p>
            <p><strong><Icone nome={'pin_drop'} /></strong>{Select('endereco')[0]}, {Select('bairro')[0]}, {Select('cidade')[0]}/{Select('estado')[0]}, CEP {Select('cep')[0]}</p>

            <div>
              <p><strong>Habilitação :</strong> {Lista.listaContato[9].double[1].options[Select('cnh')[0]]} </p>
              <p><strong>Sexo :</strong> {Lista.listaContato[10].double[0].options[Select('sexo')[0]]} </p>
              <p><strong>Estado Civil :</strong> {Lista.listaContato[10].double[1].options[Select('estadoCivil')[0]]} </p>
            </div>

          </div>

          <div className='info'>
            <h5>Experiencia Profissional</h5>
            {
              Select('expTrabalho')[0].map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item.mesI}/{item.anoI} - {AnaliseData(item.mesT, item.anoT,"Atual")}</p>
                    <p><strong>{item.cargo}</strong> </p>
                    <p><strong>{item.nome}</strong> | {item.cidade}</p>
                    <p className='desc'>{item.desc}</p>
                  </div>
                )
              })
            }
          </div>

          <div className='info'>
            <h5>Formação Educacional</h5>
            {
              Select('educacao')[0].map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item.mesI}/{item.anoI} - {AnaliseData(item.mesT, item.anoT,"Estudando")}</p>
                    <p><strong>{item.nome}</strong> | {item.cidade}</p>
                    <p>{Lista.ListaEducacao[1].listaGrau[item.grau]}</p>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>

    </div>
  );
}
