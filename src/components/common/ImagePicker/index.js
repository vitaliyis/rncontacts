import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePickerCropper from 'react-native-image-crop-picker';
import styles from './styles';
import Icon from '../Icon';
import colors from '../../../assets/theme/colors';

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon color={colors.grey} size={21} name="camera" />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {});
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {});
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      height={300}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => {
          return (
            <TouchableOpacity
              onPress={onPress}
              style={styles.pickerOption}
              key={name}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
