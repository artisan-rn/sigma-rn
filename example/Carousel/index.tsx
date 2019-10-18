import * as React from 'react';

import {Image, ScrollView, StyleSheet, View} from 'react-native';
// @ts-ignore
import {Carousel} from '@jdjoy/sigma-rn';
import Card from '../Card';
import Device, {getRpx} from '@jdjoy/sigma-rn-util/lib/Device';

const horizontalMargin = 20;
const slideWidth = 640;

const sliderWidth = Device.width;
const itemWidth = getRpx(slideWidth);
const itemHeight = getRpx(427);
const entries = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('./UYiroysl.jpg'),
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('./UPrs1EWl.jpg'),
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: require('./MABUbpDl.jpg'),
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('./KZsmUi2l.jpg'),
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('./2nCt3Sbl.jpg'),
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('./lceHsT6l.jpg'),
  },
];
export default class Demo extends React.Component {
  _renderItem({item, index}) {
    return (
      <View style={styles.slide}>
        <Image
          source={item.illustration}
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
      <ScrollView>
        <Card title="default">
          <Carousel
            layout={'default'}
            data={entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            autoplay
            loop
          />
        </Card>
        <Card title="stack">
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
        </Card>
        <Card title="tinder">
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
        </Card>
      </ScrollView>
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
