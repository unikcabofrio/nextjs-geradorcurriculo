import './style.css'

export default function BrInfo(props) {

  return (
    <div className="barInfo">
      <h3>{props.listaMenu[props.indexAtivo].titulo}</h3>
    </div>
  );
}
