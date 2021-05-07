import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_LIST} from '../../constants/routeNames';

const CreateContact = () => {
  const {navigate} = useNavigation();

  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    console.log('form => ', form);
    createContact(form)(contactsDispatch)(() => navigate(CONTACT_LIST));
  };

  return (
    <CreateContactComponent
      form={form}
      setForm={setForm}
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default CreateContact;
