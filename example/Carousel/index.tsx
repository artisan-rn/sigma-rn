import * as React from 'react';

import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
// @ts-ignore
import {Carousel} from '@jdjoy/sigma-rn';
import Card from '../Card';
import {getRpx} from '@jdjoy/sigma-rn-util/lib/Device';
const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = getRpx(427);
const entries = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
];
export default class Demo extends React.Component {
  static navigationOptions = {
    title: '按钮',
  };

  _renderItem({item, index}) {
    return (
      <View style={styles.slide}>
        <Image
          source={{uri: item.illustration}}
          style={{
            width: getRpx(640),
            height: getRpx(427),
          }}
        />
      </View>
    );
  }
  render() {
    return (
      <View>
        <Carousel
          layout={'default'}
          data={entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          autoplay
        />
        <Carousel
          layout={'stack'}
          layoutCardOffset={18}
          data={entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          autoplay
          loop
        />
        <Carousel
          layout={'tinder'}
          layoutCardOffset={9}
          data={entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          autoplay
          loop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
  },
});
