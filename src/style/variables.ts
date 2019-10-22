import {getDpx, getRpx} from '@jdjoy/sigma-rn-util/lib/Device';

const brandPrimary = '#F2270C'; //主站品牌用色，多用于常规商品价格、主要功能按钮、明示及促销活动提示灯

const greyColors = {
  deepBlack: '#262626', //  主要内容用色，用于常规标题内容、细文浏览、常规按钮文字及图表引导等
  deepGrey: '#8C8C8C', // 次要标题内容，属性标示 非主要信息引导及常规按钮边框等
  neutralGrey: '#BFBFBF', // 特殊内容用色，用于商详无货标签文字、特殊不可点击按钮区分等
  lightGrey: '#F2F2F2', // 辅底内容用色，用于页面分割线、分割底色、选项按钮常规底色等
};

const helpColors = {
  yellow: '#FFB624', //用于立即购买等次级按钮，与主功能按钮共存时区分
  easy: '#5DDFDE', // 轻松购
  link: '#4D88FF', // 外链内容
};

const disabled = greyColors.neutralGrey;
const disabledOpacity = 0.3;

const fillColors = {
  fullBase: '#FFFFFF',
  fillGrey: greyColors.lightGrey,
  fillDisabled: greyColors.neutralGrey,
};

const fontSizes = {
  fontSizeXXS: getRpx(20), // 商品属性。标签内容 小型按钮引导跳转等
  fontSizeXS: getRpx(22), // 次要信息、 选项标签按钮等
  fontSizeS: getRpx(24), //次要商品名称、辅助提示类信息、常规按钮
  fontSizeM: getRpx(26), //常规商品名称、正文内容、文字类按钮、Tab导航等
  fontSizeL: getRpx(30), // 商详主商品名称、楼层标题、导航按钮
  fontSizeXL: getRpx(36), //导航标题、登陆按钮、商品价格
  fontSizeXXL: getRpx(60), //商详主商品价格等
};

const border = {
  borderWidth: getDpx(1),
  borderColor: greyColors.deepGrey,
};

const buttons = {
  buttonLgHeight: getRpx(108),
  buttonLgRadius: getRpx(24),
  buttonMdHeight: getRpx(96),
  buttonSmHeight: getRpx(60),
  buttonSmRadius: getRpx(60),
  buttonSmVSpacing: getRpx(26), //垂直方向padding
  buttonXsHeight: getRpx(48),
  buttonXsRadius: getRpx(48),
  buttonXsVSpacing: getRpx(16), //垂直方向padding
};

const input = {
  // input组件安全区域 高度
  inputTextFontSize: getRpx(26),
  inputAreaHeight: getRpx(64),
};

const variables: any = {
  brandPrimary,
  ...greyColors,
  ...helpColors,
  disabled,
  disabledOpacity,
  ...fillColors,
  ...fontSizes,
  ...border,
  ...buttons,
  ...input,
};

export default variables;
