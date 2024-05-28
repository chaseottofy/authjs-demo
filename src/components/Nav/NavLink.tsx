import Link from 'next/link';

import { RouteRecordItem } from '@/models/interfaces';

export default function NavLink({
  props: { name, href, target },
  className,
  children,
}: {
  props: RouteRecordItem[keyof RouteRecordItem];
  className: string;
  children?: React.ReactNode;
}) {
  return (
    <Link className={className} href={href} title={name} target={target}>
      {children ?? name}
    </Link>
  );
}
