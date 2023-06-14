import React from "react";
import { StyleSheet, View, Text, TouchableHighlight} from "react-native";
import Constants from "expo-constants";
import theme from "../style/theme";
import { Link } from "react-router-native";


const styles = StyleSheet.create({
    container: { 
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.appBar.secondary,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 100,
    },
    text: {
        color: theme.appBar.primary,
    }
})

const AppBarTab = ({active, children, to}) => {
    return (
        <Link to={to} component={TouchableHighlight}>
            <Text style={styles.text}>{children}</Text>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab active to='/'>Contacts</AppBarTab>
            <AppBarTab active to='/import'>Import</AppBarTab>
        </View>
    )
}

export default AppBar;