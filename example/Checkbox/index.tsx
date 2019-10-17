import * as React from 'react';

import {ScrollView} from 'react-native';
// @ts-ignore
import {Checkbox} from '@jdjoy/sigma-rn';
import Card from '../Card';

export default class CheckboxScreen extends React.Component {

  state = {
    value: ['1'],
    value1: ['C'],
    value2: [0],
    value3: [0],
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
          <Checkbox onChange={this.onChange} value={this.state.value}>
            <Checkbox.Item label={'选项A'} value={'0'} />
            <Checkbox.Item label={'选项B'} value={'1'} />
            <Checkbox.Item label={'选项C'} value={'2'} />
          </Checkbox>
        </Card>
        <Card title="横向布局">
          <Checkbox
            style={{flexDirection: 'row'}}
            onChange={this.onChange1}
            value={this.state.value1}>
            <Checkbox.Item
              label={'选项A'}
              value={'A'}
              style={{marginRight: 12}}
            />
            <Checkbox.Item
              label={'选项B'}
              value={'B'}
              style={{marginRight: 12}}
            />
            <Checkbox.Item label={'选项C'} value={'C'} />
          </Checkbox>
        </Card>
        <Card title="禁止选择">
          <Checkbox onChange={this.onChange2} value={this.state.value2}>
            <Checkbox.Item label={'选项A'} value={0} />
            <Checkbox.Item label={'选项B'} value={1} disabled />
            <Checkbox.Item label={'选项C'} value={2} />
          </Checkbox>
        </Card>
        <Card title="按钮">
          <Checkbox
            style={{flexDirection: 'row'}}
            onChange={this.onChange3}
            value={this.state.value3}>
            <Checkbox.Button label={'选项A'} value={0} />
            <Checkbox.Button label={'选项B'} value={1} disabled />
            <Checkbox.Button label={'选项C'} value={2} />
          </Checkbox>
        </Card>
      </ScrollView>
    );
  }
}
