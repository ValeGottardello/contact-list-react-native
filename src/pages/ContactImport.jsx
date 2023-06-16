import { View, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import convertToContacts from "../utils/convertToContacts"
import saveImpContacts from "../utils/saveImpContacts";
import theme from "../style/theme";
import StyledText from "../components/StyledText";

export default function ContactImport() {
    
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
    }

    return (
        <View style={{alignItems:'center', marginTop: 20}}>
            <TouchableOpacity 
                style={theme.buttons}
                onPress={handleImportContacts}>
                <StyledText label>
                    Import contacts
                </StyledText>
            </TouchableOpacity>
        </View>
    )
}


