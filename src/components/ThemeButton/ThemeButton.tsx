import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/Icons/Icon';

import Skeleton from '@/components/ui/Skeleton/Skeleton';

export default function ThemeButton({
  className,
}: {
  className: string;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useNextTheme();

  useEffect(() => setMounted(true), []);

  return (
    <Button
      className={className}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      title='change theme'
      id='theme-select-button'
      type='button'
    >
      {mounted
        ? (theme === 'light'
          ? (<Icon title='Sun' className='svg-5' />)
          : (<Icon title='Moon' className='svg-5' />))
        : (<Skeleton className='svg-5' />)}
    </Button>
  );
}