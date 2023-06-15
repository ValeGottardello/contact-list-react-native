import React from "react"
import { TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import StyledView from "./StyledView"
import { Link } from "react-router-native"

export default function RepositoryContact( props ) {

    return (
        <TouchableOpacity>
            <Link to={`/contacts/${props.id}`} state={{ name: props.firstname, lastname: props.lastname, phone:props.phone, email:props.email}} >
                <StyledView key={props.id} containerWrapper>
                    <StyledText label>Contact Name: 
                        <StyledText name>{props.firstname} {props.lastname}</StyledText>
                    </StyledText>
                    <StyledText phone>Phone: {props.phone}</StyledText>
                </StyledView>
            </Link>
        </TouchableOpacity>
    )
}

