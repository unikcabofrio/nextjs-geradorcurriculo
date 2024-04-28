'use client'

import { useState } from 'react'
import Imagem from '@/components/image'
import { TituloLabel } from '@/components/titulo'
import './style.css'
import { Insert, Select } from '@/database/data'

import Logo from '@/assets/perfil.png'

export function InputImage(props) {

    const [image, setImage] = useState(Select(props.name)[0] ? Select(props.name)[0] : Logo)
    const handleImageChange = (value, key) => {
        const urlImg = URL.createObjectURL(value);
        setImage(urlImg)
        Insert(urlImg, key)
    }

    return (
        <div className='fImage'>
            <TituloLabel titulo={props.titulo} />
            <div>
                <Imagem src={image ? image : Logo} alt={"Imagem selecionada"} />
                <input
                    id={props.name}
                    name={props.titulo}
                    tabIndex={props.index}
                    type="file"
                    onChange={(e) => { handleImageChange(e.target.files[0], props.name) }}
                    required={props.required ? props.required : true}
                />
            </div>

        </div>
    );
}