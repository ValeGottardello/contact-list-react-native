import React from "react";
import { ScrollView, View, Text, TouchableHighlight } from "react-native";
import StyledView from "../components/StyledView";
import theme from "../style/theme";
import { useLocation, useParams } from "react-router-native";
import { Link } from "react-router-native"


export default function ContactDetails () {
    
    const location = useLocation()
    const { firstName, lastName, phone, email } = location.state
    const { id } = useParams()


    const handleDeleteContact = () => {
        
    }
    
    return (
        <ScrollView>
            <View style={theme.detailsWrapper} key={id}>
                <View style={theme.detailsCointainer}>
                    <Text style={{fontSize: 20, color: theme.colors.primary, textTransform: 'uppercase', fontWeight: 'bold'}}>Contact Details: </Text>
                </View>
                <View style={theme.detailsCointainer}>
                    <Text style={theme.detailsLabel}>First Name:</Text>
                    <Text style={theme.detailsText}> {firstName} </Text>
                </View>
                <View style={theme.detailsCointainer}>                       
                    <Text style={theme.detailsLabel}>Last Name:</Text>
                    <Text style={theme.detailsText}> {lastName} </Text>
                </View>
                <View style={theme.detailsCointainer}>
                    <Text style={theme.detailsLabel}>Phone: </Text>
                    <Text style={theme.detailsText}>{phone}</Text>
                </View>
                <View style={theme.detailsCointainer}>
                    <Text style={theme.detailsLabel}>Email: </Text>
                    <Text style={theme.detailsText}>{phone}</Text> 
                </View>
            </View>
            <View style={style.container}>
                <View style={style.buttonWrapper}>   
                    <Link to={`/contacts/edit/${id}`} state={{ name: firstName, lastname: lastName, phone: phone, email: email}}  style={style.buttons}>
                        <Text style={style.buttonText}>
                            Edit
                        </Text>
                    </Link> 
                </View>
                <View style={style.buttonWrapper}>   
                    <TouchableHighlight>
                        <Text style={style.buttonText}>
                            Delete
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ScrollView>
    )
}


const style = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonWrapper: {
        backgroundColor: theme.colors.primary,
        width: '30%',
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 30,
        justifyContent: 'center',
    },
    buttonText: {
        color: theme.colors.tertiary, 
        fontWeight:'bold', 
        textAlign:'center', 
        alignItems:'center'
    }
}