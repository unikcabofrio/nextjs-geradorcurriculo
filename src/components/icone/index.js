export default function Icone(props) {
    return <span className="material-symbols-outlined" onClick={props.onClick}>{props.nome}</span>
}