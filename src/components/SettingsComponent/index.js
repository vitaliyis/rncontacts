import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../assets/theme/colors';

const SettingsComponent = ({settingsOptions}) => {
  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      {settingsOptions.map(({title, subTitle, onPress}, index) => {
        return (
          <TouchableOpacity key={title}>
            <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
              <Text style={{fontSize: 17}}>{title}</Text>
              {subTitle && (
                <Text style={{fontSize: 14, color: colors.grey, marginTop: 5}}>
                  {subTitle}
                </Text>
              )}
            </View>
            <View style={{height: 0.5, backgroundColor: colors.grey}} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default SettingsComponent;
