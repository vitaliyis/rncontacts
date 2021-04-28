import {Text, View} from "react-native";
import React from "react";
import Container from "../../components/common/Container";
import Input from "../../components/common/Input";
import CustomButton from "../../components/common/CustomButton";
import LoginComponent from "../../components/Login";

const Login = () => {

  const [value, onChangeText] = React.useState("");

  return (
    <LoginComponent />
  )
}

export default Login;