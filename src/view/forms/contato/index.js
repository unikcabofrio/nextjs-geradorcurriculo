import Formulario from '@/components/form'
import { listaContato } from '@/utils/listaComponents'
import { Input, InputData } from '@/components/form/inputs'
import { SelectBox } from '@/components/form/select'
import { InputImage } from '@/components/form/image'

export default function FormContato() {
    return (
        <Formulario>
            {
                listaContato.map((item, index) => {
                    if (item['double']) {
                        return (
                            <div key={index} className='double'>
                                {
                                    item['double'].map((dItem, dIndex) => {
                                        if (dItem.tipo === 'text') { return <Input key={dIndex} titulo={dItem.titulo} name={dItem.name} type={dItem.tipo} /> }
                                        else if (dItem.tipo === 'select') { return <SelectBox key={dIndex} titulo={dItem.titulo} name={dItem.name} options={dItem.options} /> }
                                        else { return <InputData key={dIndex} titulo={dItem.titulo} name={dItem.name} /> }
                                    })
                                }
                            </div>
                        )
                    }
                    else if (item['imagem']) { return <InputImage key={index} titulo={item['imagem'].titulo} name={item['imagem'].name} /> }
                    else if (item['borda']) { return <div key={index} className='bordaDivisa'></div> }
                    else { return <Input key={index} titulo={item.titulo} name={item.name} type={item.tipo} /> }
                })
            }
        </Formulario>
    )
}