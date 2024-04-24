import './style.css'

export default function Button(props) {

  return (
    <div
      id={`BTN_${props.funcClick}`}
      className={`bbb-container ${props.funcClick === "BACK_PAGE" ? 'hidebpage' : ''}`}
      style={{
        'backgroundColor': props.bgColor,
        'color': props.color,
        'border': `1px solid ${props.bdColor}`
      }}
      onClick={props.onClick}
    >
      {props.name}
    </div>
  );
}
