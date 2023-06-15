import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '../style/theme'
const styles = StyleSheet.create({
    containerWrapper: {
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
    },     
    containerButton: {
        backgroundColor: theme.colors.textSecondary,
        borderRadius: 10,
        marginVertical: 50,
        marginHorizontal: 80,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    containerDetails : {
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default function StyledView ({ containerWrapper, containerButton, containerDetails,children }) {

    const stylesContainer = [
        containerWrapper && styles.containerWrapper,
        containerButton && styles.containerButton,
        containerWrapper && styles.containerWrapper,
        containerDetails && styles.containerDetails,
    ]

    return (
        <View style={stylesContainer}>
            {children}
        </View>
    )
}
