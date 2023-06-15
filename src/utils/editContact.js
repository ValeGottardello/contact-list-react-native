export default async function editContact (id, input) {

    const response = await globalThis.fetch(`http://192.168.20.2:8080/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    })

    const data = await response.json()

    return data
}