import React from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import Constants from "expo-constants";
import theme from "../style/theme";
import { Link } from "react-router-native";



const styles = StyleSheet.create({
    appBar: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.tertiary,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 100,
    },
    tab: {
        color: theme.colors.primary,
        padding: 10,
        margin: 5,
        fontSize: theme.fontSizes.subheading,
        borderRadius: 5,
    }
})

const AppBarTab = ({active, children, to}) => {
    return (
        <Link to={to} style={styles.tab}>
            <Text>{children}</Text>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <AppBarTab active to='/'>Contacts</AppBarTab>
            <AppBarTab active to='/import'>Import</AppBarTab>
        </View>
    )
}

export default AppBar;