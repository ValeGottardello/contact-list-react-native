export default function convertToContacts(vCardText) {
  
  const vCardArray = vCardText.split('BEGIN:VCARD')

  const contacts = vCardArray
    .filter((vCard) => vCard.trim() !== '')
    .map((vCard) => {
      const lines = vCard.split('\n')
      const contact = {}
      lines.forEach((line) => {

        const [key, value] = line.split(':')
        if (key && value) {
          const trimmedKey = key.trim()
          const trimmedValue = value.trim()
          if (trimmedKey === 'FN') {
            const [firstName, lastName] = trimmedValue.split(' ')
            contact.firstName = firstName || ''
            contact.lastName = lastName.split("").slice(0,lastName.length - 1).join("") || ''
          } else if (trimmedKey === 'EMAIL') {
            contact.email = trimmedValue || ''
          } else if (trimmedKey === 'TEL') {
            contact.phone = trimmedValue || ''
          }
        }
      })
      return contact
    })

  return contacts
}
