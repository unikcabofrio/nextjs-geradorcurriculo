'use client'

import { useEffect, useState } from "react";

import BarraMenuEsquerdo from "@/view/barraMenuEsquerdo";
import BarraTopo from "@/view/barraTopo";
import BarraBtnPagina from "@/view/barraBtnPagina";
import BoxViewe from "@/view/boxViewe";

import FormContato from "@/view/forms/contato";
import FormObjetivo from "@/view/forms/objetivo";
import FormEducação from "@/view/forms/educacao";
import FormExperiencia from "@/view/forms/experiencia";
import FormHabilidade from "@/view/forms/habilidades";

import CheckCampos from "@/services/checkCampos";

import BoxTopAlert from "@/components/alert/boxTop";


export default function Home() {

  const [alertVisivel,setAlertVivivel] = useState(false)
  const [indexAtivo, setIndexAtivo] = useState(0)
  const [listaMenu] = useState([
    {
      titulo: "Informações de Contato",
      icone: "person",
      page: <FormContato/>
    },
    {
      titulo: "Objetivo Profissional",
      icone: "emoji_objects",
      page: <FormObjetivo/>
    },
    {
      titulo: "Educação",
      icone: "school",
      page: <FormEducação/>
    },
    {
      titulo: "Experiência Profissional",
      icone: "work",
      page: <FormExperiencia/>
    },
    {
      titulo: "Habilidades",
      icone: "star",
      page: <FormHabilidade/>
    }
  ])
 

  const ClickMenuEsquerdo = (index) => {

    if (index >= 0 && index < listaMenu.length) {

      // if(!CheckCampos(indexAtivo) && index > indexAtivo){
      //   setAlertVivivel(true)
      //   setTimeout(()=>{setAlertVivivel(false)},2000)
      //   return
      // }
      setIndexAtivo(index)

      const BotaoBackPage = document.getElementById("BTN_BACK_PAGE")
      index > 0 ? BotaoBackPage.classList.remove("hidebpage") : BotaoBackPage.classList.add("hidebpage")
    }
    else{
      console.log(index)
    }

  }

  useEffect(() => {}, [indexAtivo])

  return (
    <main className="container">
      <BoxTopAlert visivel={alertVisivel} texto={'Prencha todos os campos obrigatórios'} bgColor={'#BF0436'} color={'#fff'}/>
      <BarraMenuEsquerdo listaMenu={listaMenu} ClickMenuEsquerdo={ClickMenuEsquerdo} indexAtivo={indexAtivo} />
      <div className="content-left">
        <BarraTopo indexAtivo={indexAtivo} listaMenu={listaMenu} />
        <div className="content-dash">
          <div className="bx_container">
            {listaMenu[indexAtivo].page}
          </div>
          <BoxViewe />
        </div>
        <BarraBtnPagina ClickMenuEsquerdo={ClickMenuEsquerdo} indexAtivo={indexAtivo} />
      </div>
    </main>
  );
}
