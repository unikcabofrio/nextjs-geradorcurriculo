import './style.css'
import { Insert, Select } from '@/database/data'

export function SwitchRounded(props) {

    const handleInput = (value, key) => {
        Insert(value, key)
    }

    return (
        <div className='form-toogle'>
            <label>
                <p>{props.titulo}</p>
                <p className='form-label-requerid'>
                    {props.required == false ? '' : 'obrigatório'}
                </p>
            </label>
            <label className="switch">
                <input type="checkbox" id={props.name} name={props.titulo} tabIndex={props.index}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
}