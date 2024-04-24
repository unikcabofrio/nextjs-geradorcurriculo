import { useEffect, useState } from 'react';
import './style.css'

export default function BoxTopAlert(props) {
  const [top,setTop] = useState('-5rem')
  useEffect(()=>{
    props.visivel ? setTop('0') : setTop('-5rem')
  },[props.visivel])

  return (
    <div className={`box-top-alert`} style={{top:top}} >
      <div style={{ backgroundColor: props.bgColor }}>
        <p style={{ color: props.color }}>
          {props.texto}
        </p>
      </div>
    </div>
  );
}
