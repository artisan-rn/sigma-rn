import * as React from 'react';
import {Animated, ScrollView, Text} from 'react-native';
// @ts-ignore
import {ToTop} from '@jdjoy/sigma-rn';

class Demo extends React.PureComponent {
  scrollView: ScrollView;
  scrollY: Animated.Value = new Animated.Value(0);

  onScroll = e => {
    this.scrollY.setValue(e.nativeEvent.contentOffset.y);
  };
  _toTop = () => {
    this.scrollView.scrollTo({
      y: 0,
      animated: true,
    });
  };
  render() {
    return (
      <React.Fragment>
        <ScrollView ref={v => (this.scrollView = v)} onScroll={this.onScroll}>
          {new Array(150).fill('123').map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </ScrollView>
        <ToTop onPress={this._toTop} scrollY={this.scrollY} />
      </React.Fragment>
    );
  }
}

export default Demo;
