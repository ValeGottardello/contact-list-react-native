import StyledView from "../components/StyledView";
import { Text, View, Button, TextInput } from "react-native";
import { useLocation, useParams } from "react-router-native";
import theme from "../style/theme";
import { useEffect, useState } from "react";
import editContact from "../utils/editContact";


export default function ContactEdit() {

    const location = useLocation()
    const { name, lastname, phone, email } = location.state
    const [input, setInput] = useState({
        firstName: name, 
        lastName: lastname, 
        phone, 
        email })
    const { id } = useParams()
    const [contactEdited, setContactEdited] = useState({})

    const handleChange = (value, name) => {

        setInput(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async () => {
        const contactEdited = await editContact(id, input)
        if (contactEdited) {
            setContactEdited(contactEdited)
        }
    }

    return (
        <StyledView containerDetails>
            <Text style={{fontSize: 25, color: theme.colors.primary, textTransform: 'uppercase', fontWeight: 'bold'}}>Edit Contact: </Text>
            <View style={theme.detailsCointainer}>
                <Text style={theme.detailsLabel}>First Name:</Text>
                <TextInput 
                    value={input.firstName}
                    style={style.input} 
                    onChangeText={value => handleChange(value, 'firstName')}
                />
                <Text style={theme.detailsLabel}>Last Name:</Text>
                <TextInput 
                    value={input.lastName}
                    style={style.input} 
                    onChangeText={value => handleChange(value, 'lastName')}
                />
                <Text style={theme.detailsLabel}>Email:</Text>
                <TextInput 
                    value={input.email}
                    style={style.input} 
                    onChangeText={value => handleChange(value, 'email')}
                />
                <Text style={theme.detailsLabel}>Phone:</Text>
                <TextInput 
                    value={input.phone}
                    keyboardType="numeric"
                    style={style.input} 
                    onChangeText={value => handleChange(value, 'phone')}
                />
                <Button
                    title="Save"
                    onPress={handleSubmit}/>
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