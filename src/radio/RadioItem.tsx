import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableWithoutFeedback,
  StyleProp,
} from 'react-native';
import Icon from '../icon';
import {getRpx} from '@jdjoy/sigma-rn-util/lib/Device';
import variables from '../style/variables';

export interface RadioItemProps {
  checked: boolean;
  style?: StyleProp<ViewStyle>;
  iconStyle?: ViewStyle;
  disabled?: boolean;
  size?: number;
  onChange?: (value: any) => null;
  label?: string;
  value: any;
}

class RadioItem extends React.Component<RadioItemProps> {
  onPress = () => {
    const {checked, value, onChange} = this.props;
    if (checked) {
      return;
    }
    onChange(value);
  };

  render() {
    const {checked, disabled, style, size, iconStyle, label} = this.props;
    const wrapStyle = [styles.container, disabled && styles.disabled, style];
    return (
      <TouchableWithoutFeedback onPress={this.onPress} disabled={disabled}>
        <View style={wrapStyle}>
          <Icon
            type={checked ? 'radio' : 'circle'}
            size={size}
            style={[styles.radioIconStyle, iconStyle]}
          />
          <Text style={styles.radioItemLabel}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  disabled: {
    opacity: variables.disabledOpacity,
  },
  radioIconStyle: {
    marginRight: getRpx(12),
  },
  radioItemLabel: {
    fontSize: variables.fontSizeS,
    color: variables.deepBlack,
  },
});

export default RadioItem;
