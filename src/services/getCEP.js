import cep from 'cep-promise'
import { Insert } from '@/database/data'

export default async function GetCEP(value) {
    value = value.replace('-', '')

    const res = await cep(value)

    document.getElementById('endereco').value = res.street
    Insert(res.street, 'endereco')

    document.getElementById('bairro').value = res.neighborhood
    Insert(res.neighborhood, 'bairro')

    document.getElementById('cidade').value = res.city
    Insert(res.city, 'cidade')

    document.getElementById('estado').value = res.state
    Insert(res.state, 'estado')
}