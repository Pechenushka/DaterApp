import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../../Core/BaseComponent';
import React from 'react';
import {Text, View} from 'react-native';
import {SimpleCounterModel} from '../../../Models/Components/Buttons/SimpleCounterModel';
import {BaseStyles} from '../../../Styles/BaseStyles';

type simpleCounterViewProps = baseComponentProps & {
  styles?: Object;
  textStyles?: Object;
};

class SimpleCounterView extends TypedBaseComponent<simpleCounterViewProps, SimpleCounterModel> {
  constructor(props: componentPropsWithModel<simpleCounterViewProps, SimpleCounterModel>) {
    super(props);
  }

  public render() {
    super.render();
    if (this.model.count === 0) {
      return null;
    }
    return (
      <View style={[this.props.styles ? this.props.styles : {}, BaseStyles.alignCenter]}>
        <Text style={this.props.textStyles ? this.props.textStyles : {}}>{this.model.count}</Text>
      </View>
    );
  }
}

export {SimpleCounterView};
