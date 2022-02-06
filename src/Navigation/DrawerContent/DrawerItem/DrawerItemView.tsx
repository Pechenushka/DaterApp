import React from 'react';
import {View, StyleSheet} from 'react-native';

import {hp, wp} from '../../../constants/Dimensions';
import {app} from '../../../Core/AppImpl';
import {TypedBaseComponent, componentPropsWithModel, baseComponentProps} from '../../../Core/BaseComponent';
import {LocalizationView} from '../../../Views/Components/LocalizationViews/LocalizationView';
import {DrawerItemModel} from './DrawerItemModel';

type drawerItemViewProps = baseComponentProps & {};

class DrawerItemView extends TypedBaseComponent<drawerItemViewProps, DrawerItemModel> {
  constructor(props: componentPropsWithModel<drawerItemViewProps, DrawerItemModel>) {
    super(props);
  }

  render() {
    super.render();
    return (
      <View style={styles.container}>
        <LocalizationView {...this.childProps(app.localization)} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
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

export {DrawerItemView};
