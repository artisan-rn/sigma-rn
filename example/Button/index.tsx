import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';

import {Button} from '../../src';
import Card from '../Card';

export default class ButtonScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="常规" style={{flexDirection: 'row'}}>
          <Button size="lg">去结算</Button>
          <Button size="lg" disabled>
            去结算
          </Button>
        </Card>
        <Card title="常规-小尺寸" style={{flexDirection: 'row'}}>
          <Button size="md">去结算</Button>
          <Button size="md" disabled>
            去结算
          </Button>
        </Card>
        <Card title="通栏按钮">
          <Button block>登录</Button>
        </Card>
        <Card title="圆角按钮-常规" style={{flexDirection: 'row'}}>
          <Button>确认收货</Button>
          <Button type="ghost">再次购买</Button>
          <Button type="default">查看物流</Button>
          <Button size="xs" type="fill">
            降价通知
          </Button>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 7.5,
  },
  btn: {
    marginRight: 15,
    marginVertical: 7.5,
  },
});
