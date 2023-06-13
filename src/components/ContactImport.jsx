import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import convertToContacts from "../utils/convertToContacts"
import saveImpContacts from "../utils/saveImpContacts";

export default function ContactImport() {
    
    let importedContacts = []
    const handleImportContacts = async () => {
   
        try {
            const { uri } = await DocumentPicker.getDocumentAsync({ type: "text/vcard" })
    
            if (uri) {
    
                const vCardText = await fetch(uri).then((response) => response.text())

                const contacts = convertToContacts(vCardText)

                if (contacts) {
                    saveImpContacts(contacts)
                }
            }
          } catch (error) {
            console.log("Error importing contacts", error);
          }
    };

    return (
        <View style={style.container}>
            <Button
                color="white"
                onPress={handleImportContacts}
                title="Import your contacts"
                accessibilityLabel="Press this button to import contacts from your device"
                />
            <View>
                <Text>{importedContacts}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#415a77",
        fontWeight: "bold",
        borderRadius: 10,
        margin: 10,
        padding: 5,
     
    }
})
