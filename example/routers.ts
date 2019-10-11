import ButtonScreen from './Button';
import SwitchScreen from './Switch';
import IconScreen from './Icon';
import RadioScreen from './Radio';

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
];
