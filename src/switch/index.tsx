import * as React from 'react';
import {View, ViewStyle, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
export interface SwitchProps {
  disabled?: boolean;
  onChange: () => void;
  style?: ViewStyle;
  activeStyle?: ViewStyle;
  inActiveStyle?: ViewStyle;
  dotStyle?: ViewStyle;
  value: boolean;
}

export default class Switch extends React.Component<SwitchProps> {
  static defaultProps = {
    disabled: false,
    value: false,
  };

  render(): React.ReactNode {
    const {
      onChange,
      style,
      disabled,
      value,
      activeStyle,
      inActiveStyle,
      dotStyle,
    } = this.props;
    const containerStyle = [
      styles.wrapper,
      style,
      disabled ? styles.disabled : null,
      value
        ? activeStyle
          ? activeStyle
          : styles.right
        : inActiveStyle
        ? inActiveStyle
        : styles.left,
    ];
    const dotStyles = [styles.dot, dotStyle, value && styles.dotActive];
    return (
      <TouchableWithoutFeedback onPress={onChange} disabled={disabled}>
        <View style={containerStyle}>
          <View style={dotStyles} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
