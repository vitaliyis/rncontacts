import React, {useContext, useEffect, useState} from "react";
import LoginComponent from "../../components/Login";
import {useNavigation, useRoute} from "@react-navigation/native";
import {GlobalContext} from "../../context/Provider";
import loginUser from "../../context/actions/auth/loginUser";

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignUp, setJustSignUp] = useState(false);
  const {params} = useRoute()
  const {authDispatch, authState: {error, loading}} = useContext(GlobalContext);

  useEffect(() => {
    if (params?.data) {
      setJustSignUp(true);
      setForm({...form, userName: params.data.username});
    }
  }, [params])

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch)
    }
  }

  const onChange = ({name, value}) => {
    setJustSignUp(false);
    setForm({...form, [name]: value});
  }

  return (
    <LoginComponent
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      justSignUp={justSignUp}
    />
  )
}

export default Login;