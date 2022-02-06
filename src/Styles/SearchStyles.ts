import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const SearchStyles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.BLURED_GRAY,
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    paddingHorizontal: hp(15),
  },

  filterIcon: {
    resizeMode: 'contain',
    height: hp(28),
    width: hp(28),
  },

  filterButtonContainer: {
    paddingVertical: hp(20),
    paddingHorizontal: hp(5),
  },

  filterModalBackGround: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.BLURED_GRAY,
    alignItems: 'center',
  },

  filterModalContentContainer: {
    width: '90%',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    marginTop: hp(40),
    borderRadius: 10,
  },

  filterModalMainTilte: {
    fontWeight: 'bold',
    fontSize: hp(22),
    marginTop: hp(10),
  },

  filterModalCloseIcon: {
    resizeMode: 'contain',
    height: hp(28),
    width: hp(28),
  },

  filterModalCloseContainer: {
    position: 'absolute',
    top: hp(1),
    right: hp(1),
    padding: hp(5),
  },

  filterModalSubmitContainer: {
    paddingVertical: hp(9),
    paddingHorizontal: hp(30),
    borderRadius: 8,
    backgroundColor: COLORS.GREEN_BUTTON,
    marginVertical: hp(12),
  },

  filterModalSubmitText: {
    fontWeight: 'bold',
    fontSize: hp(18),
    color: COLORS.WHITE,
  },

  filterModalAgeInputContainer: {
    borderRadius: 8,
    backgroundColor: COLORS.BLURED_GRAY,
    width: hp(40),
    marginHorizontal: hp(5),
    maxWidth: hp(70),
  },

  sendMessageModalUserContainer: {
    backgroundColor: COLORS.INPUT_ICON_BG,
    flexDirection: 'row',
    marginTop: hp(25),
    borderRadius: 10,
    width: '70%',
  },

  sendMessageModalTextInputContainer: {
    marginTop: hp(25),
    width: '70%',
  },

  sendMessageModalMessageInputText: {
    width: '100%',
    maxHeight: hp(180),
  },
});

export {SearchStyles};
