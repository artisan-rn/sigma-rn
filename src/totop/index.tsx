import * as React from 'react';
import {Animated, TouchableWithoutFeedback, View} from 'react-native';
import Icon from '../icon';
import Device, {getRpx} from '@jdjoy/sigma-rn-util/lib/Device';
import styles from './style';

interface ToTopProps {
  /**
   * 相应ScrollView的contentY
   */
  scrollY: Animated.Value;

  /**
   * 距离顶部多远显示图标，默认一屏半
   */
  threshold: number;

  /**
   * 点击事件
   */
  onPress: () => void;

  /**
   * 图标距离右边的距离，默认10
   */
  right: number;

  /**
   * 图标距离底部的距离，默认10
   */
  bottom: number;
}

interface ToTopState {
  visible: boolean;
}

export default class ToTop extends React.PureComponent<ToTopProps, ToTopState> {
  static defaultProps = {
    children: <Icon type="top" />,
    threshold: Device.height * 1.5,
    right: getRpx(60),
    bottom: getRpx(60),
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    if (this.props.scrollY) {
      this.props.scrollY.addListener(({value}) => {
        if (value >= this.props.threshold) {
          !this.state.visible && this.setState({visible: true});
        } else {
          this.state.visible && this.setState({visible: false});
        }
      });
    }
  }

  render() {
    return this.state.visible ? (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View
          style={{
            ...styles.container,
            bottom: this.props.bottom,
            right: this.props.right,
          }}>
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    ) : null;
  }
}
