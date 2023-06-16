import React, { useEffect, useState } from "react";
import { View, FlatList, TextInput, Text,TouchableHighlight } from "react-native";
import RepositoryContact from "../components/RepositoryContact";
import StyledText from "../components/StyledText";
import StyledView from "../components/StyledView";
import fetchContacts from "../utils/fetchContacts";
import theme from "../style/theme";

const ContactList = () => {
   
  const [contacts, setContacts] = useState([])
  const [filContacts, setFilContacts] = useState([])

  useEffect(() => {

    fetchContacts()
      .then((data) => {
        setFilContacts(data) 
        setContacts(data)
      })  
      .catch((error) => console.log(error))

  }, [])

  const handleOrder = () => {
    const orderContacts = contacts.sort((a, b) => {
      if (a.firstname && b.firstname) {
        const nameA = a.firstname.toUpperCase()
        const nameB = b.firstname.toUpperCase()

        if (nameA < nameB) {
          return -1
        }

        if (nameA > nameB) {
          return 1
        }
      }
       return 0
    })
    setContacts([...orderContacts])
  }

  const handleSearchBar = (text) => {

    const filteredContacts = contacts.filter((contact) => {
        if (contact.firstname && contact.lastname && contact.email) {
          const contactName = contact.firstname.toUpperCase()
          const contactLastName = contact.lastname.toUpperCase()
          const contactEmail = contact.email.toUpperCase()
          const textData = text.toUpperCase()
          return contactName.includes(textData) || contactLastName.includes(textData) || contactEmail.includes(textData)
        }
    })

    setFilContacts([...filteredContacts])
  }

  return (
    <>
      <View>
        <StyledText subtitle>Search</StyledText>
        <StyledView barSearch>
          <TextInput 
            style={style.input}
            onChangeText={handleSearchBar}
            placeholder="John Smith or j@example.com"/>
          <TouchableHighlight 
            style={theme.buttons}
            onPress={handleOrder}>
              <Text>
                Order alphabetically
              </Text>
          </TouchableHighlight>
        </StyledView>
      </View>
      {filContacts.length === 0 ? (
        <StyledText title>No imported contacts</StyledText>
      ) : (
        !filContacts ? (
          <StyledText label>Loading...</StyledText>
        ) : (
          <FlatList
            data={filContacts}
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

const style = {
  input: {
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: theme.colors.primary,
      padding: 8,
      marginHorizontal: 10,
      width: '40%',
      borderRadius: 5,
      color: theme.colors.primary,
  }
}