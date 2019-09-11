import {StyleSheet} from 'react-native';
import Device from '../utils/Device';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 300,
    borderColor: '#DADADA',
    borderWidth: Device.getDpx(3),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    width: Device.getRpx(96),
    height: Device.getRpx(48),
  },
  left: {
    justifyContent: 'flex-start',
    paddingLeft: Device.getRpx(8),
  },
  right: {
    justifyContent: 'flex-end',
    borderColor: '#f0250f',
    paddingRight: Device.getRpx(8),
  },
  disabled: {
    opacity: 0.3,
  },
  dot: {
    borderRadius: 300,
    backgroundColor: '#DADADA',
    borderWidth: Device.getDpx(1),
    borderColor: '#DDD',
    width: Device.getRpx(30),
    height: Device.getRpx(30),
  },
  dotActive: {
    backgroundColor: '#f0250f',
  },
});

export default styles;
