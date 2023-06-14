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
          const trimmedKey = key.trim().split(";")[0]
          const trimmedValue = value.trim().split("").slice(0,value.length - 1).join("")
          if (trimmedKey === 'FN') {
            const [firstName, lastName] = trimmedValue.split(' ')
            contact.firstName = firstName || ''
            contact.lastName = lastName || ''
          } else if (trimmedKey === 'EMAIL') {
            contact.email = trimmedValue || ''
          } else if (trimmedKey === 'TEL') {
            contact.phone = trimmedValue || ''
          }
        }
      })
      return contact
    })
  // console.log(contacts)
  return contacts
}
