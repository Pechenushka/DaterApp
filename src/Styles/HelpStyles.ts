import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const HelpStyles = StyleSheet.create({
  helpItemContainer: {
    width: '90%',
    backgroundColor: COLORS.WHITE,
    marginTop: hp(10),
    borderRadius: 8,
  },
  helpItemTouchable: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpItemTitleText: {
    fontSize: hp(16),
    fontWeight: 'bold',
  },
  helpIcon: {
    position: 'absolute',
    alignSelf: 'center',
    right: 10,
    height: hp(20),
    width: hp(20),
    resizeMode: 'contain',
  },
  helpItemDescContainer: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    marginVertical: hp(15),
  },
  helpItemDescContentContainer: {
    width: '95%',
    borderTopWidth: 2,
    borderColor: COLORS.BLURED_GRAY2,
  },
});

export {HelpStyles};
