import { useEffect, useState } from 'react'
import './style.css'

import { Insert, Select } from '@/database/data'

import { Input } from '@/components/form/inputs'
import { TextareaObj } from '@/components/form/textArea'

export default function FormExperiencia() {
    let dataAtual = new Date();
    const [addExp, setaddExp] = useState(Select('expTrabalho')[0] ? Select('expTrabalho')[0] : [{ nome: "", cargo: "", anoIncio: dataAtual.getFullYear()-5, anoTerm: dataAtual.getFullYear(), desc: "" }])

    const handleClickAdd = () => {
        setaddExp(prevState => [...prevState, { nome: "", cargo: "", anoIncio: dataAtual.getFullYear()-5, anoTerm: dataAtual.getFullYear(), desc: "" }]);
    }

    const handleClickRemove = (index) => {
        setaddExp(prevState => {
            const newState = [...prevState];
            newState.splice(index, 1);
            Insert(newState, 'expTrabalho')
            return newState;
        });
    }

    const handleInput = (value, key, index) => {
        setaddExp(prevState => {
            const newState = [...prevState];
            newState[index][key] = value
            return newState
        })
        Insert(addExp, 'expTrabalho')
    }

    // useEffect(() => { }, [addEdu])

    return (
        <form className='Forms'>
            {
                addExp.map((item, index) => {
                    return (
                        <div key={index}>
                            {
                                index != 0 ?
                                    <div className='forms-bardivs'>
                                        <span className='divsr' />
                                        <span className="material-symbols-outlined clickRemove" onClick={() => { handleClickRemove(index) }}>remove</span>
                                    </div> :
                                    ''
                            }
                            <Input
                                index={index+1}
                                titulo={'Nome da Empresa'}
                                name={`expName_${item}`}
                                value={item.nome}
                                onChange={(e) => { handleInput(e.target.value, 'nome', index) }}
                                required={false}
                            />
                            <Input
                                index={index+2}
                                titulo={'Cargo'}
                                name={`expCargo_${item}`}
                                value={item.cargo}
                                onChange={(e) => { handleInput(e.target.value, 'cargo', index) }}
                                required={false}

                            />

                            <div className='double'>
                                <Input
                                    index={index+3}
                                    titulo={'Ano Início'}
                                    name={`expAnoInico_${item}`}
                                    type={'number'}
                                    value={item.anoIncio}
                                    onChange={(e) => { handleInput(e.target.value, 'anoIncio', index) }}
                                    required={false}
                                />
                                <Input
                                    index={index+4}
                                    titulo={'Ano Término'}
                                    name={`expAnoInico_${item}`}
                                    type={'number'}
                                    value={item.anoTerm}
                                    onChange={(e) => { handleInput(e.target.value, 'anoTerm', index) }}
                                    required={false}
                                />
                            </div>

                            <Input
                                index={index+5}
                                titulo={'Descrição'}
                                name={`expDesc_${item}`}
                                value={item.desc}
                                onChange={(e) => { handleInput(e.target.value, 'desc', index) }}
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