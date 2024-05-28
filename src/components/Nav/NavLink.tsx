import Link from 'next/link';

import { NavLinkProps } from '@/models/interfaces';

export default function NavLink({
  props: { name, href, target },
  className,
  children,
}: {
  props: NavLinkProps[keyof NavLinkProps];
  className: string;
  children?: React.ReactNode;
}) {
  return (
    <Link className={className} href={href} title={name} target={target}>
      {children ?? name}
    </Link>
  );
}
