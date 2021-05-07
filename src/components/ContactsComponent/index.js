import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppModal from '../common/AppModal';
import Message from '../common/Message';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import styles from './styles';
import {CREATE_CONTACT} from '../../constants/routeNames';

const dataFake = [
  {
    id: 1,
    country_code: '10',
    first_name: 'John',
    last_name: 'Brown',
    phone_number: '1234567',
    contact_picture:
      'https://thumbs.dreamstime.com/b/head-businessman-abstract-geometric-avatar-face-icon-isolated-vector-flat-design-illustration-153396165.jpg',
    is_favorite: true,
  },
  {
    id: 2,
    country_code: '10',
    first_name: 'Steve',
    last_name: 'Wonder',
    phone_number: '1234567',
    contact_picture:
      'https://thumbs.dreamstime.com/b/head-businessman-abstract-geometric-avatar-face-icon-isolated-vector-flat-design-illustration-153396165.jpg',
    is_favorite: true,
  },
  {
    id: 3,
    country_code: '10',
    first_name: 'Casius',
    last_name: 'Clay',
    phone_number: '1234567',
    contact_picture:
      'https://media.wnyc.org/i/800/0/l/85/1/GettyImages-479796634.jpg',
    is_favorite: true,
  },
  {
    id: 4,
    country_code: '10',
    first_name: 'Muhamed',
    last_name: 'Ali',
    phone_number: '1234567',
    contact_picture:
      'https://p8.storage.canalblog.com/85/97/1323261/111016881_o.jpg',
    is_favorite: true,
  },
  {
    id: 5,
    country_code: '10',
    first_name: 'Mike',
    last_name: 'Tyson',
    phone_number: '1234567',
    contact_picture:
      'https://thumbs.dreamstime.com/b/head-businessman-abstract-geometric-avatar-face-icon-isolated-vector-flat-design-illustration-153396165.jpg',
    is_favorite: true,
  },
  {
    id: 6,
    country_code: '10',
    first_name: 'John',
    last_name: 'Brown',
    phone_number: '1234567',
    contact_picture: '',
    is_favorite: true,
  },
  {
    id: 7,
    country_code: '10',
    first_name: 'Steve',
    last_name: 'Wonder',
    phone_number: '1234567',
    contact_picture:
      'https://thumbs.dreamstime.com/b/head-businessman-abstract-geometric-avatar-face-icon-isolated-vector-flat-design-illustration-153396165.jpg',
    is_favorite: true,
  },
  {
    id: 8,
    country_code: '10',
    first_name: 'Casius',
    last_name: 'Clay',
    phone_number: '1234567',
    contact_picture:
      'https://media.wnyc.org/i/800/0/l/85/1/GettyImages-479796634.jpg',
    is_favorite: true,
  },
  {
    id: 9,
    country_code: '10',
    first_name: 'Muhamed',
    last_name: 'Ali',
    phone_number: '1234567',
    contact_picture:
      'https://p8.storage.canalblog.com/85/97/1323261/111016881_o.jpg',
    is_favorite: true,
  },
  {
    id: 10,
    country_code: '10',
    first_name: 'Mike',
    last_name: 'Tyson',
    phone_number: '1234567',
    contact_picture:
      'https://thumbs.dreamstime.com/b/head-businessman-abstract-geometric-avatar-face-icon-isolated-vector-flat-design-illustration-153396165.jpg',
    is_favorite: true,
  },
  {
    id: 11,
    country_code: '10',
    first_name: 'John',
    last_name: 'Brown',
    phone_number: '1234567',
    contact_picture: '',
    is_favorite: true,
  },
  {
    id: 12,
    country_code: '10',
    first_name: 'Steve',
    last_name: 'Wonder',
    phone_number: '1234567',
    contact_picture:
      'https://thumbs.dreamstime.com/b/head-businessman-abstract-geometric-avatar-face-icon-isolated-vector-flat-design-illustration-153396165.jpg',
    is_favorite: true,
  },
  {
    id: 13,
    country_code: '10',
    first_name: 'Casius',
    last_name: 'Clay',
    phone_number: '1234567',
    contact_picture:
      'https://media.wnyc.org/i/800/0/l/85/1/GettyImages-479796634.jpg',
    is_favorite: true,
  },
  {
    id: 14,
    country_code: '10',
    first_name: 'Muhamed',
    last_name: 'Ali',
    phone_number: '1234567',
    contact_picture:
      'https://p8.storage.canalblog.com/85/97/1323261/111016881_o.jpg',
    is_favorite: true,
  },
  {
    id: 15,
    country_code: '10',
    first_name: 'Mike',
    last_name: 'Tyson',
    phone_number: '1234567',
    contact_picture:
      'https://thumbs.dreamstime.com/b/head-businessman-abstract-geometric-avatar-face-icon-isolated-vector-flat-design-illustration-153396165.jpg',
    is_favorite: true,
  },
];

const ContactsComponent = ({data, loading, modalVisible, setModalVisible}) => {
  const {navigate} = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="Not contacts to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {
      contact_picture,
      first_name,
      last_name,
      phone_number,
      country_code,
    } = item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name[0]}
              </Text>
            </View>
          )}

          <View style={{marginLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}> {last_name}</Text>
            </View>

            <Text
              style={
                styles.phoneNumber
              }>{`${country_code} ${phone_number}`}</Text>
          </View>
        </View>

        <Icon name="right" type="ant" size={18} color={colors.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{backgroundColor: colors.white}}>
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

        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}

        {!loading && (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={renderItem}
              data={data}
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 150}}></View>}
              ItemSeparatorComponent={() => (
                <View
                  style={{height: 0.5, backgroundColor: colors.grey}}></View>
              )}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="plus" color={colors.white} size={21} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
