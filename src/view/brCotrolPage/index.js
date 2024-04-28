import './style.css'
import Button from '@/components/button';

export default function BrCotrolPage(props) {

  return (
    <div className="barControlPage">
      <Button
        name={"Voltar"}
        bgColor={"#ffffff"}
        color={"#020659"}
        bdColor={"#020659"}
        onClick={() => { props.ClickMenuEsquerdo(props.indexAtivo - 1) }}
        className={props.indexAtivo === 0 ? 'hide' : ''}
      />
      <Button
        name={props.indexAtivo >= props.Lstlength -1 ? 'Baixar PDF' : 'Próximo'}
        bgColor={"#020659"}
        color={"#ffffff"}
        bdColor={"#020659"}
        onClick={() => { props.ClickMenuEsquerdo(props.indexAtivo + 1) }}
      />
    </div>
  );
}
