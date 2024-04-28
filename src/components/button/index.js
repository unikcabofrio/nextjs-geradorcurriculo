import './style.css'

export default function Button(props) {
  return (
    <div
      className={`buttonDefault ${props.className ? props.className : ''}`}
      style={{ 'backgroundColor': props.bgColor, 'color': props.color,'border': `1px solid ${props.bdColor}`}}
      onClick={props.onClick}
    >
      {props.name}
    </div>
  );
}
