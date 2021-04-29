import React from 'react';
import Input from "../common/Input";
import {Text, Image, View, TouchableOpacity} from "react-native";
import CustomButton from "../common/CustomButton";
import Container from "../common/Container";
import styles  from './styles';
import {useNavigation} from "@react-navigation/native";
import {REGISTER} from "../../constants/routeNames";
import Message from "../common/Message";

const LoginComponent = ({onChange, onSubmit, error, loading}) => {
  const {navigate} = useNavigation()

  return (
    <Container>

      <Image style={styles.logoImage} source={require('../../assets/images/logo.png')}/>

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>


        <View style={styles.form}>

          {error && !error.error && <Message onDismiss={() => {}} danger message="invalid credentials"/>}

          {error?.error && <Message danger onDismiss message={error?.error}/>}

          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={(value) => onChange({name: 'userName', value})}
          />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(value) => onChange({name: 'password', value})}
          />

          <CustomButton
            primary
            title="Submit"
            onPress={onSubmit}
            loading={loading}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => navigate(REGISTER)}
            >
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </Container>
  )
}

export default LoginComponent;