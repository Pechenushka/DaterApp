import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp, wp} from '../constants/Dimensions';

const LoginScreenStyles = StyleSheet.create({
  mainTitleStyles: {
    paddingTop: hp(30),
    color: COLORS.BLACK,
    fontSize: hp(22),
    fontWeight: 'bold',
  },

  inputContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.INPUT_BG,
    height: hp(45),
  },

  inputText: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.BLACK,
    fontSize: hp(18),
  },

  mainContainer: {
    backgroundColor: COLORS.SCREEN_BG,
    alignItems: 'center',
  },
  formContainer: {
    width: '75%',
    marginTop: hp(100),
    backgroundColor: COLORS.WHITE,
    borderRadius: 22,
    alignItems: 'center',
  },

  inputsContainer: {
    paddingTop: hp(25),
    width: '100%',
    paddingHorizontal: wp(20),
    alignItems: 'center',
    paddingBottom: hp(20),
  },

  loginButton: {
    marginTop: hp(20),
    width: '100%',
    height: hp(40),
    backgroundColor: COLORS.MAIN_BLUE,
    borderRadius: 8,
  },

  loginButtonText: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.WHITE,
    fontSize: hp(16),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  registrateButton: {
    width: '100%',
    height: hp(40),
    borderRadius: 8,
    marginBottom: hp(5),
    backgroundColor: COLORS.MAIN_BLUE,
  },

  googleSignInButton: {
    width: '100%',
    height: hp(50),
    borderRadius: 8,
    marginTop: hp(10),
  },

  registrateButtonText: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.WHITE,
    fontSize: hp(16),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export {LoginScreenStyles};
