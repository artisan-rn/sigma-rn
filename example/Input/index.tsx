import * as React from 'react';

import {Image, ScrollView, StyleSheet, View} from 'react-native';
// @ts-ignore
import {Input} from '@jdjoy/sigma-rn';
import Card from '../Card';
import Device, {getRpx} from '@jdjoy/sigma-rn-util/lib/Device';

export default class Demo extends React.Component {
  state = {
    name: '',
    phone: '',
    remark: '',
  };
  render() {
    return (
      <ScrollView>
        <Card title="default">
          <Input
            value={this.state.name}
            placeholder="请输入姓名"
            onChange={value => {
              this.setState({
                name: value,
              });
            }}
          />
        </Card>
        <Card title="default">
          <Input
            textAlign="right"
            value={this.state.phone}
            placeholder="请输入手机号"
            onChange={value => {
              this.setState({
                phone: value,
              });
            }}
          />
        </Card>

        <Card title={'多行'}>
          <Input
            style={{marginTop: 13}}
            inputStyle={{height: 80, textAlignVertical: 'top'}}
            textAlign="left"
            multiline
            value={this.state.remark}
            placeholder="请输入学校信息"
            onChange={value => {
              this.setState({
                remark: value,
              });
            }}
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
