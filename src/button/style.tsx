import {StyleSheet} from 'react-native';
import {getRpx} from '@sigma/rn-util/lib/Device';
import variables from '../style/variables';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  disabled: {
    backgroundColor: '#d7d6d6',
  },
  block: {
    width: '100%',
  },
  lg: {
    height: variables.buttonLgHeight,
  },
  md: {
    height: variables.buttonMdHeight,
  },
  sm: {
    height: variables.buttonSmHeight,
    paddingHorizontal: variables.buttonSmVSpacing,
    borderRadius: variables.buttonSmRadius,
  },
  xs: {
    height: variables.buttonXsHeight,
    paddingHorizontal: variables.buttonXsVSpacing,
    borderRadius: variables.buttonXsRadius,
  },
  primary: {
    backgroundColor: variables.brandPrimary,
  },
  ghost: {
    borderWidth: variables.borderWidth,
    borderColor: variables.brandPrimary,
  },
  default: {
    borderWidth: variables.borderWidth,
    borderColor: variables.borderColor,
  },
  fill: {
    backgroundColor: variables.fillGrey,
  },

  lgText: {
    fontSize: getRpx(30),
  },
  mdText: {
    fontSize: getRpx(30),
  },
  smText: {
    fontSize: getRpx(24),
  },
  xsText: {
    fontSize: getRpx(20),
  },
  defaultText: {
    color: '#2e2d2d',
  },
  ghostText: {
    color: '#F0250F',
  },
  text: {
    color: '#2e2d2d',
  },
  primaryText: {
    color: '#FFFFFF',
  },
});

export default styles;
