import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';

import {Button} from '../../src';

export default class ButtonScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.btn} type={'default'} text={'Default'} />
        <Button style={styles.btn} type={'primary'} text={'Primary'} />
        <Button style={styles.btn} type={'ghost'} text={'Success'} />
        <Button style={styles.btn} type={'fill'} text={'Warning'} />
        <Button style={styles.btn} type={'light'} text={'Danger'} />
        <Button style={styles.btn} type={'block'} text={'Danger'} />
        <Button style={styles.btn} type={'pink'} text={'Danger'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 7.5,
  },
  btn: {
    marginRight: 15,
    marginVertical: 7.5,
  },
});
