import * as React from 'react';
import {
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import styles from './style';
import {getRpx} from '@sigma/rn-util/lib/Device';
export interface SwitchProps {
  disabled?: boolean;
  onChange: () => void;
  style?: ViewStyle;
  activeStyle?: ViewStyle;
  inActiveStyle?: ViewStyle;
  innerStyle?: ViewStyle;
  dotStyle?: ViewStyle;
  value: boolean;
}

export default class Switch extends React.Component<SwitchProps> {
  static defaultProps = {
    disabled: false,
    value: false,
  };
  animatedValue: Animated.AnimatedValue;

  constructor(props: SwitchProps) {
    super(props);
    this.animatedValue = new Animated.Value(props.value ? 1 : 0);
  }

  onPress = () => {
    const {onChange, value} = this.props;
    Animated.timing(this.animatedValue, {
      toValue: !value ? 1 : 0,
      duration: 300,
    }).start();
    onChange();
  };

  render(): React.ReactNode {
    const {style, disabled, value, innerStyle, dotStyle} = this.props;
    const containerStyle = [
      styles.wrapper,
      style,
      disabled ? styles.disabled : null,
    ];
    const innerStyles = [
      styles.inner,
      innerStyle,
      value && styles.innerChecked,
    ];
    const translate = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, getRpx(60)],
    });
    const dotStyles = [
      styles.dot,
      dotStyle,
      {transform: [{translateX: translate}]},
    ];

    return (
      <TouchableWithoutFeedback onPress={this.onPress} disabled={disabled}>
        <View style={containerStyle}>
          <View style={innerStyles} />
          <Animated.View style={dotStyles} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
