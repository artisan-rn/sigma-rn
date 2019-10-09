import React, {Component} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {routers} from './routers';

import Device from '@jdjoy/sigma-rn-util/lib/Device';

const {width} = Device;
const COLORS = [
  '#FF4777',
  '#725E82',
  '#FFA400',
  '#5D513C',
  '#00BC12',
  '#CA6924',
  '#CB3A56',
];

export default class App extends Component {
  static navigationOptions = {
    title: 'react-native组件库',
  };

  state = {
    modalVisible: false,
    selectedComponentIndex: -1,
  };

  onCloseModal = () => {
    this.setState({
      modalVisible: false,
      selectedComponentIndex: -1,
    });
  };

  onPressCard(item) {
    this.props.navigation.navigate(item.key);
  }

  renderItem = ({item, index}) => {
    const {key} = item;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.onPressCard(item)}>
        <View
          style={[
            styles.badgeWrapper,
            {backgroundColor: COLORS[index % COLORS.length]},
          ]}
        />
        <Text style={styles.cardTitle}>{key}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {} = this.state;
    return (
      <React.Fragment>
        <FlatList
          numColumns={2}
          data={routers}
          style={styles.list}
          keyExtractor={(_, idx) => idx}
          renderItem={this.renderItem}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    padding: 5,
  },
  card: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 30) / 2,
    height: (width - 30) / 2,
    backgroundColor: '#FFF',
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
      },
    }),
  },
  badgeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  badgeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardTitle: {
    marginTop: 15,
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
  },
});
