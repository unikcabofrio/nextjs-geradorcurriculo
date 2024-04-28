import { useState } from 'react'
import Formulario from '@/components/form'
import { Insert, Select } from '@/database/data'
import { ListaExperiencia } from '@/utils/listaComponents'
import { Input } from '@/components/form/inputs'
import { ButtonAdd,ButtonRemove } from '@/components/button/divAddRemove'

export default function FormExperiencia() {
    const [arrayExp, setArrayExp] = useState(Select('expTrabalho')[0] ? Select('expTrabalho')[0] : [ListaExperiencia[0]])

    const handleClickAdd = () => {
        setArrayExp(prevState => [...prevState, ListaExperiencia[0]]);
    }

    const handleClickRemove = (index) => {
        setArrayExp(prevState => {
            const newState = [...prevState];
            newState.splice(index, 1);
            Insert(newState, 'expTrabalho')
            return newState;
        });
    }

    const handleInput = (value, key, index) => {
        setArrayExp(prevState => {
            const newState = [...prevState];
            newState[index][key] = value
            return newState
        })
        Insert(arrayExp, 'expTrabalho')
    }

    return (
        <Formulario>
            {
                arrayExp.map((item, index) => {
                    return (
                        <div key={index}>
                        <ButtonRemove index={index} handleClickRemove={handleClickRemove} length={arrayExp.length}/>
                            <Input titulo={'Nome da Empresa'} name={`expName_${index}`} value={item.nome}onChange={(e) => { handleInput(e.target.value, 'nome', index) }}/>
                            <Input titulo={'Cargo'} name={`expCargo_${index}`} value={item.cargo} onChange={(e) => { handleInput(e.target.value, 'cargo', index) }}/>

                            <div className='double'>
                                <Input titulo={'Mês Início'} name={`eduAno_${index}`} type={'number'} value={item.mesI} onChange={(e) => { handleInput(e.target.value, 'mesI', index) }}/>
                                <Input titulo={'Ano Início'} name={`eduAno_${index}`} type={'number'} value={item.anoI} onChange={(e) => { handleInput(e.target.value, 'anoI', index) }}/>
                            </div>
                            <div className='double'>
                                <Input titulo={'Mês Término'} name={`eduAno_${index}`} type={'number'} value={item.mesT} onChange={(e) => { handleInput(e.target.value, 'mesT', index) }}/>
                                <Input titulo={'Ano Término'} name={`eduAno_${index}`} type={'number'} value={item.anoT} onChange={(e) => { handleInput(e.target.value, 'anoT', index) }}/>
                            </div>
                            <Input titulo={'Cidade'} name={`eduCidade_${index}`} value={item.cidade} onChange={(e) => { handleInput(e.target.value, 'cidade', index) }}/>

                            <Input titulo={'Descrição'} name={`expDesc_${index}`} value={item.desc} onChange={(e) => { handleInput(e.target.value, 'desc', index) }}/>
                        </div>
                    )
                })
            }
            <ButtonAdd handleClickAdd={handleClickAdd}/>
        </Formulario>
    )
}