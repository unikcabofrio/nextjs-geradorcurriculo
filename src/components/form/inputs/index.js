import { useState } from 'react'
import './style.css'
import { TituloLabel } from '@/components/titulo'
import { Insert, Select } from '@/database/data'
import GetCEP from '@/services/getCEP'

export function Input(props) {
  const [inputValue, setInputValue] = useState(Select(props.name)[0] ? Select(props.name)[0] : '')

  const handleInput = (value, key) => {
    Insert(value, key)
    setInputValue(value)
    if (key === 'cep' && value.length >= 8 && !isNaN(parseFloat(value)) && isFinite(value)) { GetCEP(value) }
  }

  return (
    <div className={`input ${props.className ? props.className : ''}`} >
      <TituloLabel titulo={props.titulo} />
      <input
        id={props.name}
        value={props.value ? props.value : inputValue}
        onChange={props.onChange ? props.onChange : (e) => { handleInput(e.target.value, props.name) }}
        type={props.type ? props.type : 'text'}
      />
    </div>
  );
}

export function InputData(props) {
  let dataAtual = new Date();

  const handleInput = (value, key) => {
    Insert(value, key)

    const idade = dataAtual.getFullYear() - parseInt(value.split('-')[0])
    Insert(idade, 'idade')
  }

  return (
    <div className='input'>
      <TituloLabel titulo={props.titulo} />
      <input
        id={props.name}
        value={Select(props.name)[0]}
        onChange={(e) => { handleInput(e.target.value, props.name) }}
        type={'date'}
        min={'1900-01-01'}
      />
    </div>
  );
}