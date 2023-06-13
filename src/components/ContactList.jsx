import React from "react";
import { View, Text, FlatList } from "react-native";
// import { FlatList } from "react-native-web";


const ContactList = ({list}) => {
   
    return (
        <FlatList data={list}
                ItemSeparatorComponent={() => <View style={{height: 3, backgroundColor: "#CED0CE"}}/>}    
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({ item: contact }) => (
                    <View key={contact.id} style={{padding:20}}>
                        <Text style={{ fontWeight: 'bold'}}>Contact Name: {contact.firstName}</Text>
                        <Text>Phone: {contact.phone}</Text>
                    </View>
                  )}
        /> 
           
    )
}
export default ContactList;