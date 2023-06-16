export default async function deleteContact (id) {

    const response = await globalThis.fetch(`http://192.168.20.2:8080/contacts/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    const data = await response.json()

    return data
}