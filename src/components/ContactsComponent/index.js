import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal
        title="My Profile!"
        modalFooter={<></>}
        modalBody={
          <View>
            <Text>Hello from modal</Text>
          </View>
        }
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <CustomButton
        secondary
        title="Open Modal"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default ContactsComponent;
