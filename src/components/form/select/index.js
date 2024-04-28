import { useState } from 'react'
import './style.css'
import { TituloLabel } from '@/components/titulo'
import { Insert, Select } from '@/database/data'

export function SelectBox(props) {

    const [inputValue, setInputValue] = useState(Select(props.name)[0] ? Select(props.name)[0] : '0')

    const handleInput = (value, key) => {
        Insert(value, key)
        setInputValue(value)
    }

    return (
        <div className='fSelect'>
           <TituloLabel titulo={props.titulo} />
            <select
                id={props.name}
                onChange={props.onChange ? props.onChange : (e) => { handleInput(e.target.value, props.name) }}
                value={props.value ? props.value : inputValue}
            >
                {
                    props.options ?
                        props.options.map((item, index) => {
                            return (<option value={index} key={index}>{item}</option>)
                        }) :
                        <option value="0">Sem dados</option>
                }
            </select>
        </div>
    );
}