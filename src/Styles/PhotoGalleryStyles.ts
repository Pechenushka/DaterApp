import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {DEVICE_WIDTH, hp} from '../constants/Dimensions';

const PhotoGalleryStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },

  addPhotoButtonContainer: {
    width: '100%',
    marginTop: hp(10),
  },

  addPhotoButtonIcon: {
    width: hp(380),
    height: hp(70),
    resizeMode: 'contain',
  },

  photoItemIcon: {
    width: DEVICE_WIDTH / 2.4,
    height: hp(250),
    resizeMode: 'cover',
    borderRadius: 12,
  },

  photoItemContainer: {
    marginTop: hp(10),
  },

  photoItemDeleteButtonContainer: {
    borderRadius: 50,
    backgroundColor: COLORS.WHITE,
    height: hp(40),
    width: hp(40),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },

  photoListContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: hp(5),
    marginBottom: hp(10),
    paddingBottom: hp(35),
  },

  photoBlockContainer: {
    backgroundColor: COLORS.WHITE,
    marginTop: hp(15),
    alignItems: 'center',
    width: '96%',
    borderRadius: 12,
  },

  photoBlockHeaderContainer: {
    marginTop: hp(10),
    paddingBottom: hp(10),
    alignItems: 'center',
    width: '96%',
    borderBottomColor: COLORS.INPUT_BG,
    borderBottomWidth: 1.2,
  },

  photoBlockHeaderTitleText: {
    fontSize: hp(22),
    fontWeight: 'bold',
  },

  addAnonPhotoModalContainer: {
    flex: 1,
    backgroundColor: COLORS.BLURED_GRAY,
    alignItems: 'center',
  },

  addAnonPhotoModalContentContainer: {
    width: '90%',
    height: '20%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    marginTop: hp(120),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: hp(25),
  },

  addAnonPhotoModalWatchButton: {
    width: '80%',
    backgroundColor: COLORS.MAIN_BLUE,
    alignItems: 'center',
    marginTop: hp(15),
    paddingVertical: hp(12),
    borderRadius: 12,
  },

  addAnonPhotoModalChooseButton: {
    width: '80%',
    backgroundColor: COLORS.MAIN_BLUE,
    alignItems: 'center',
    marginTop: hp(15),
    paddingVertical: hp(8),
    borderRadius: 12,
  },

  addAnonPhotoModalHint: {
    fontSize: hp(16),
  },

  addAnonPhotoModalWatchButtonText: {
    fontSize: hp(16),
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  helpText: {
    fontSize: hp(14),
    marginLeft: hp(10),
    color: COLORS.PLACEHOLDER,
  },

  limitCountersContainer: {
    bottom: hp(5),
    right: hp(5),
    position: 'absolute',
  },

  limitCountersText: {
    fontSize: hp(17),
    color: COLORS.PLACEHOLDER,
  },

  avatarContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 180,
    borderColor: COLORS.WHITE,
    borderWidth: 2,
    width: hp(250),
    height: hp(250),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarImage: {
    width: hp(250),
    height: hp(250),
    resizeMode: 'cover',
  },
});

export {PhotoGalleryStyles};
