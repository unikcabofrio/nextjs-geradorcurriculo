import './style.css'
import Button from '@/components/button';

export default function BarraBtnPagina(props) {

  return (
    <div className="bb_container">
      <Button
        name={"Voltar"}
        bgColor={"#ffffff"}
        color={"#020659"}
        bdColor={"#020659"}
        onClick={() => { props.ClickMenuEsquerdo(props.indexAtivo - 1) }}
        funcClick={"BACK_PAGE"}
      />
      <Button
        name={"Próximo"}
        bgColor={"#020659"}
        color={"#ffffff"}
        bdColor={"#020659"}
        onClick={() => { props.ClickMenuEsquerdo(props.indexAtivo + 1) }}
        funcClick={"NEXT_PAGE"}
      />
    </div>
  );
}
