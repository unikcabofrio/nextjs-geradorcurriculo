import './style.css'

import { TextareaObj } from '@/components/form/textArea'

export default function FormObjetivo() {

    return (
        <form className='Forms'>
            <TextareaObj titulo={'Objetivo'} name={'objetivo'} index={1}/>
        </form>
    )
}