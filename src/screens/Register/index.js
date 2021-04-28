import {Text, View} from "react-native";
import React, {useCallback, useContext, useEffect, useState} from "react";
import RegisterComponent from "../../components/SignUp";
import register, {clearAuthState} from "../../context/actions/auth/register";
import {GlobalContext} from "../../context/Provider";
import {useNavigation, useFocusEffect} from "@react-navigation/native";
import {LOGIN} from "../../constants/routeNames";

const Register = () => {
  const {navigate} = useNavigation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {authDispatch, authState: {error, loading, data}} = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);


  useFocusEffect(
    useCallback(() => {
      if (data || error) {
        clearAuthState()(authDispatch)
      }
    }, [data, error])
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => ({...prev, [name]: 'This field needs min 6 characters'}))
        } else {
          setErrors(prev => ({...prev, [name]: null}))
        }
      } else {
        setErrors(prev => ({...prev, [name]: null}))
      }

    } else {
      setErrors(prev => ({...prev, [name]: 'This field is required'}))
    }
  }

  const onSubmit = () => {
    //validation

    if (!form.userName) {
      setErrors(prevState => {
        return {...prevState, userName: 'Pleas add a username'}
      })
    }

    if (!form.firstName) {
      setErrors(prevState => {
        return {...prevState, firstName: 'Pleas add a first name'}
      })
    }

    if (!form.lastName) {
      setErrors(prevState => {
        return {...prevState, lastName: 'Pleas add a last name'}
      })
    }

    if (!form.email) {
      setErrors(prevState => {
        return {...prevState, email: 'Pleas add a email'}
      })
    }

    if (!form.password) {
      setErrors(prevState => {
        return {...prevState, password: 'Pleas add a password'}
      })
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      console.log('success')
      register(form)(authDispatch)
    }
  }

  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  )
}

export default Register;