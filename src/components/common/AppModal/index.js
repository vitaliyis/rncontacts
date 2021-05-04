import React from 'react';
import {Modal, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from './styles';
import Icon from '../Icon';

const AppModal = ({title, modalBody, modalFooter, modalVisible, setModalVisible}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={styles.wrapper}
      >
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Icon size={27} type="evil" name="close" />
              <Text style={styles.title}>{title || 'RNContats'}</Text>
              <View />
              <View />
              <View />
              <View />
              <View />
            </View>
            <View style={styles.footerSeparator} />
            <View style={styles.body}>
              {modalBody}
            </View>
            {modalFooter}
            {
              !modalFooter &&
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            }
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
