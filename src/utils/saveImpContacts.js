

export default async function saveImpContacts(importedContacts) {
    

    return fetch(`http://localhost:8080/contacts`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',            
                },
                body: JSON.stringify(importedContacts)
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => {
                console.error('Error to save the important contacts:', error)
                return []
                })
}
