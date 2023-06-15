import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import RepositoryContact from "../components/RepositoryContact";
import getContacts from "../utils/getContacts";

const ContactList = () => {
   
  const [list, setList] = useState([])
  
  const fetchContacts = async () => {
      try {

        const res = await getContacts()
        
        if(res) {
          setList(res)
        }

      } catch (error) {
        console.error(error)
      }
    }

    useEffect(() => {
        fetchContacts()
    }, [])

    return (
      <>
        {list && list.length === 0 ? (
        <Text>Loading...</Text>
        ) : (
          <FlatList
            data={list}
            ItemSeparatorComponent={() => <View style={{ height: 3, backgroundColor: "#CED0CE" }} />}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: contacts }) => (
              <RepositoryContact {...contacts} />
            )}
          />
        )}
      </>
    )
}
export default ContactList;