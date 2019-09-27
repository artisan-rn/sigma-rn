import * as React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
export interface ButtonProps {
  disabled?: boolean;
  block?: boolean;
  size: 'lg' | 'md' | 'sm' | 'xs';
  type: 'primary' | 'ghost' | 'default' | 'fill';
}

export default class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    size: 'sm',
    type: 'primary',
  };

  render(): React.ReactNode {
    const {children, disabled, size, type, block, ...other} = this.props;

    const wrapStyle = [
      styles.container,

      styles[`${size}`],
      styles[`${type}`],
      block && styles.block,
      disabled && styles.disabled,
    ];

    const textStyle = [
      styles.text,
      //styles.circleText,
      styles[`${type}Text`],
    ];

    return (
      <TouchableWithoutFeedback {...other}>
        <View style={wrapStyle}>
          {typeof children === 'string' ? (
            <Text style={textStyle}>{children}</Text>
          ) : (
            children
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
