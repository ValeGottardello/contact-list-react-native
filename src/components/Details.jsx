import React from 'react';
import { View, Text } from 'react-native';
import theme from '../style/theme';

const Details = ({ label, detail }) => {
    return  (
        <View style={theme.detailsCointainer}>
            <Text style={theme.detailsLabel}>{label}:</Text>
            <Text style={theme.detailsText}> {detail ? detail : ""} </Text>
        </View>
    )
}
export default Details;