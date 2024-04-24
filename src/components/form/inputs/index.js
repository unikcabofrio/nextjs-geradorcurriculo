import { useState } from 'react'
import './style.css'
import { Insert,Select } from '@/database/data'
import GetCEP from '@/services/getCEP'

export function Input(props) {
  const [inputValue,setInputValue] = useState(Select(props.name)[0] ? Select(props.name)[0] : '')

  const insertCEP = async (value) =>{
    const res = await GetCEP(value)

    document.getElementById('endereco').value = res.street
    Insert(res.street, 'endereco')

    document.getElementById('bairro').value = res.neighborhood
    Insert(res.neighborhood, 'bairro')

    document.getElementById('cidade').value = res.city
    Insert(res.city, 'cidade')

    document.getElementById('estado').value = res.state
    Insert(res.state, 'estado')
  }

  const handleInput = (value, key) => {
    Insert(value, key)
    setInputValue(value)

    if(key='cep' && value.length >= 8) insertCEP(value)
  }

  return (
    <div className='form-input'>
      <label>
        <p>{props.titulo}</p>
        <p className='form-label-requerid'>
          {props.required == false ? '' : 'obrigatório'}
        </p>
      </label>
      <input
        id={props.name}
        name={props.titulo}
        tabIndex={props.index}
        value={props.value ? props.value : inputValue}
        onChange={props.onChange ? props.onChange : (e) => { handleInput(e.target.value,props.name)}}
        placeholder={props.placeholder ? props.placeholder : ''}
        type={props.type ? props.type : 'text'}
        required={props.required ? props.required : true}
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
    <div className='form-input'>
      <label>
        <p>{props.titulo}</p>
        <p className='form-label-requerid'>
          {props.required == false ? '' : 'obrigatório'}
        </p>
      </label>
      <input
        id={props.name}
        name={props.titulo}
        tabIndex={props.index}
        value={Select(props.name)[0]}
        onChange={(e) => { handleInput(e.target.value,props.name)}}
        type={'date'}
        required={props.required ? props.required : true}
        min={'1900-01-01'}
        // defaultValue={`${dataAtual.getFullYear()}-${dataAtual.getMonth() < 10 ? `0${dataAtual.getMonth()}`: dataAtual.getMonth() }-${dataAtual.getDay() < 10 ? `0${dataAtual.getDay()}`:dataAtual.getDay() }`}
      />
    </div>
  );
}

export function InputIndade(props) {
  return (
    <div className='form-input'>
      <label>
        <p>{props.titulo}</p>
        <p className='form-label-requerid'>   
        </p>
      </label>
      <input
        id={`input_${props.name}`}
        name={props.titulo}
        tabIndex={props.index}
        value={Select(props.name)[0] ? Select(props.name)[0] : '0'}
        type={'text'}
        disabled
      />
    </div>
  );
}

