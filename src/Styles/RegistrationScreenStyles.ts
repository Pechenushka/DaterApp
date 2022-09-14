import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp, wp} from '../constants/Dimensions';

const RegistrationScreenStyles = StyleSheet.create({
  mainTitleStyles: {
    paddingTop: hp(50),
    color: COLORS.BLACK,
    fontSize: hp(22),
    fontWeight: 'bold',
  },

  inputContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.INPUT_BG,
    height: hp(45),
    marginTop: hp(20),
  },

  inputText: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.BLACK,
    fontSize: hp(18),
  },

  dateText: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.BLACK,
    fontSize: hp(20),
    fontWeight: 'bold',
    marginRight: hp(10),
    textTransform: 'capitalize',
  },

  dateContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: hp(20),
    alignItems: 'center',
  },

  mainContainer: {
    backgroundColor: COLORS.SCREEN_BG,
    alignItems: 'center',
  },
  formContainer: {
    width: '86%',
    height: '90%',
    marginTop: hp(50),
    backgroundColor: COLORS.WHITE,
    borderRadius: 22,
    alignItems: 'center',
    paddingBottom: hp(20),
  },

  scrollContainer: {
    width: '100%',
  },

  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    maxHeight: hp(630),
    paddingHorizontal: wp(20),
  },

  loginButton: {
    marginTop: hp(30),
    width: '75%',
    height: hp(50),
    backgroundColor: COLORS.GREEN_BUTTON,
    borderRadius: 8,
  },

  loginButtonText: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.WHITE,
    fontSize: hp(18),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  locationContainer: {
    borderRadius: 10,
    borderColor: COLORS.PLACEHOLDER,
    borderWidth: 1,
    width: hp(250),
    marginTop: hp(40),
    alignItems: 'center',
  },

  locationTitleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(18),
    fontWeight: 'bold',
    backgroundColor: COLORS.WHITE,
    top: hp(-14),
    paddingHorizontal: hp(5),
    textAlign: 'center',
  },

  infoItemContainer: {
    width: '28%',
  },
  selectionsItemContainer: {
    width: '67%',
  },

  goalsContainer: {
    width: '95%',
    alignItems: 'center',
    paddingBottom: hp(10),
  },

  goalsItem: {
    width: '100%',
    marginTop: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
  },

  goaltTitleItem: {
    width: '35%',
  },

  goalSelectionItem: {
    width: '65%',
  },

  infoItemWrapper: {
    marginBottom: hp(10),
    justifyContent: 'center',
    flexDirection: 'row',
  },

  infoItemText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(16),
    marginBottom: hp(10),
    textTransform: 'capitalize',
  },

  agreementText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(16),
    color: COLORS.DARK_GARY,
    marginLeft: hp(6),
  },

  agreementTextLink: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(16),
    color: COLORS.LINK_BLUE,
    marginLeft: hp(6),
  },

  agreementTextContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export {RegistrationScreenStyles};
