import Formulario from '@/components/form'
import { listaObjetivo } from '@/utils/listaComponents'
import { TextareaObj } from '@/components/form/textArea'

export default function FormObjetivo() {

    return (
        <Formulario>
            {
                listaObjetivo.map((item, index) => {
                    if (item['textArea']) {
                        return (
                            <div key={index}>
                                {item['textArea'].map((dItem, dIndex) => { return <TextareaObj key={dIndex} titulo={dItem.titulo} name={dItem.name} /> })}
                            </div>
                        )

                    }
                })
            }

        </Formulario>
    )
}