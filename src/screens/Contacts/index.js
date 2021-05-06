import {Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  console.log('data => ', data);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useEffect(() => {
    setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={toggleDrawer}>
            <Icon type="material" style={{padding: 10}} name="menu" size={25} />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
    />
  );
};

export default Contacts;
