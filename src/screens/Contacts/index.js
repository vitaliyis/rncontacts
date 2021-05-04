import {Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setOptions(
      {
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={toggleDrawer}>
              <Icon type='material' style={{padding: 10}} name='menu' size={25} />
            </TouchableOpacity>
          )
        }
      }
      );
  }, []);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  )
};

export default Contacts;
