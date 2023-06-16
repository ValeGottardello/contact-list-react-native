import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../style/theme.js'

const styles = StyleSheet.create({
    label: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.textSecondary,
    },
    name: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.bold,   
        textAlign: theme.textAlign.left,
    },
    phone: {
        fontSize: theme.fontSizes.body, 
        color: theme.colors.textPrimary,
    },
    title: {
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
        marginTop: 50,
        textAlign: theme.textAlign.center,
    },
    subtitle: {
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textSecondary,
        textTransform: "uppercase",
        textAlign: theme.textAlign.center,
        marginTop: 20,
    }
})


export default function StyledText ({ label, name, phone, children, title, subtitle }) {

    const stylesText = [
        label && styles.label,
        name && styles.name,
        phone && styles.phone,
        title && styles.title,
        subtitle && styles.subtitle,
    ]

    return (
        <Text style={stylesText}>
            {children}
        </Text>
    )
}
