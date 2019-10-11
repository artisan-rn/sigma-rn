import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './style';

interface CheckboxProps {
  style?: ViewStyle;
  onChange?: (value: any) => null;
  children?: React.ReactChild[] | React.ReactChild;
  value?: any;
}

class Checkbox extends React.Component<CheckboxProps> {
  static Item?: any;
  static Button?: any;

  onChange = itemValue => {
    const {value, onChange} = this.props;
    let tmpValue = value.concat();
    const idx = tmpValue.indexOf(itemValue);
    if (idx > -1) {
      tmpValue.splice(idx, 1);
    } else {
      tmpValue.push(itemValue);
    }
    onChange(tmpValue);
  };

  render() {
    const {style, children, value} = this.props;
    const wrapStyle = [styles.container, style];
    return (
      <View style={wrapStyle}>
        {React.Children.map(children, (child: any, index) =>
          React.cloneElement(child as any, {
            key: index,
            checked: value.indexOf(child.props.value) > -1,
            onChange: this.onChange,
          }),
        )}
      </View>
    );
  }
}

export default Checkbox;
