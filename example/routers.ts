import ButtonScreen from './Button';
import SwitchScreen from './Switch';

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
];
