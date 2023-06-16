import React from "react";
import { ScrollView, View, Text, TouchableHighlight } from "react-native";
import theme from "../style/theme";
import { useLocation, useParams, useNavigate } from "react-router-native";
import { Link } from "react-router-native"
import deleteContacts from "../utils/deleteContacts";
import Message from "../components/Message";
import StyledText from "../components/StyledText";
import Details from "../components/Details";



export default function ContactDetails () {
    
    const navigate = useNavigate()
    const location = useLocation()
    const { firstName, lastName, phone, email } = location.state
    const { id } = useParams()

    const handleDeleteContact = () => {
        deleteContacts(id).then(res => {
            if (res) {
                Message('Contact Deleted', 'Contact has been deleted')
            }
        })
        navigate(`/`)
    }
    
    return (
        <ScrollView>
            <View style={theme.detailsWrapper} key={id}>
                <View style={theme.detailsCointainer}>
                    <Text style={{fontSize: 20, color: theme.colors.primary, textTransform: 'uppercase', fontWeight: 'bold'}}>Contact Details: </Text>
                </View>
                <Details label={'First Name'} detail={firstName}/>
                <Details label={'Last Name'} detail={lastName}/>
                <Details label={'Phone'} detail={phone}/>
                <Details label={'Email'} detail={email}/>
            </View>
            <View style={style.container}>
                <Link to={`/contacts/edit/${id}`} state={{ name: firstName, lastname: lastName, phone: phone, email: email}}  style={style.button}>
                    <StyledText label>
                        Edit
                    </StyledText>
                </Link> 
                <TouchableHighlight  
                    style={style.button}
                    onPress={handleDeleteContact} >
                    <StyledText label>
                    Delete
                    </StyledText> 
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}


const style = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#edede9',
        color: theme.colors.primary, 
        fontSize: 20,
        textAlign:'center', 
        alignItems:'center',
        borderWidth: 2,
        width: 100,
        borderColor: theme.colors.tertiary,
        borderRadius: 5,
        padding: 8,
        margin: 15
    }
}