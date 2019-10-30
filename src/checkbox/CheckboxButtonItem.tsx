import * as React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Button from '../button';
import {getDpx, getRpx} from '@jdjoy/sigma-rn-util/lib/Device';

export interface CheckboxButtonItemProps {
  checked: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onChange?: (value: any) => null;
  label?: string;
  value: any;
}

class CheckboxButtonItem extends React.Component<CheckboxButtonItemProps> {
  onPress = () => {
    const {value, onChange} = this.props;
    onChange(value);
  };

  render() {
    const {checked, disabled, label, style} = this.props;
    return (
      <Button
        style={[
          styles.buttonStyle,
          checked && styles.checked,
          disabled && styles.disabled,
          style,
        ]}
        textStyle={disabled && styles.disabledText}
        type={checked ? 'ghost' : 'fill'}
        onPress={this.onPress}
        disabled={disabled}>
        {label}
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginRight: getRpx(24),
    borderWidth: getDpx(2),
  },
  checked: {
    borderWidth: getDpx(2),
    backgroundColor: '#fcedeb',
  },
  disabled: {
    backgroundColor: '#F2F2F2',
  },
  disabledText: {
    color: '#bfbfbf',
    textDecorationLine: 'line-through',
  },
});

export default CheckboxButtonItem;
