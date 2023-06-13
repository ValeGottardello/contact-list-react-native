import React from "react";
import { Text, View} from "react-native";
import ContactList from "./ContactList";
import ContactImport from "./ContactImport";
import list from "../data/list.js"

export default function Main () {
    return (
        <View>
            <Text>Contact List Application</Text>
            <ContactImport />
            {/* <ContactList list={list}/> */}
        </View>
    )
}