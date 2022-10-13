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
});

export {AvatarStyles};
