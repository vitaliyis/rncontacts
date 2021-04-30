import {Text, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";
import Container from "../../components/common/Container";
import {useNavigation} from "@react-navigation/native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions(
      {
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={toggleDrawer}>
              <MaterialIcon style={{padding: 10}} name='menu' size={25} />
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