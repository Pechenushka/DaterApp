import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const BaseStyles = StyleSheet.create({
  alignCenter: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  colorBlue: {
    color: COLORS.MAIN_BLUE,
  },

  colorGray: {
    color: COLORS.DARK_GARY,
  },

  fs18: {
    fontSize: hp(18),
  },

  fs22: {
    fontSize: hp(22),
  },

  fontBold: {
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
  },

  wrap: {
    flexWrap: 'wrap',
  },

  bigIcon: {
    resizeMode: 'contain',
    height: hp(25),
    width: hp(25),
  },

  defaultIcon: {
    resizeMode: 'contain',
    height: hp(20),
    width: hp(20),
  },

  smallIcon: {
    resizeMode: 'contain',
    height: hp(15),
    width: hp(15),
  },

  capitalize: {
    textTransform: 'capitalize',
  },

  uppercase: {
    textTransform: 'uppercase',
  },

  defaultIconContainer: {
    height: '100%',
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.INPUT_ICON_BG,
  },

  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },

  h100: {
    height: '100%',
  },

  h83: {
    height: '83%',
  },

  h10: {
    height: '30%',
  },

  h40px: {
    height: hp(40),
  },

  w100: {
    width: '100%',
  },

  w95: {
    width: '95%',
  },

  w90: {
    width: '90%',
  },

  w86: {
    width: '86%',
  },

  w80: {
    width: '80%',
  },

  w70: {
    width: '70%',
  },

  w65: {
    width: '65%',
  },

  w60: {
    width: '60%',
  },

  w50: {
    width: '50%',
  },

  w45: {
    width: '49%',
  },

  w40: {
    width: '40%',
  },

  w35: {
    width: '35%',
  },

  w32: {
    width: '32%',
  },

  w30: {
    width: '30%',
  },

  w20: {
    width: '20%',
  },

  w10: {
    width: '10%',
  },

  w15: {
    width: '15%',
  },

  w12: {
    width: '12%',
  },

  row: {
    flexDirection: 'row',
  },

  ai_c: {
    alignItems: 'center',
  },

  ai_fs: {
    alignItems: 'flex-start',
  },

  ai_fe: {
    alignItems: 'flex-end',
  },

  jc_sb: {
    justifyContent: 'space-between',
  },

  jc_c: {
    justifyContent: 'center',
  },

  jc_fe: {
    justifyContent: 'flex-end',
  },

  jc_fs: {
    justifyContent: 'flex-start',
  },

  ph40: {
    paddingHorizontal: hp(40),
  },

  pb10: {
    paddingBottom: hp(10),
  },

  pb5: {
    paddingBottom: hp(5),
  },

  pb70: {
    paddingBottom: hp(70),
  },

  pb100: {
    paddingBottom: hp(100),
  },

  pb150: {
    paddingBottom: hp(150),
  },

  pb200: {
    paddingBottom: hp(200),
  },

  pt10: {
    paddingTop: hp(10),
  },

  p5: {
    padding: hp(5),
  },

  mr10: {
    marginRight: hp(10),
  },

  mb10: {
    marginBottom: hp(10),
  },

  mt5: {
    marginTop: hp(5),
  },

  mt10: {
    marginTop: hp(10),
  },

  mt20: {
    marginTop: hp(20),
  },

  mt30: {
    marginTop: hp(30),
  },

  ml10: {
    marginLeft: hp(10),
  },

  ml20: {
    marginLeft: hp(20),
  },

  mv5: {
    marginVertical: hp(5),
  },

  ta_c: {
    textAlign: 'center',
  },

  bg_white: {
    backgroundColor: COLORS.WHITE,
  },

  standardColor: {
    color: COLORS.BLACK,
  },

  errorTextStyle: {
    color: COLORS.RED,
    fontSize: hp(11),
  },
});

export {BaseStyles};
