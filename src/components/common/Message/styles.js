import {StyleSheet} from 'react-native';
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 13,
    // marginTop: 5,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  loaderSection: {
    flexDirection: 'row'
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12
  }
})