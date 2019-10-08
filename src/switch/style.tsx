import {StyleSheet} from 'react-native';
import {getRpx} from '@sigma/rn-util/lib/Device';
import variables from '../style/variables';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: getRpx(108),
    height: getRpx(48),
  },
  disabled: {
    opacity: 0.3,
  },
  inner: {
    width: getRpx(84),
    height: getRpx(36),
    borderRadius: getRpx(24),
    backgroundColor: variables.lightGrey,
  },
  innerChecked: {
    backgroundColor: variables.brandPrimary,
  },
  dot: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#FFFFFF',
    width: getRpx(48),
    height: getRpx(48),
    borderRadius: getRpx(48),
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: getRpx(4),
    },
    shadowRadius: getRpx(12),
    shadowOpacity: 1,
    left: 0,
  },
});

export default styles;
