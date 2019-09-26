import {Dimensions, PixelRatio, Platform} from 'react-native';

const dpr = parseInt(String(PixelRatio.get()), 10) || 1;
let {width, height} = Dimensions.get('window');
if (Platform.OS === 'android') {
  // TODO: Android平台部分机器width和height会取反
  if (width > height) {
    width = Dimensions.get('window').height;
    height = Dimensions.get('window').width;
  }
}
const ratioDeps750 = width / 750;

const Device = {
  width,
  height,
  dpr,

  /**
   * 基于750屏幕宽度(iphone6)，按比例转换px
   */
  getRpx(value:number) {
    return Math.floor(value * ratioDeps750);
  },

  /**
   * 基于dpr获取px
   */
  getDpx(value:number) {
    return value / this.dpr;
  },

  /**
   * 基于750屏幕宽度(iphone6)，计算字体大小
   */
  getFontSize(value:number) {
    return value / 2;
  },
};
export default Device;
