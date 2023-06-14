import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import RepositoryContact from "./RepositoryContact";
import getContacts from "../utils/getContacts";

const ContactList = ({ list }) => {
   
    // const [list, setList] = useState([])

    // const fetchContacts = () => {
    //     getContacts()
    //       .then(res => setList(res))
    // }

    // useEffect(() => {
    //     fetchContacts()
    // }, [])

    return (
        <FlatList data={list}
                ItemSeparatorComponent={() => <View style={{height: 3, backgroundColor: "#CED0CE"}}/>}    
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({ item: contact }) => ( 
                    <RepositoryContact {...contact} />
                )}
        /> 
           
    )
}
export default ContactList;