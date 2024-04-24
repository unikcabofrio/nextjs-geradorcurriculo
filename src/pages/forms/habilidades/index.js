import { useState } from 'react'
import './style.css'

import { Insert, Select } from '@/database/data'

import { Input } from '@/components/form/inputs'
import { SelectBox } from '@/components/form/select'

export default function FormHabilidade() {

    const [addHab, setaddHab] = useState(Select('habilidade')[0] ? Select('habilidade')[0] : [{ nome: "", nivel: ""}])

    const handleClickAdd = () => {
        setaddHab(prevState => [...prevState, { nome: "", nivel: ""}]);
    }

    const handleClickRemove = (index) => {
        setaddHab(prevState => {
            const newState = [...prevState];
            newState.splice(index, 1);
            Insert(newState, 'habilidade')
            return newState;
        });
    }

    const handleInput = (value, key, index) => {
        setaddHab(prevState => {
            const newState = [...prevState];
            newState[index][key] = value
            return newState
        })
        Insert(addHab, 'habilidade')
    }

    return (
        <form className='Forms'>
            {
                addHab.map((item, index) => {
                    return (
                        <div key={index}>
                            {
                                addHab.length > 1 ?
                                    <div className='forms-bardivs'>
                                        <span className='text'>Remover Campo</span>
                                        <span className='divsr' />
                                        <span className="material-symbols-outlined clickRemove" onClick={() => { handleClickRemove(index) }}>remove</span>
                                    </div> :
                                    ''
                            }
                            <Input
                                index={index+1}
                                titulo={'Tipo'}
                                name={`habName_${item}`}
                                value={item.nome}
                                onChange={(e) => { handleInput(e.target.value, 'nome', index) }}
                                required={false}
                            />
                            <SelectBox
                                index={index+2}
                                titulo={'Nível de Conhecimento'}
                                name={`habNivel_${item}`}
                                value={item.nivel}
                                onChange={(e) => { handleInput(e.target.value, 'nivel', index) }}
                                options={['Básico','Intermediário','Avançado']}
                                required={false}
                            />                            
                        </div>
                    )
                })
            }
            <div className='forms-bardivs'>
                <span className='divs' />
                <span className="material-symbols-outlined clickAdd" onClick={() => { handleClickAdd() }}>add</span>
            </div>
        </form>
    )
}