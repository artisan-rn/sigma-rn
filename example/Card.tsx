import * as React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {getDpx, getRpx} from '@jdjoy/sigma-rn-util/lib/Device';

export interface CardProps {
  title: string;
  style?: ViewStyle;
}
class Card extends React.PureComponent<CardProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{marginLeft: getRpx(20)}}>
            {this.props.title}
          </Text>
        </View>
        <View style={this.props.style}>{this.props.children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: getRpx(6),
    marginTop: getRpx(28),
    paddingTop: getRpx(20),
    paddingRight: getRpx(20),
    paddingBottom: getRpx(20),
    paddingLeft: getRpx(20),
  },
  title: {
    marginBottom: getRpx(20),
    borderLeftColor: '#4c7cfa',
    borderLeftWidth: getDpx(4),
  },
});

export default Card;
