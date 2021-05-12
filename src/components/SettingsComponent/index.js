import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';

const SettingsComponent = ({
  modalVisible,
  setModalVisible,
  settingsOptions,
  prefArr,
}) => {
  return (
    <>
      <AppModal
        closeOnTouchOutside={false}
        title="Sort by"
        modalBody={
          <View>
            {prefArr.map(({name, selected, onPress}) => {
              return (
                <TouchableOpacity
                  onPress={onPress}
                  key={name}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 5,
                  }}>
                  {selected && <Icon size={17} name="check" />}
                  <Text style={{fontSize: 17, marginLeft: selected ? 15 : 30}}>
                    {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        }
        modalFooter={<></>}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <ScrollView style={{backgroundColor: colors.white}}>
        {settingsOptions.map(({title, subTitle, onPress}, index) => {
          return (
            <TouchableOpacity key={title} onPress={onPress}>
              <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                <Text style={{fontSize: 17}}>{title}</Text>
                {subTitle && (
                  <Text
                    style={{fontSize: 14, color: colors.grey, marginTop: 5}}>
                    {subTitle}
                  </Text>
                )}
              </View>
              <View style={{height: 0.5, backgroundColor: colors.grey}} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
