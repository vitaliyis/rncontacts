import {Text, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";
import Container from "../../components/common/Container";
import {useNavigation} from "@react-navigation/native";

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions(
      {
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={toggleDrawer}>
              <Text style={{marginLeft: 10}}>NAV</Text>
            </TouchableOpacity>
          )
        }
      }
      )
  }, [])

  return (
    <Container>
      <Text>Hi from Contacts</Text>
    </Container>
  )
}

export default Contacts;