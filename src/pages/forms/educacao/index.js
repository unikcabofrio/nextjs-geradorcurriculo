import { useEffect, useState } from 'react'
import './style.css'

import { Insert, Select } from '@/database/data'

import { Input } from '@/components/form/inputs'

export default function FormEducação() {
    let dataAtual = new Date();
    const [addEdu, setaddEdu] = useState(Select('educacao')[0] ? Select('educacao')[0] : [{ nome: "", grau: "", ano: dataAtual.getFullYear() }])

    const handleClickAdd = () => {
        setaddEdu(prevState => [...prevState, { nome: "", grau: "", ano: dataAtual.getFullYear() }]);
    }

    const handleClickRemove = (index) => {
        setaddEdu(prevState => {
            const newState = [...prevState];
            newState.splice(index, 1);
            Insert(newState, 'educacao')
            return newState;
        });
    }

    const handleInput = (value, key, index) => {
        setaddEdu(prevState => {
            const newState = [...prevState];
            newState[index][key] = value
            return newState
        })
        Insert(addEdu, 'educacao')
    }

    // useEffect(() => { }, [addEdu])

    return (
        <form className='Forms'>
            {
                addEdu.map((item, index) => {
                    return (
                        <div key={index}>
                            {
                                addEdu.length > 1 ?
                                    <div className='forms-bardivs'>
                                        <span className='text'>Remover Campo</span>
                                        <span className='divsr' />
                                        <span className="material-symbols-outlined clickRemove" onClick={() => { handleClickRemove(index) }}>remove</span>
                                    </div> :
                                    ''
                            }
                            <Input
                                index={index+1}
                                titulo={'Nome da Escola'}
                                name={`eduName_${item}`}
                                value={item.nome}
                                onChange={(e) => { handleInput(e.target.value, 'nome', index) }}
                                required={false}
                            />

                            <div className='double'>
                                <Input
                                    index={index+2}
                                    titulo={'Grau'}
                                    name={`eduGrau_${item}`}
                                    value={item.grau}
                                    onChange={(e) => { handleInput(e.target.value, 'grau', index) }}
                                    required={false}
                                />
                                <Input
                                    index={index+3}
                                    titulo={'Ano'}
                                    name={`eduAno_${item}`}
                                    type={'number'}
                                    value={item.ano}
                                    onChange={(e) => { handleInput(e.target.value, 'ano', index) }}
                                    required={false}
                                />
                            </div>
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