import React from 'react';
import Input from "../common/Input";
import {Text, Image, View, TouchableOpacity} from "react-native";
import CustomButton from "../common/CustomButton";
import Container from "../common/Container";
import styles  from './styles';
import {useNavigation} from "@react-navigation/native";
import {LOGIN} from "../../constants/routeNames";

const RegisterComponent = ({form, errors, onChange, onSubmit, loading, error}) => {
  const {navigate} = useNavigation()

  return (
    <Container>

      <Image style={styles.logoImage} source={require('../../assets/images/logo.png')}/>

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>

          {error?.error && <Text>{error.error}</Text>}

          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={(value) => onChange({name: 'userName', value})}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={(value) => onChange({name: 'firstName', value})}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last name"
            iconPosition="right"
            placeholder="Enter Last name"
            onChangeText={(value) => onChange({name: 'lastName', value})}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            onChangeText={(value) => onChange({name: 'email', value})}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={(value) => onChange({name: 'password', value})}
            error={errors.password || error?.password?.[0]}
          />

          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigate(LOGIN)}
            >
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </Container>
  )
}

export default RegisterComponent;