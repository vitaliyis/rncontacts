import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import {GlobalContext} from "../context/Provider";

const AppNavContainer = () => {
  const {authState: {isLoggedIn}} = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }

    } catch (error) {
      console.log('error getUser => ', error)}
  }

  useEffect(() => {
    getUser();
  }, [isLoggedIn])

  console.log('isAuthenticated => ', isAuthenticated)

  return (
    <>
      {authLoaded ?
        <NavigationContainer>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
        : <ActivityIndicator />
      }
    </>
  )
}

export default AppNavContainer;

