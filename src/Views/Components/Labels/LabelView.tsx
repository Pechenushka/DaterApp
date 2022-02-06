import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../../Core/BaseComponent';
import React from 'react';
import {Text} from 'react-native';
import {LabelModel} from '../../../Models/Components/Labels/LabelModel';

type labelViewProps = baseComponentProps & {
  textStyles?: Object;
};

class LabelView extends TypedBaseComponent<labelViewProps, LabelModel> {
  constructor(props: componentPropsWithModel<labelViewProps, LabelModel>) {
    super(props);
  }

  public render() {
    super.render();
    return <Text style={[this.props.textStyles !== undefined ? this.props.textStyles : {}]}>{this.model.text}</Text>;
  }
}

export {LabelView};
