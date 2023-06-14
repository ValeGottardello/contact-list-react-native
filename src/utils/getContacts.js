export default async function getContacts () {
    return fetch(`http://localhost:8080/contacts`)
        .then(res => res.json())
        .then(data => data)
        .catch(error => {
            console.error('Error to save the important contacts:', error)
            return []
        })
}