import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import RepositoryContact from "../components/RepositoryContact";
import StyledText from "../components/StyledText";
import useContacts from "../hooks/useContacts";

const ContactList = () => {
   
    const contacts = useContacts()

    return (
      <>
        {contacts.length === 0 ? (
          <StyledText title>No imported contacts</StyledText>
        ) : (
          !contacts ? (
            <StyledText title>Loading...</StyledText>
          ) : (
            <FlatList
            data={contacts}
            ItemSeparatorComponent={() => <View style={{ height: 3, backgroundColor: "#CED0CE" }} />}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: contact }) => (
              <RepositoryContact {...contact} />
            )}
          />
          )
        )}
      </>
    )
}
export default ContactList;