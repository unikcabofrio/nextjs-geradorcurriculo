import { useState } from 'react'
import './style.css'
import { TituloLabel } from '@/components/titulo'
import { Insert, Select } from '@/database/data'

export function TextareaObj(props) {

    const [obj] = useState([
        'Busco uma oportunidade desafiadora em uma empresa inovadora, onde possa aplicar minhas habilidades em [área de atuação] para contribuir com o crescimento da equipe e alcançar metas ambiciosas.',
        'Desejo desenvolver minha carreira em um ambiente dinâmico e colaborativo, onde minha experiência em [campo específico] possa ser aproveitada para impulsionar projetos estratégicos e alcançar excelência operacional.',
        'Estou em busca de uma posição que me permita expandir meu conhecimento em [área de interesse], enquanto trabalho em equipe para superar desafios e alcançar resultados significativos que agreguem valor à organização.',
        'Almejo uma oportunidade onde eu possa utilizar minha paixão por [área de especialização] para fazer uma diferença tangível, contribuindo com soluções inovadoras e colaborando com uma equipe comprometida com a excelência profissional.'
    ])
    const [inputValue, setInputValue] = useState(Select(props.name)[0] ? Select(props.name)[0] : '')

    const handleInput = (value, key) => {
        setInputValue(value)
        Insert(value, key)
    }
    return (
        <div className='textArea'>
            <TituloLabel titulo={props.titulo} />
            <textarea
                id={props.name}
                value={inputValue}
                onChange={(e) => { handleInput(e.target.value, props.name) }}
                type={props.type ? props.type : 'text'}
            ></textarea>
            <div className='bordaDivisa'></div>
            <TituloLabel titulo={'Objetivos pré criado'} />
            <select onChange={(e) => { handleInput(obj[e.target.value], props.name) }}>
                <option value="">Selecionar</option>
                {
                    obj ?
                        obj.map((item, index) => {
                            return (<option value={index} key={index}>{item.substring(0, 25)} ...</option>)
                        }) :
                        <option value="0">Sem dados</option>
                }
            </select>
        </div>
    );
}