import * as React from 'react';

import {ART, StyleProp, ViewStyle} from 'react-native';

import ICONS from './Icons.json';
import {getRpx} from '@jdjoy/sigma-rn-util/lib/Device';

const {Surface, Shape} = ART;
interface IconProps {
  type:
    | 'circle'
    | 'close'
    | 'close_o'
    | 'check'
    | 'cart'
    | 'radio'
    | 'checkbox'
    | 'top'
    | 'shoot'
    | 'map'
    | 'reduce'
    | 'increase';
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
}
//
//* path 代表路径
//* ar 代表 aspect ratio; 宽高比
//

type SVGType = {
  d: string;
  fill?: string;
};

interface IconSvg {
  path: SVGType[];
  ar: number;
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
  const {type, style, size, color} = props;

  if (typeof type !== 'string' || !ICONS[type]) {
    console.error(`Icon type "${type}" is not existed.`);
    return null;
  }
  const icon = ICONS[type] as IconSvg;

  return (
    <Surface style={style} width={icon.ar * size} height={size}>
      {icon.path.map((d, index) => (
        <Shape d={d.d} key={index} fill={d.fill || color} scale={size / 1024} />
      ))}
    </Surface>
  );
};

Icon.defaultProps = {
  size: getRpx(40),
  color: '#333',
};

export default Icon;
