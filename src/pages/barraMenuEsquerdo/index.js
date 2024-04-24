import Image from 'next/image';
import './style.css'

import Logo from '@/assets/logo-other-white.png'

export default function BarraMenuEsquerdo(props) {
  return (
    <div className="bl-container" id={"ulMenu"}>
      <div
        className='bl-logo'
        onClick={() => {
          const barMenu = document.getElementById("ulMenu")
          const buttonMenu = document.getElementById("divMenu")

          barMenu.classList.contains("hide") ? barMenu.classList.remove("hide") : barMenu.classList.add("hide")
          buttonMenu.classList.contains("hide") ? buttonMenu.classList.remove("hide") : buttonMenu.classList.add("hide")
        }}
      >
        <Image
          src={Logo}
          alt={"Currículo Vitae"}
          size={'cover'}
          width={0}
          height={0}
          priority
        />
      </div>
      <ul className='bl-menu'>
        {
          props.listaMenu.map((item, index) => {
            return (
              <li
                key={index}
                className={index === props.indexAtivo ? 'ativa' : ''}
                onClick={() => { props.ClickMenuEsquerdo(index) }}
              >
                <div>
                  <span className="material-symbols-outlined">
                    {item.icone}
                  </span>
                </div>
                <p>{item.titulo}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
