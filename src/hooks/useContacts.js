import { useEffect, useState } from "react"

const useContacts = () => {  
    const [list, setList] = useState([])
    
    const fetchContacts = async () => {

        const response = await globalThis.fetch(`http://192.168.20.2:8080/contacts`)
        
        const resJson = await response.json()

        setList(resJson)
      }
  
    useEffect(() => {
      fetchContacts()
    }, [])
    
    return list
} 

export default useContacts