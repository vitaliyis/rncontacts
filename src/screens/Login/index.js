import React, {useContext, useState} from "react";
import LoginComponent from "../../components/Login";
import {useNavigation} from "@react-navigation/native";
import {GlobalContext} from "../../context/Provider";
import loginUser from "../../context/actions/auth/loginUser";

const Login = () => {

  const [form, setForm] = useState({});
  const {authDispatch, authState: {error, loading}} = useContext(GlobalContext);

  const onSubmit = () => {
    console.log('submit')
    if (form.userName && form.password) {
      loginUser(form)(authDispatch)
    }
  }

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  }

  return (
    <LoginComponent
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  )
}

export default Login;