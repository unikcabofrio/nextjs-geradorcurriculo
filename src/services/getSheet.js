export default async function GetSheet(nameSheet){
    const sheet_url = process.env.SHEET_URL
    const sheet_id = process.env.SHEET_ID
    const token = process.env.SHEET_TOKEN

    const url = `${sheet_url}/${sheet_id}/exec`

    const response = await fetch(url+`?SheetByName=${nameSheet}&tokenSheet=${token}`)
    return await response.json()
}