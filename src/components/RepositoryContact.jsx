import React from "react"
import { TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import StyledView from "./StyledView"
import { Link } from "react-router-native"

export default function RepositoryContact( props ) {
    const {id, firstname: firstName, lastname: lastName, phone, email} = props
    return (
        <TouchableOpacity>
            <Link to={`/contacts/${id}`} state={{ firstName, lastName, phone, email}} >
                <StyledView key={id} containerWrapper>
                    <StyledText label>Contact Name: 
                        <StyledText name>{firstName} {lastName}</StyledText>
                    </StyledText>
                    <StyledText phone>Phone: {phone}</StyledText>
                </StyledView>
            </Link>
        </TouchableOpacity>
    )
}

