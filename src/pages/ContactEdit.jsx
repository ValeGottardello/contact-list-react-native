import StyledView from "../components/StyledView";
import { Text, View, Button, TextInput, TouchableHighlight } from "react-native";
import { useLocation, useParams } from "react-router-native";
import theme from "../style/theme";
import { useState } from "react";
import editContact from "../utils/editContact";
import Message from "../components/Message";
import StyledText from "../components/StyledText";

export default function ContactEdit() {

    const location = useLocation()
    const { name, lastname, phone, email } = location.state
    const [input, setInput] = useState({
        firstName: name, 
        lastName: lastname, 
        phone, 
        email })
    const { id } = useParams()

    const handleChange = (value, name) => {

        setInput(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async () => {
        const contactEdited = await editContact(id, input)
        if (contactEdited) {
            Message('Contact Edited', 'Contact has been edited')
        }
    }

    return (
        <StyledView containerDetails>
            <Text style={{fontSize: 25, color: theme.colors.primary, textTransform: 'uppercase', fontWeight: 'bold'}}>Edit Contact: </Text>
            <View style={theme.detailsCointainer}>
                <Text style={theme.detailsLabel}>First Name:</Text>
                <TextInput 
                    value={input.firstName ? input.firstName : ""}
                    style={style.input} 
                    onChangeText={value => handleChange(value, 'firstName')}
                />
                <Text style={theme.detailsLabel}>Last Name:</Text>
                <TextInput 
                    value={input.lastName ? input.lastName : ""}
                    style={style.input} 
                    onChangeText={value => handleChange(value, 'lastName')}
                />
                <Text style={theme.detailsLabel}>Email:</Text>
                <TextInput 
                    value={input.email ? input.email : ""} 
                    style={style.input} 
                    onChangeText={value => handleChange(value, 'email')}
                />
                <Text style={theme.detailsLabel}>Phone:</Text>
                <TextInput 
                    value={input.phone ? input.phone : ""}
                    keyboardType="numeric"
                    style={style.input} 
                    onChangeText={value => handleChange(value, 'phone')}
                />
                <TouchableHighlight  
                    style={theme.buttons}
                    onPress={handleSubmit} >
                    <StyledText label>
                        Save
                    </StyledText> 
                </TouchableHighlight>    
            </View>
        </StyledView>
    )
}
const style = {
    input: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        padding: 8,
        margin: 10,
        width: 200,
        borderRadius: 5,
        color: theme.colors.primary,
    }
}