import {View, Image, Text} from 'react-native';
import React from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

const CreateContactComponent = () => {
  return (
    <View style={styles.container}>
      <Container>
        <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.imageView} />
        <Text style={styles.chooseText}>Choose image</Text>
        <Input label="First name" placeholder="Enter First name" />
        <Input label="Last name" placeholder="Enter Last name" />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              // countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              // onSelect={(v) => {
              //   const phoneCode = v.callingCode[0];
              //   const cCode = v.cca2;
              //   setForm({...form, phoneCode, countryCode: cCode});
              // }}
            />
          }
          style={{marginLeft: 10}}
          iconPosition="left"
          label="Phone number"
          placeholder="Enter phone number"
        />

        <CustomButton primary title="Submit" />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
