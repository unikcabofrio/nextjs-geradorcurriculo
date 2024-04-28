import './style.css'
import Icone from '@/components/icone';
import Imagem from '@/components/image';
import Logo from '@/assets/logo-other-white.png'
import { useState } from 'react';

export default function BrNavEsquerdo(props) {
  const [hideUl,setHideUl] = useState(true)
  return (
    <div className="navBar">
      <div className='top'>
        <Imagem src={Logo} alt={"Currículo Vitae"}/>
        <Icone nome={'menu'} onClick={()=>{setHideUl(state => !state)}}/>
      </div>
      <ul className={`menu ${hideUl ? 'hide' : ''}`} id={'menuUl'}>
        {
          props.listaMenu.map((item, index) => {
            return (
              <li key={index} className={index === props.indexAtivo ? 'ativa' : ''} onClick={() => { setHideUl(state => !state); props.ClickMenuEsquerdo(index) }}>
                <div><Icone nome={item.icone} /></div>
                <p>{item.titulo}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
