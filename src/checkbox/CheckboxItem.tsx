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

export interface CheckboxItemProps {
  checked: boolean;
  style?: StyleProp<ViewStyle>;
  iconStyle?: ViewStyle;
  disabled?: boolean;
  size?: number;
  onChange?: (value: any) => null;
  label?: string;
  value: any;
}

class CheckboxItem extends React.Component<CheckboxItemProps> {
  onPress = () => {
    const {value, onChange} = this.props;
    onChange(value);
  };

  render() {
    const {checked, disabled, style, size, iconStyle, label} = this.props;
    const wrapStyle = [styles.container, disabled && styles.disabled, style];
    return (
      <TouchableWithoutFeedback onPress={this.onPress} disabled={disabled}>
        <View style={wrapStyle}>
          <Icon
            type={checked ? 'checkbox' : 'circle'}
            size={size}
            style={[styles.checkboxIconStyle, iconStyle]}
          />
          <Text style={styles.checkboxItemLabel}>{label}</Text>
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
  checkboxIconStyle: {
    marginRight: getRpx(12),
  },
  checkboxItemLabel: {
    fontSize: variables.fontSizeS,
    color: variables.deepBlack,
  },
});

export default CheckboxItem;
