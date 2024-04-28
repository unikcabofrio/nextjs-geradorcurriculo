import { useState } from 'react'
import Formulario from '@/components/form'
import { ListaHabilidades } from '@/utils/listaComponents'
import { Insert, Select } from '@/database/data'
import { Input } from '@/components/form/inputs'
import { SelectBox } from '@/components/form/select'
import { ButtonAdd,ButtonRemove } from '@/components/button/divAddRemove'

export default function FormHabilidade() {

    const [arrayHab, setArrayHab] = useState(Select('habilidade')[0] ? Select('habilidade')[0] : [ListaHabilidades[0]])

    const handleClickAdd = () => {
        setArrayHab(prevState => [...prevState, ListaHabilidades[0]]);
    }

    const handleClickRemove = (index) => {
        setArrayHab(prevState => {
            const newState = [...prevState];
            newState.splice(index, 1);
            Insert(newState, 'habilidade')
            return newState;
        });
    }

    const handleInput = (value, key, index) => {
        setArrayHab(prevState => {
            const newState = [...prevState];
            newState[index][key] = value
            return newState
        })
        Insert(arrayHab, 'habilidade')
    }

    return (
        <Formulario>
            {
                arrayHab.map((item, index) => {
                    return (
                        <div key={index}>
                            <ButtonRemove index={index} handleClickRemove={handleClickRemove} length={arrayHab.length}/>
                            <Input titulo={'Tipo'} name={`habName_${index}`} value={item.nome}onChange={(e) => { handleInput(e.target.value, 'nome', index) }}/>
                            <SelectBox titulo={'Nível de Conhecimento'} name={`habNivel_${index}`} value={item.nivel}onChange={(e) => { handleInput(e.target.value, 'nivel', index) }} options={ListaHabilidades[1].listaNivel}/>
                        </div>
                    )
                })
            }
            <ButtonAdd handleClickAdd={handleClickAdd}/>
        </Formulario>
    )
}