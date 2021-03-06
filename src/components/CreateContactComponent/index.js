import {View, Image, Text, Switch, TouchableOpacity} from 'react-native';
import React from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
  form,
  setForm,
  error,
  loading,
  onChangeText,
  onSubmit,
  toggleValueChange,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  console.log('localFile =======> ', localFile);
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity>
        <Input
          label="First name"
          placeholder="Enter First name"
          onChangeText={(value) => onChangeText({name: 'firstName', value})}
          error={error?.first_name?.[0]}
        />
        <Input
          label="Last name"
          placeholder="Enter Last name"
          onChangeText={(value) => onChangeText({name: 'lastName', value})}
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={(v) => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, phoneCode, countryCode: cCode});
              }}
            />
          }
          style={{marginLeft: 10}}
          iconPosition="left"
          onChangeText={(value) => onChangeText({name: 'phoneNumber', value})}
          label="Phone number"
          placeholder="Enter phone number"
          error={error?.phone_number?.[0]}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17}}>Add to favorites</Text>
          <Switch
            trackColor={{false: '#767577', true: colors.primary}}
            thumbColor="#FFF"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
};

export default CreateContactComponent;
