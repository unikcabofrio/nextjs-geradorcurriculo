import Image from 'next/image';
import './style.css'
import Logo from '@/assets/logo.png'

export default function BarraTopo(props) {

  return (
    <div className="bt-container">
      <div 
        className='bt-menu hide' 
        id={"divMenu"}
        onClick={()=>{
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
      <h3>
        {props.listaMenu[props.indexAtivo].titulo}
      </h3>
      <div className='bt-login'>
        <span className="material-symbols-outlined">
          logout
        </span>
        <p>
          Entrar
        </p>
      </div>
    </div>
  );
}
