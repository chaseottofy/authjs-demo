import {
  IconProps,
  IconsInterface,
} from '@/models/interfaces';

import IconsData from './IconsData';

export default function Icon({
  title,
  ...rest
}: IconProps) {
  const RC = IconsData[title as keyof IconsInterface];
  return <RC {...rest} />;
}
