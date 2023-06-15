import StyledView from "../components/StyledView";
import { Text, View, Button } from "react-native";
import { useLocation, useParams } from "react-router-native";
import theme from "../style/theme";


export default function ContactEdit() {

    const location = useLocation()

    const { name, lastname, phone, email } = location.state

    const { id } = useParams()

    const handleEditContact = () => {}

    return (
        <StyledView containerWrapper>
            <Text style={{fontSize: 25, color: theme.colors.primary, textTransform: 'uppercase', fontWeight: 'bold'}}>Edit Contact: </Text>
            <View>
                <Text style={theme.detailsLabel}>First Name:</Text>
               {/* input and place holder */}
            </View> 
            <View>
                <Text style={theme.detailsLabel}>Last Name:</Text>
                
            </View> 
            <View>
                <Text style={theme.detailsLabel}>Email:</Text>
                
            </View>  
            <View>
                <Text style={theme.detailsLabel}>Phone:</Text>
                
            </View>  
            <View>
                <Button
                    title="Save"
                    onPress={handleEditContact}/>
            </View>
        </StyledView>
    )
}