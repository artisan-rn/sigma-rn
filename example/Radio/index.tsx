import * as React from 'react';

import {ScrollView, StyleSheet} from 'react-native';
// @ts-ignore
import {Radio} from '@jdjoy/sigma-rn';
import Card from '../Card';

export default class RadioScreen extends React.Component {
  static navigationOptions = {
    title: 'Radio 单选按钮',
  };
  state = {
    value: 1,
    value1: 'C',
    value2: 0,
    value3: 0,
  };

  onChange = value => {
    this.setState({
      value,
    });
  };
  onChange1 = value => {
    this.setState({
      value1: value,
    });
  };
  onChange2 = value => {
    this.setState({
      value2: value,
    });
  };
  onChange3 = value => {
    this.setState({
      value3: value,
    });
  };
  render() {
    return (
      <ScrollView>
        <Card title="基础">
          <Radio onChange={this.onChange} value={this.state.value}>
            <Radio.Item label={'选项A'} value={0} />
            <Radio.Item label={'选项B'} value={1} />
            <Radio.Item label={'选项C'} value={2} />
          </Radio>
        </Card>
        <Card title="横向布局">
          <Radio
            style={{flexDirection: 'row'}}
            onChange={this.onChange1}
            value={this.state.value1}>
            <Radio.Item label={'选项A'} value={'A'} style={{marginRight: 12}} />
            <Radio.Item label={'选项B'} value={'B'} style={{marginRight: 12}} />
            <Radio.Item label={'选项C'} value={'C'} />
          </Radio>
        </Card>
        <Card title="禁止选择">
          <Radio onChange={this.onChange2} value={this.state.value2}>
            <Radio.Item label={'选项A'} value={0} />
            <Radio.Item label={'选项B'} value={1} disabled />
            <Radio.Item label={'选项C'} value={2} />
          </Radio>
        </Card>
        <Card title="按钮">
          <Radio
            style={{flexDirection: 'row'}}
            onChange={this.onChange3}
            value={this.state.value3}>
            <Radio.Button label={'选项A'} value={0} />
            <Radio.Button label={'选项B'} value={1} disabled />
            <Radio.Button label={'选项C'} value={2} />
          </Radio>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 7.5,
  },
});
