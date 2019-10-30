import {StyleSheet} from 'react-native';
import {getDpx, getRpx} from '@jdjoy/sigma-rn-util/lib/Device';
import variables from '../style/variables';

const styles = StyleSheet.create({
  container: {
    width: getRpx(80),
    height: getRpx(80),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: getDpx(2),
    borderColor: variables.lightGrey,
    borderRadius: getRpx(80),
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    shadowOpacity: 2,
      position: 'absolute',
      zIndex: 10,
  },
  icon: {
    width: 39,
    height: 39,
    resizeMode: 'cover',
  },
});

export default styles;
