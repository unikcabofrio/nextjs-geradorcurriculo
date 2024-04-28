import { useState } from 'react'
import Formulario from '@/components/form'
import { Insert, Select } from '@/database/data'
import { ListaEducacao } from '@/utils/listaComponents'
import { Input } from '@/components/form/inputs'
import { SelectBox } from '@/components/form/select'
import { ButtonAdd,ButtonRemove } from '@/components/button/divAddRemove'

export default function FormEducação() {
    const [arrayEdu, setArrayEdu] = useState(Select('educacao')[0] ? Select('educacao')[0] : [ListaEducacao[0]])

    const handleClickAdd = () => {
        setArrayEdu(prevState => [...prevState, ListaEducacao[0]]);
    }

    const handleClickRemove = (index) => {
        setArrayEdu(prevState => {
            const newState = [...prevState];
            newState.splice(index, 1);
            Insert(newState, 'educacao')
            return newState;
        });
    }

    const handleInput = (value, key, index) => {
        setArrayEdu(prevState => {
            const newState = [...prevState];
            newState[index][key] = value
            return newState
        })
        Insert(addEdu, 'educacao')
    }

    return (
        <Formulario>
            {
                arrayEdu.map((item, index) => {
                    return (
                        <div key={index}>
                        <ButtonRemove index={index} handleClickRemove={handleClickRemove} length={arrayEdu.length}/>
                            <Input titulo={'Nome da Escola'} name={`eduName_${index}`} value={item.nome} onChange={(e) => { handleInput(e.target.value, 'nome', index) }}/>
                            <SelectBox titulo={'Grau'} name={`eduGrau_${index}`} options={ListaEducacao[1].listaGrau} value={item.grau} onChange={(e) => { handleInput(e.target.value, 'grau', index) }}/>
                            <div className='double'>
                                <Input titulo={'Mês Início'} name={`eduAno_${index}`} type={'number'} value={item.mesI} onChange={(e) => { handleInput(e.target.value, 'mesI', index) }}/>
                                <Input titulo={'Ano Início'} name={`eduAno_${index}`} type={'number'} value={item.anoI} onChange={(e) => { handleInput(e.target.value, 'anoI', index) }}/>
                            </div>
                            <div className='double'>
                                <Input titulo={'Mês Término'} name={`eduAno_${index}`} type={'number'} value={item.mesT} onChange={(e) => { handleInput(e.target.value, 'mesT', index) }}/>
                                <Input titulo={'Ano Término'} name={`eduAno_${index}`} type={'number'} value={item.anoT} onChange={(e) => { handleInput(e.target.value, 'anoT', index) }}/>
                            </div>
                            <Input titulo={'Cidade'} name={`eduCidade_${index}`} value={item.cidade} onChange={(e) => { handleInput(e.target.value, 'cidade', index) }}/>
                        </div>
                    )
                })
            }
            <ButtonAdd handleClickAdd={handleClickAdd}/>
        </Formulario>
    )
}