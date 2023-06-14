export default async function getContacts () {
    try {
        const allContacts = await fetch('http://localhost:3001/contacts')

        const contacts = await allContacts.json()  
         console.log(contacts)
        return contacts
      
      } catch (error) {

        console.error('Error gettings contacts:', error)
        return []
      }
}