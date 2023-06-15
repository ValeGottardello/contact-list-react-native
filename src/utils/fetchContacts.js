import { useEffect, useState } from "react"

    
const fetchContacts = async () => {
     const response = await globalThis.fetch(`http://192.168.20.2:8080/contacts`)
     
     const resJson = await response.json()

     return resJson
}


export default fetchContacts