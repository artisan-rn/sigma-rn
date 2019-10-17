import * as React from 'react';

import {View} from 'react-native';
// @ts-ignore
import {Button} from '@jdjoy/sigma-rn';
import Card from '../Card';
import {getRpx} from '@jdjoy/sigma-rn-util/lib/Device';

export default class ButtonScreen extends React.Component {
  render() {
    return (
      <View>
        <Card title="常规" style={{flexDirection: 'row'}}>
          <Button size="lg" style={{width: getRpx(240)}}>
            去结算
          </Button>
          <Button size="lg" disabled style={{width: getRpx(240)}}>
            去结算
          </Button>
        </Card>
        <Card title="常规-小尺寸" style={{flexDirection: 'row'}}>
          <Button size="md" style={{width: getRpx(375)}}>
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
