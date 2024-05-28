import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import Icons from '@/components/Icons/Icons';
import Skeleton from '@/components/ui/Skeleton/Skeleton';

export default function ThemeButton({
  className,
}: {
  className: string;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useNextTheme();
  const { Sun, Moon } = Icons;

  useEffect(() => setMounted(true), []);

  return (
    <button
      className={className}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      title='change theme'
      id='theme-select-button'
      type='button'
    >
      {mounted
        ? (theme === 'light'
          ? (<Sun className='svg-5' />)
          : (<Moon className='svg-5' />))
        : (<Skeleton className='svg-5' />)}
    </button>
  );
}