import React from 'react';
import Container from "../../components/common/Container";
import {Image, SafeAreaView, Text, TouchableOpacity, View, Alert} from "react-native";
import styles from "./styles";
import {SETTINGS} from "../../constants/routeNames";
import logoutUser from "../../context/actions/auth/logoutUser";
import Icon from "react-native-vector-icons/Fontisto";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const SideMenu = ({navigation, authDispatch}) => {

  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {logoutUser()(authDispatch)},
      }
      ]);
  }

  const menuItems = [
    {icon: <Icon size={17} name='player-settings'/>, name: 'Settings', onPress: () => navigation.navigate(SETTINGS)},
    {icon: <MaterialIcon size={17} name='logout'/>, name: 'Logout', onPress: () => handleLogout()},
  ]

  return (
    <SafeAreaView>
      <Container>
        <Image style={styles.logoImage} source={require('../../assets/images/logo.png')}/>

        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => {
            return (
              <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                <View style={styles.icon}>{icon}</View>
                <Text style={styles.itemText}>{name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default SideMenu;