import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {DEVICE_WIDTH, hp} from '../constants/Dimensions';

const ProfileDetailsStyles = StyleSheet.create({
  profileModalBackGround: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.BLURED_GRAY,
    alignItems: 'center',
  },

  profileModalContentContainer: {
    width: '94%',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    borderRadius: 8,
    maxHeight: '90%',
    overflow: 'hidden',
    marginTop: hp(20),
  },

  profileModalCloseIcon: {
    resizeMode: 'contain',
    height: hp(40),
    width: hp(40),
  },

  profileModalCloseContainer: {
    position: 'absolute',
    top: hp(5),
    right: hp(5),
    height: hp(40),
    width: hp(40),
  },

  profileModalPrevButtonContainer: {
    position: 'absolute',
    top: '47%',
    left: hp(5),
    height: hp(50),
    width: hp(50),
  },

  profileModalButtonContainerInternal: {
    height: hp(50),
    width: hp(50),
    backgroundColor: COLORS.WHITE,
    borderRadius: 30,
  },

  profileCloseModalButtonContainerInternal: {
    height: hp(40),
    width: hp(40),
    backgroundColor: COLORS.WHITE,
    borderRadius: 30,
  },

  profileModalNextButtonContainer: {
    position: 'absolute',
    top: '47%',
    right: hp(5),
    height: hp(50),
    width: hp(50),
  },

  profileAvatarContainer: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  profileAvatarImage: {
    width: '95%',
    height: hp(500),
    resizeMode: 'cover',
  },

  profileUserName: {
    fontSize: hp(26),
    fontWeight: 'bold',
  },

  profileInfoText: {
    fontSize: hp(20),
  },

  profileLocationContainer: {
    marginVertical: hp(5),
    marginBottom: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
  },

  profilePreviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(5),
    flexWrap: 'wrap',
  },

  profilePropContainer: {
    paddingHorizontal: hp(10),
    paddingVertical: hp(10),
    marginRight: hp(5),
    marginBottom: hp(5),
    backgroundColor: COLORS.BLURED_GRAY3,
    borderRadius: 25,
  },

  profileMainTextWrapper: {
    width: '65%',
    justifyContent: 'center',
  },

  profileMainTextContainer: {
    backgroundColor: COLORS.INPUT_BG,
    padding: hp(4),
    borderRadius: 8,
    height: 'auto',
  },

  alertText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(18),
    fontWeight: 'bold',
    color: COLORS.DARK_GARY,
  },

  actionButtonColum: {
    width: '40%',
    alignItems: 'center',
  },

  actionButtonWrapper: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  actionButtonIcon: {
    height: hp(25),
    width: hp(25),
    resizeMode: 'contain',
  },

  actionButtonContainer: {
    height: hp(80),
    width: hp(80),
    flexDirection: 'row',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: COLORS.DARK_GARY,
  },

  actionButtonText: {
    fontSize: hp(26),
    marginTop: hp(-2),
  },

  reportButtonContainer: {
    height: hp(40),
    width: hp(280),
    flexDirection: 'row',
  },

  profilePhotosContainer: {
    marginTop: hp(10),
    borderRadius: 12,
  },

  profilePhotosIcon: {
    width: '100%',
    height: hp(400),
    resizeMode: 'cover',
    borderRadius: 12,
  },

  profilePhotosColumnIcon: {
    width: DEVICE_WIDTH / 2.4,
    height: hp(250),
    resizeMode: 'cover',
    borderRadius: 12,
  },

  contentContainer: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    marginTop: hp(160),
    borderRadius: 8,
  },

  goalItemContainerExternal: {
    marginRight: hp(10),
    marginTop: hp(10),
  },

  goalItemContainerInternal: {
    margin: hp(5),
    borderLeftWidth: 0.6,
    borderColor: COLORS.BLURED_GRAY3,
    paddingLeft: hp(3),
  },

  goalItemText: {
    fontSize: hp(17),
  },
});

export {ProfileDetailsStyles};
