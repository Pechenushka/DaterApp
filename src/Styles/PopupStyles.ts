import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const PopupStyles = StyleSheet.create({
  popupContainer: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  contentContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: hp(5),
  },

  iconStyles: {
    resizeMode: 'contain',
    height: hp(40),
    width: hp(40),
  },

  titleTextStyle: {
    fontWeight: 'bold',
    fontSize: hp(20),
    color: COLORS.WHITE,
  },

  messageTextStyle: {
    fontSize: hp(16),
    color: COLORS.WHITE,
    textAlign: 'center',
  },
});

export {PopupStyles};
