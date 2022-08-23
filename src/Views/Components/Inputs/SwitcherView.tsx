import React from 'react';

import {
  baseComponentProps,
  componentPropsWithModel,
  TypedBaseComponent,
} from '../../../Core/BaseComponent';
import {TouchableOpacity, View} from 'react-native';
import {SwitcherModel} from '../../../Models/Components/Inputs/SwitcherModel';
import {SwitcherComponentStyles} from '../../../Styles/SwitcherComponentStyles';

type switcherViewProps = baseComponentProps & {};

class SwitcherView extends TypedBaseComponent<switcherViewProps, SwitcherModel> {
  constructor(props: componentPropsWithModel<switcherViewProps, SwitcherModel>) {
    super(props);
  }
  render() {
    super.render();
    return (
      <TouchableOpacity
        style={[
          this.model.value
            ? SwitcherComponentStyles.itemContainerActive
            : SwitcherComponentStyles.itemContainer,
        ]}
        onPress={this.model.switch}></TouchableOpacity>
    );
  }
}

export {SwitcherView};
