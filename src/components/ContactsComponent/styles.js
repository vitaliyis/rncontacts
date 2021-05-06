import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 17,
  },
  phoneNumber: {
    color: colors.grey,
  },
  floatingActionButton: {
    backgroundColor: 'red',
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 45,
    right: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
  },

  // actionText: {
  //   textAlign: 'center',
  //   maxWidth: '70@s',
  //   paddingTop: '5@s',
  //   fontSize: '14@s',
  //   color: colors.white,
  // },
  // actionTextStyle: {
  //   padding: '40@s',
  // },
});
