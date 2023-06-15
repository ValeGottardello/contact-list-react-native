

export default async function saveImpContacts(importedContacts) {
    
    return globalThis.fetch(`http://192.168.20.2:8080/contacts`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',            
                },
                body: JSON.stringify(importedContacts)
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => {
                console.error('Error to save the imported contacts:', error)
                return []
                })
}
