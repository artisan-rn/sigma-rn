import {StyleSheet} from 'react-native';
import variables from '../style/variables';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  disabled: {
    opacity: variables.disabledOpacity,
  },
});

export default styles;
