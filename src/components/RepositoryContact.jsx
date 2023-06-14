import React from "react"
import { View, Text, StyleSheet,TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import StyledView from "./StyledView"

export default function RepositoryContact( props ) {

    return (
        <TouchableOpacity>
            <StyledView key={props.id} containerWrapper>
                <StyledText label>Contact Name: 
                    <StyledText name>{props.firstname} {props.lastname}</StyledText>
                </StyledText>
                <StyledText phone>Phone: {props.phone}</StyledText>
            </StyledView>
        </TouchableOpacity>
    )
}

