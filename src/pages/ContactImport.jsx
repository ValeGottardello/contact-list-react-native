import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import convertToContacts from "../utils/convertToContacts"
import saveImpContacts from "../utils/saveImpContacts";
import StyledView from "../components/StyledView";
import theme from "../style/theme";

export default function ContactImport() {
    
    const handleImportContacts = async () => {
   
        try {
            const { uri } = await DocumentPicker.getDocumentAsync({ type: "text/vcard" })
    
            if (uri) {
    
                const vCardText = await fetch(uri).then((response) => response.text())

                const contacts = convertToContacts(vCardText)
                
                console.log(contacts)
                if (contacts) {
                    saveImpContacts(contacts)
                }
            }
          } catch (error) {
            console.log("Error importing contacts", error);
          }
    }

    return (
        <StyledView containerButton>
            <TouchableOpacity>
                <Button
                    style={{width: 'fit-content'}}
                    color={theme.language.backgroundColor}
                    onPress={handleImportContacts}
                    title="Import your contacts"
                    accessibilityLabel="Press this button to import contacts from your device"
                    />
            </TouchableOpacity>
        </StyledView>
    )
}


