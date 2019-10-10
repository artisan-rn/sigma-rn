import * as React from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import {Icon} from '@jdjoy/sigma-rn';
import {getRpx} from '@jdjoy/sigma-rn-util/lib/Device';
import Card from '../Card';

const icons = [
  'circle',
  'close',
  'close_o',
  'check',
  'radio',
  'checkbox',
  'cart',
  'top',
  'shoot',
  'map',
  'increase',
];

const colorIcons = ['circle', 'close', 'cart', 'top', 'shoot', 'increase'];
export default class IconScreen extends React.Component {
  static navigationOptions = {
    title: 'svg图标',
  };

  render() {
    return (
      <ScrollView>
        <Card title="基础">
          <View style={styles.panel}>
            {icons.map(icon => (
              <View style={styles.content} key={icon}>
                <Icon size={getRpx(40)} type={icon} />
                <Text style={styles.title}>{icon}</Text>
              </View>
            ))}
            <View style={styles.content}>
              <Icon size={getRpx(10)} type={'reduce'} />
              <Text style={styles.title}>reduce</Text>
            </View>
          </View>
        </Card>
        <Card title="自定义颜色">
          <View style={styles.panel}>
            {colorIcons.map(icon => (
              <View style={styles.content} key={icon}>
                <Icon size={getRpx(40)} type={icon} color="#588ceb" />
                <Text style={styles.title}>{icon}</Text>
              </View>
            ))}
            <View style={styles.content}>
              <Icon size={getRpx(10)} type={'reduce'} color="#588ceb" />
              <Text style={styles.title}>reduce</Text>
            </View>
          </View>
        </Card>
        <Card title="自定义尺寸">
          <View style={styles.panel}>
            {icons.map(icon => (
              <View style={styles.content} key={icon}>
                <Icon size={getRpx(30)} type={icon} />
                <Text style={styles.title}>{icon}</Text>
              </View>
            ))}
          </View>
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
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 12,
  },
  content: {
    alignItems: 'center',
    width: 110,
    padding: 8,
    marginBottom: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#8C8C8C',
  },
  title: {
    marginTop: 5,
    fontSize: 10,
    color: '#666',
  },
});
