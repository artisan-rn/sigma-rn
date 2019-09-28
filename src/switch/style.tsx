import {StyleSheet} from 'react-native';
import {getDpx, getRpx} from '@sigma/rn-util/lib/Device';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 300,
    borderColor: '#DADADA',
    borderWidth: getDpx(3),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    width: getRpx(96),
    height: getRpx(48),
  },
  left: {
    justifyContent: 'flex-start',
    paddingLeft: getRpx(8),
  },
  right: {
    justifyContent: 'flex-end',
    borderColor: '#f0250f',
    paddingRight: getRpx(8),
  },
  disabled: {
    opacity: 0.3,
  },
  dot: {
    borderRadius: 300,
    backgroundColor: '#DADADA',
    borderWidth: getDpx(1),
    borderColor: '#DDD',
    width: getRpx(30),
    height: getRpx(30),
  },
  dotActive: {
    backgroundColor: '#f0250f',
  },
});

export default styles;
