import { useState } from 'react'
import './style.css'
import { Insert, Select } from '@/database/data'

export function SelectBox(props) {

    const [inputValue,setInputValue] = useState(Select(props.name)[0] ? Select(props.name)[0] : '0')

    const handleInput = (value, key) => {
        Insert(value, key)
        setInputValue(value)
    }

    return (
        <div className='form-select'>
            <label>
                <p>{props.titulo}</p>
                <p className='form-label-requerid'>
                    {props.required == false ? '' : 'obrigatório'}
                </p>
            </label>
            <select 
                id={props.name}
                name={props.titulo}
                tabIndex={props.index}
                onChange={props.onChange ? props.onChange : (e) => { handleInput(e.target.value,props.name)}}
                value={props.value ? props.value : inputValue}
            >
                {
                    props.options ?
                    props.options.map((item,index)=>{
                        return(<option value={index} key={index}>{item}</option> )
                    }) :
                    <option value="0">Sem dados</option>
                }
            </select>
        </div>
    );
}