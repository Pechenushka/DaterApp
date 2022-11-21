import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const AvatarStyles = StyleSheet.create({
  roundAvatarContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 90,
    borderColor: COLORS.WHITE,
    borderWidth: 2,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundAvatarImage: {
    resizeMode: 'cover',
  },

  isOnlineView: {
    height: hp(13),
    width: hp(13),
    backgroundColor: COLORS.GREEN_BUTTON,
    position: 'absolute',
    borderRadius: 50,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
  },

  coverAvatarContainer: {
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderColor: COLORS.WHITE,
    borderWidth: 2,
    overflow: 'hidden',
    width: '100%',
    height: '68%',
  },

  coverAvatarImage: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
});

export {AvatarStyles};
