import IconsData from './IconsData';

import {
  IconProps,
  IconsInterface,
} from '@/models/interfaces';

export default function Icon({
  title,
  ...rest
}: IconProps) {
  const Icon = IconsData[title as keyof IconsInterface];
  return <Icon {...rest} />;
}