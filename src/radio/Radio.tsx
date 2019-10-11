import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './style';

interface RadioProps {
  style?: ViewStyle;
  onChange?: (value: any) => null;
  children?: React.ReactChild[] | React.ReactChild;
  value?: any;
}

class Radio extends React.Component<RadioProps> {
  static Item?: any;
  static Button?: any;
  render() {
    const {style, children, onChange, value} = this.props;
    const wrapStyle = [styles.container, style];
    return (
      <View style={wrapStyle}>
        {React.Children.map(children, (child: any, index) =>
          React.cloneElement(child as any, {
            key: index,
            checked: value === child.props.value,
            onChange,
          }),
        )}
      </View>
    );
  }
}

export default Radio;
