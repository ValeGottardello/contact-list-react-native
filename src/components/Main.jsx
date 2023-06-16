import React from "react";
import { NativeRouter, Route, Routes } from 'react-router-native';
import { View } from "react-native";
import list from "../data/list.js"
import AppBar from "./AppBar";
import ContactList from "../pages/ContactList";
import ContactImport from "../pages/ContactImport";
import ContactDetails from "../pages/ContactDetails";
import ContactEdit from "../pages/ContactEdit";


export default function Main () {

    return (
        <View style={{ flex: 1 }}>
            <AppBar/>
            <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/contacts/import" element={<ContactImport />} />
                <Route path="/contacts/:id" element={<ContactDetails />} />
                <Route path="/contacts/edit/:id" element={<ContactEdit />} />
            </Routes>   
        </View>
        
    )
}
