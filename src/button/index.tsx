import * as React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import styles from './style';
export interface ButtonProps {
  disabled?: boolean;
  block?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  type?: 'primary' | 'ghost' | 'default' | 'fill';
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  onPress?: any;
}

export default class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    size: 'sm',
    type: 'primary',
  };

  render(): React.ReactNode {
    const {
      children,
      disabled,
      size,
      type,
      block,
      style,
      textStyle,
      ...other
    } = this.props;

    const wrapStyle = [
      styles.container,
      styles[`${size}`],
      styles[`${type}`],
      block && styles.block,
      disabled && styles.disabled,
      style,
    ];

    const textStyleWrap = [
      styles.text,
      styles[`${size}Text`],
      styles[`${type}Text`],
      textStyle,
    ];

    return (
      <TouchableWithoutFeedback disabled={disabled} {...other}>
        <View style={wrapStyle}>
          {typeof children === 'string' ? (
            <Text style={textStyleWrap}>{children}</Text>
          ) : (
            children
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
