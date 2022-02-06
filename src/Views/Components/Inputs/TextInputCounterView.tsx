import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../../Core/BaseComponent';
import React from 'react';
import {Text, View} from 'react-native';
import {TextInputCounterModel} from '../../../Models/Components/Inputs/TextInputCounterModel';

type textInputCounterViewProps = baseComponentProps & {
  countContainerStyles?: Object;
  countTextStyles?: Object;
};

class TextInputCounterView extends TypedBaseComponent<textInputCounterViewProps, TextInputCounterModel> {
  constructor(props: componentPropsWithModel<textInputCounterViewProps, TextInputCounterModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <View style={[this.props.countContainerStyles !== undefined ? this.props.countContainerStyles : {}]}>
        <Text style={[this.props.countTextStyles !== undefined ? this.props.countTextStyles : {}]}>
          {this.model.counter}/{this.model.maxLength}
        </Text>
      </View>
    );
  }
}

export {TextInputCounterView};
