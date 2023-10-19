import React from 'react';

import {
  baseComponentProps,
  componentPropsWithModel,
  TypedBaseComponent,
} from '../../../Core/BaseComponent';
import {Image, ImageStyle, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {HorizontalSelectorModel} from '../../../Models/Components/Inputs/HorizontalSelectorModel';
import {ScrollView} from 'react-native-gesture-handler';
import {BaseStyles} from '../../../Styles/BaseStyles';
import {ShadowWrapperView} from '../Wrappers/ShadowWrapperView';
import {COLORS} from '../../../constants/colors';

type horizontalSelectorViewProps = baseComponentProps & {
  ContentCoinerStyles?: ViewStyle;
  ItemContainerStylesExternal?: ViewStyle;
  ItemContainerStylesInternal?: ViewStyle;
  IconStyle?: ImageStyle;
  TextStyle?: TextStyle;
};

class HorizontalSelectorView extends TypedBaseComponent<
  horizontalSelectorViewProps,
  HorizontalSelectorModel
> {
  constructor(
    props: componentPropsWithModel<horizontalSelectorViewProps, HorizontalSelectorModel>,
  ) {
    super(props);
  }
  render() {
    super.render();
    return (
      <View style={[BaseStyles.w100, this.props.ContentCoinerStyles]}>
        <ScrollView contentContainerStyle={[BaseStyles.ph40]} horizontal={true}>
          {this.model.list.map(item => {
            return (
              <View style={[this.props.ItemContainerStylesExternal]} key={item.id}>
                <ShadowWrapperView>
                  <TouchableOpacity
                    onPress={() => {
                      this.model.onItemPress(item);
                    }}
                    style={[
                      this.props.ItemContainerStylesInternal,
                      this.model.activeItems.includes(item)
                        ? {backgroundColor: COLORS.MALE_COLOR}
                        : {backgroundColor: COLORS.WHITE},
                    ]}>
                    <Image style={[this.props.IconStyle]} source={item.icon} />
                    <Text
                      style={[
                        this.props.TextStyle,
                        this.model.activeItems.includes(item)
                          ? {color: COLORS.WHITE}
                          : {color: COLORS.BLACK},
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </ShadowWrapperView>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
0;
export {HorizontalSelectorView};
