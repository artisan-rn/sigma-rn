import ButtonScreen from './Button';
import SwitchScreen from './Switch';
import IconScreen from './Icon';
import RadioScreen from './Radio';
import CheckboxScreen from './Checkbox';
import CarouselScreen from './Carousel';
import InputScreen from './Input';

export const routers = [
  {
    screen: ButtonScreen,
    key: 'Button',
    group: 'general',
    label: '按钮',
  },
  {
    screen: SwitchScreen,
    key: 'Switch',
    group: 'general',
    label: '开关',
  },
  {
    screen: IconScreen,
    key: 'Icon',
    group: 'general',
    label: '图标',
  },
  {
    screen: RadioScreen,
    key: 'Radio',
    group: 'general',
    label: '单选按钮',
  },
  {
    screen: CheckboxScreen,
    key: 'Checkbox',
    group: 'general',
    label: '单选按钮',
  },
  {
    screen: CarouselScreen,
    key: 'Carousel',
    group: 'general',
    label: '轮播',
  },
  {
    screen: InputScreen,
    key: 'Input',
    group: 'general',
    label: '输入框',
  },
];
