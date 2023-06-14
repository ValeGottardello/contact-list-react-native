import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerWrapper: {
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
    },     
    containerButton: {
        backgroundColor: "#457b9d",
        borderRadius: 10,
        margin: 20,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
    },
})




export default function StyledView ({ containerWrapper, containerButton, children }) {

    const stylesContainer = [
        containerWrapper && styles.containerWrapper,
        containerButton && styles.containerButton,
        containerWrapper && styles.containerWrapper,
    ]

    return (
        <View style={stylesContainer}>
            {children}
        </View>
    )
}
