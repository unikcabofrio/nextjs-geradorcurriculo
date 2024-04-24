'use client'

import { useState } from 'react'
import Image from 'next/image';
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
        <div className='form-image'>
            <label>
                <p>{props.titulo}</p>
                <p className='form-label-requerid'>
                    {props.required == false ? '' : 'obrigatório'}
                </p>
            </label>
            <div>
                <Image
                    src={image}
                    alt={"Imagem selecionada"}
                    size={'cover'}
                    width={0}
                    height={0}
                    priority
                />
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