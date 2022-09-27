import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../../Core/BaseComponent';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {SimpleButtonModel} from '../../../Models/Components/Buttons/SimpleButtonModel';
import {STYLES} from '../../../Styles/Styles';
import {SimpleCounterView} from './SimpleCounterView';

type simpleButtonViewProps = baseComponentProps & {
  styles?: Object;
  iconStyles?: Object;
  textStyles?: Object;
  counterStyles?: Object;
  counterTextStyles?: Object;
  active?: boolean;
};

class SimpleButtonView extends TypedBaseComponent<simpleButtonViewProps, SimpleButtonModel> {
  constructor(props: componentPropsWithModel<simpleButtonViewProps, SimpleButtonModel>) {
    super(props);
  }

  private get opacity() {
    return {opacity: this.model.disabled ? 0.4 : 1};
  }

  public render() {
    super.render();
    return (
      <TouchableOpacity
        style={[
          this.props.styles ? this.props.styles : {},
          STYLES.BaseStyles.alignCenter,
          this.opacity,
        ]}
        onPress={this.model.onPress}
        disabled={this.model.disabled}>
        {this.model.icon !== null &&
          this.model.icon !== undefined &&
          (this.props.active && this.model.iconActive ? (
            <Image
              source={this.model.iconActive}
              style={[
                this.props.iconStyles ? this.props.iconStyles : {},
                STYLES.BaseStyles.alignCenter,
              ]}
            />
          ) : (
            <Image
              source={this.model.icon}
              style={[
                this.props.iconStyles ? this.props.iconStyles : {},
                STYLES.BaseStyles.alignCenter,
              ]}
            />
          ))}
        {this.model.text !== null && (
          <Text style={this.props.textStyles ? this.props.textStyles : {}}>{this.model.text}</Text>
        )}
        <SimpleCounterView
          styles={this.props.counterStyles}
          textStyles={this.props.counterTextStyles}
          {...this.childProps(this.model.counterModel)}
        />
      </TouchableOpacity>
    );
  }
}

export {SimpleButtonView};
