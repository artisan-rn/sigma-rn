import ButtonScreen from './Button';
import SwitchScreen from './Switch';
import IconScreen from './Icon';

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
];
