import React from "react";
import { ScrollView, View, Text, TouchableHighlight } from "react-native";
import StyledView from "../components/StyledView";
import theme from "../style/theme";
import { useLocation, useParams } from "react-router-native";
import { Link } from "react-router-native"


export default function ContactDetails () {
    
    const location = useLocation()

    const { name, lastname, phone, email } = location.state

    const { id } = useParams()


    const handleDeleteContact = () => {
        
    }
    
    return (
        <ScrollView>
            <View style={theme.detailsWrapper} key={id}>
                <View style={theme.detailsCointainer}>
                    <Text style={{fontSize: 25, color: theme.colors.primary, textTransform: 'uppercase', fontWeight: 'bold'}}>Contact Details: </Text>
                </View>
                <View style={theme.detailsCointainer}>
                    <Text style={theme.detailsLabel}>First Name:</Text>
                    <Text style={theme.detailsText}> {name} </Text>
                </View>
                <View style={theme.detailsCointainer}>                       
                    <Text style={theme.detailsLabel}>Last Name:</Text>
                    <Text style={theme.detailsText}> {lastname} </Text>
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
            <StyledView>
                <StyledView containerButton>   
                    <Link to={'/contacts/edit/:id'} state={{ name: name, lastname: lastname, phone: phone, email: email}} >
                        <Text>
                            Edit
                        </Text>
                    </Link> 
                </StyledView>
                <TouchableHighlight>
                    <StyledView containerButton>   
                        <Text>
                            Delete
                        </Text>
                    </StyledView>
                </TouchableHighlight>
            </StyledView>
        </ScrollView>
    )
}