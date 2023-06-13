import React from "react"
import { View, Text, StyleSheet } from "react-native"


export default function RepositoryContact( props ) {

    return (
        <View key={props.id} style={style.container}>
            <Text style={style.text}>Contact Name: <Text style={style.name}>{props.firstName} {props.lastName}</Text></Text>
            <Text>Phone: {props.phone}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    text:{
        color: "#888",
        fontWeight: "bold",
    },
    name:{
        color: "black",
        fontWeight: "bold",
    }

})