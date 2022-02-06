import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../../Core/BaseComponent';
import React from 'react';
import {Text, View} from 'react-native';
import {RoundAvatarModel} from '../../../Models/Components/Avatars/RoundAvatarModel';
import {AvatarStyles} from '../../../Styles/AvatarStyles';
import {IconHelper} from '../../../Common/HelperIcon';

type roundAvatarViewProps = baseComponentProps & {
  size: number;
  char: string;
};

class RoundAvatarView extends TypedBaseComponent<roundAvatarViewProps, RoundAvatarModel> {
  constructor(props: componentPropsWithModel<roundAvatarViewProps, RoundAvatarModel>) {
    super(props);
  }

  public render() {
    super.render();
    const collors = IconHelper.getColor(this.props.char);
    return (
      <View
        style={[
          AvatarStyles.roundAvatarContainer,
          {
            backgroundColor: collors.backgroundColor,
            borderColor: collors.borderColor,
            width: this.props.size,
            height: this.props.size,
          },
        ]}>
        <Text style={[AvatarStyles.roundAvatarText, {color: collors.color, fontSize: this.props.size / 1.5}]}>
          {this.props.char}
        </Text>
      </View>
    );
  }
}

export {RoundAvatarView};
