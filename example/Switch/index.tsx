import * as React from 'react';
import {View} from 'react-native';
// @ts-ignore
import {Switch} from '@jdjoy/sigma-rn';
import Card from '../Card';

class Demo extends React.PureComponent {

  state = {
    value: false,
    value1: true,
    value2: false,
    value3: true,
  };
  onChange = () => {
    this.setState({
      value: !this.state.value,
    });
  };
  onChange1 = () => {
    this.setState({
      value1: !this.state.value1,
    });
  };
  onChange2 = () => {
    this.setState({
      value2: !this.state.value2,
    });
  };
  render() {
    return (
      <View>
        <Card title="开关-默认关闭" style={{flexDirection: 'row'}}>
          <Switch value={this.state.value} onChange={this.onChange} />
        </Card>
        <Card title="开关-默认开启" style={{flexDirection: 'row'}}>
          <Switch value={this.state.value1} onChange={this.onChange1} />
        </Card>
        <Card title="开关-禁用" style={{flexDirection: 'row'}}>
          <Switch
            disabled={true}
            value={this.state.value2}
            onChange={this.onChange2}
          />
        </Card>
        <Card title="开关-禁用" style={{flexDirection: 'row'}}>
          <Switch
            disabled={true}
            value={this.state.value3}
            onChange={this.onChange2}
          />
        </Card>
      </View>
    );
  }
}

export default Demo;
