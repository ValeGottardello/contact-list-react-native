import React from "react";
import { View, Text, FlatList } from "react-native";
import RepositoryContact from "./RepositoryContact";

const ContactList = ({list}) => {
   
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