import './style.css'
export default function Formulario({children}){
    return(
        <form className='Forms notScroll'>{children}</form>
    )
}