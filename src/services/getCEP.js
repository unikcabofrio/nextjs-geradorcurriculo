import cep from 'cep-promise'

export default async function GetCEP(value) {

    const response = await cep(value)
    return response
}