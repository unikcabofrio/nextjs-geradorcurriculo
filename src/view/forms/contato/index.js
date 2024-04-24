import './style.css'

import { Input, InputData, InputIndade } from '@/components/form/inputs'
import { SelectBox } from '@/components/form/select'
import { InputImage } from '@/components/form/image'

export default function FormContato() {

    return (
        <form className='Forms'>

            <div className='double'>
                <Input titulo={'Primeiro Nome'} name={'primeiroNome'} index={1}/>
                <Input titulo={'Sobrenome'} name={'sobrenome'} index={2}/>
            </div>

            <Input titulo={'E-mail'} name={'email'} type={'email'} index={3}/>

            <div className='double'>
                <Input titulo={'Contato'} name={'telefone'} index={4}/>
                <Input titulo={'WhatsApp'} name={'whatsapp'} index={5}/>
            </div>

            <div className='forms-bardivisa'></div>

            <Input titulo={'Endereço'} name={'endereco'} index={6}/>
            <div className='double'>
                <Input titulo={'Bairro'} name={'bairro'} required={false} index={7}/>
                <Input titulo={'Cidade'} name={'cidade'} index={8}/>
            </div>
            <div className='double'>
                <Input titulo={'Estado'} name={'estado'} index={9}/>
                <Input titulo={'CEP'} name={'cep'} required={false} index={10}/>
            </div>

            <div className='forms-bardivisa'></div>

            <InputData titulo={'Data Nascimento'} name={'dataNasc'} index={11} required={false}/>

            <div className='double'>
                <SelectBox titulo={'Habilitação'} name={'cnh'} required={false}
                    options={[
                        'Não Tenho CNH', 'ACC', 'A', 'B', 'AB', 'C', 'AC', 'D', 'AD', 'E', 'AE'
                    ]}
                    index={13}
                />
                <SelectBox titulo={'Estado Civil'} name={'estadoCivil'} required={false}
                    options={[
                        'Solteiro(a)','Casado(a)','Viúvo(a)','Divorciado(a)','Separado(a)'
                    ]}
                    index={14}
                />
            </div>

            <div className='forms-bardivisa'></div>
            
            <InputImage titulo={"Foto 3x4"} name={'fotoPerfil'} required={false} index={15}/>
        </form>
    )
}