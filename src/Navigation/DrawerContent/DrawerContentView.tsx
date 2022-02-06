import React from 'react';
import {View} from 'react-native';
import {TypedBaseComponent, componentPropsWithModel, baseComponentProps} from '../../Core/BaseComponent';
import {DrawerContentModel} from './DrawerContentModel';
import {DrawerItemView} from './DrawerItem/DrawerItemView';

type drawerContentViewProps = baseComponentProps & {};

class DrawerContentView extends TypedBaseComponent<drawerContentViewProps, DrawerContentModel> {
  constructor(props: componentPropsWithModel<drawerContentViewProps, DrawerContentModel>) {
    super(props);
  }

  render() {
    super.render();
    return (
      <View style={[]}>
        <DrawerItemView {...this.childProps(this.model.drawerButton)} />
      </View>
    );
  }
}
export {DrawerContentView};
