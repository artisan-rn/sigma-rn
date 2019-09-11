import {StyleSheet, ViewStyle} from 'react-native';
import Device from '../utils/Device';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  disabledContainer: {
    backgroundColor: '#d7d6d6',
  },
  largeContainer: {
    height: Device.getRpx(100),
    paddingLeft: Device.getRpx(78),
    paddingRight: Device.getRpx(78),
  },
  smallContainer: {
    height: Device.getRpx(60),
    paddingLeft: Device.getRpx(30),
    paddingRight: Device.getRpx(30),
  },
  primaryContainer: {
    backgroundColor: '#f23030',
    borderWidth: Device.getDpx(0),
    borderColor: '#F0250F',
  },
  ghostContainer: {
    borderWidth: Device.getDpx(1),
    borderColor: '#F0250F',
  },
  defaultContainer: {
    borderWidth: Device.getDpx(1),
    borderColor: '#ababab',
    backgroundColor: '#FFFFFF',
  },
  fillContainer: {
    backgroundColor: '#f6f6f6',
  },
  lightContainer: {
    borderWidth: Device.getDpx(1),
    borderColor: '#dadada',
  },
  circleContainer: {
    borderRadius: Device.getRpx(60),
  },
  pinkContainer: {
    backgroundColor: '#f0250f0d',
    borderWidth: Device.getDpx(0),
  },
  checkedContainer:{
    backgroundColor: '#fef4f3',
    borderWidth: Device.getDpx(2),
    borderColor: '#f0250f',
  },
  blockContainer: {
    width: '100%',
    height: Device.getRpx(80),
    borderRadius: Device.getRpx(100),
    shadowColor: 'rgba(255, 62, 62, 0.2)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: '#f23030',
  },

  textStyle: {
    fontSize: Device.getRpx(30),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  defaultText: {
    color: '#2e2d2d',
  },
  ghostText: {
    color: '#F0250F',
  },
  circleText: {
    color: '#2e2d2d',
    fontSize: Device.getRpx(26),
  },
  primaryText:{
    color: '#FFFFFF',
    fontSize: Device.getRpx(26),
  },
});

export default styles;
