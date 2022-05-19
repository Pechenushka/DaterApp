import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import {app} from '../../Core/AppImpl';
import {TypedBaseComponent, componentPropsWithModel, baseComponentProps} from '../../Core/BaseComponent';
import {_} from '../../Core/Localization';
import {LocalizationView} from '../../Views/Components/LocalizationViews/LocalizationView';
import {DrawerContentModel} from './DrawerContentModel';
import {DrawerItemView} from './DrawerItem/DrawerItemView';

type drawerContentViewProps = baseComponentProps & {};

class DrawerContentView extends TypedBaseComponent<drawerContentViewProps, DrawerContentModel> {
  constructor(props: componentPropsWithModel<drawerContentViewProps, DrawerContentModel>) {
    super(props);
  }

  public onContactUsPress = async () => {
    Linking.openURL('mailto:smsoftfeedback@gmail.com');
  };

  render() {
    super.render();
    return (
      <View style={[]}>
        <LocalizationView {...this.childProps(app.localization)} />
        <View style={this.styles.container}>
          <TouchableOpacity style={this.styles.button} onPress={this.onContactUsPress}>
            <Text style={this.styles.label}>{_.lang.feedback}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: hp(30),
      paddingHorizontal: wp(25),
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingVertical: hp(15),
      borderRadius: hp(5),
    },
    label: {
      color: 'rgba(0, 0, 0, 0.7)',
      fontSize: wp(20),
    },
  });
}
export {DrawerContentView};
