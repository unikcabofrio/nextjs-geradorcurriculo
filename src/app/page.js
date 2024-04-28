'use client'

import { useEffect, useState } from "react";

import { listaMenu } from "@/utils/listaMenu";

import BrNavEsquerdo from "@/view/brNavEsquerdo";
import BrInfo from "@/view/brInfo";
import BrCotrolPage from "@/view/brCotrolPage";
import BoxViewe from "@/view/boxViewe";

import CheckCampos from "@/services/checkCampos";
import ExportPDF from "@/services/ExportPDF";

export default function Home() {

  const [indexAtivo, setIndexAtivo] = useState(0)

  const ClickMenuEsquerdo = async (index) => {
    if (index >= 0 && index < listaMenu.length) {

      // if(!CheckCampos(indexAtivo) && index > indexAtivo){
      //   setAlertVivivel(true)
      //   setTimeout(()=>{setAlertVivivel(false)},2000)
      //   return
      // }

      setIndexAtivo(index)
    }
    else {
      if (index === listaMenu.length) { await ExportPDF()}
    }
  }
  useEffect(() => { }, [indexAtivo])

  return (
    <main className="container">
      <BrNavEsquerdo ClickMenuEsquerdo={ClickMenuEsquerdo} listaMenu={listaMenu} indexAtivo={indexAtivo} />
      <div className="boxViewe">
        <BrInfo indexAtivo={indexAtivo} listaMenu={listaMenu} />
        <div className="boxForm">
          {listaMenu[indexAtivo].page}
          {indexAtivo === (listaMenu.length -1) ? '' : <BoxViewe/>}
        </div>
        <BrCotrolPage ClickMenuEsquerdo={ClickMenuEsquerdo} indexAtivo={indexAtivo} Lstlength={listaMenu.length} />
      </div>
    </main>
  );
}
