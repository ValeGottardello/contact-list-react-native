import React from "react";
import { Text, View} from "react-native";
import ContactList from "./ContactList";
import list from "../data/list.js"

export default function Main () {
    return (
        <View>
            <Text>Contact List Application</Text>
            <ContactList list={list}/>
        </View>
    )
}