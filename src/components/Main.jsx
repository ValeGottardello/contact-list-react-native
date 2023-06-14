import React from "react";
import { NativeRouter, Route, Routes } from 'react-router-native';
import { View } from "react-native";
import list from "../data/list.js"
import AppBar from "./AppBar";
import ContactList from "./ContactList";
import ContactImport from "./ContactImport";

export default function Main () {

    return (
        <View style={{ flex: 1 }}>
            <AppBar/>
            <Routes>
                <Route path="/" element={<ContactList list={list}/>} />
                <Route path="/import" element={<ContactImport />} />
            </Routes>   
        </View>
    )
}
