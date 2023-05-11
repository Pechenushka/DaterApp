import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICONS} from '../../constants/icons';

type helpItemViewProps = {
  children: React.ReactNode;
  containerStyle: object;
  titleStyle: object;
  touchableStyles: object;
  iconStyle: object;
  title: string;
};

const HelpItemView = (props: helpItemViewProps) => {
  let [opened, onOpenedChange] = useState(false);
  const onPress = () => {
    onOpenedChange(!opened);
  };
  return (
    <View style={props.containerStyle}>
      <TouchableOpacity style={[props.touchableStyles]} onPress={onPress}>
        <Text style={props.titleStyle}>{props.title}</Text>
        {opened ? (
          <Image style={[props.iconStyle]} source={ICONS.dropDownIconActive} />
        ) : (
          <Image style={[props.iconStyle]} source={ICONS.dropDownIcon} />
        )}
      </TouchableOpacity>
      {opened && props.children}
    </View>
  );
};

export {HelpItemView};
