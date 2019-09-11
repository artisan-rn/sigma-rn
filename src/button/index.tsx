import * as React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import styles from './style';
export interface ButtonProps {
  disabled?: boolean;
  size: 'large' | 'small';
  circle: boolean;
  type: 'primary' | 'ghost' | 'default' | 'fill' | 'light' | 'block' | 'pink';
}

export default class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    size: 'large',
    type: 'primary',
  };

  render(): React.ReactNode {
    const {children, disabled, size, type, circle, ...other} = this.props;

    const wrapStyle = [
      styles.container,

      styles[`${circle ? 'small' : size}Container`],
      styles[`${type}Container`],
      circle && styles.circleContainer,
      disabled && styles.disabledContainer,
    ];

    const textStyle = [
      styles.textStyle,
      circle && styles.circleText,
      styles[`${type}Text`],
    ];

    return (
      <TouchableHighlight {...other} underlayColor={null}>
        <View style={wrapStyle}>
          {typeof children === 'string' ? (
            <Text style={textStyle}>{children}</Text>
          ) : (
            children
          )}
        </View>
      </TouchableHighlight>
    );
  }
}
