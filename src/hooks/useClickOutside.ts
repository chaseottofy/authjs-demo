import React, { useEffect, useRef } from 'react';

export default function usesClickOutside<T extends HTMLElement>(
  callback: (e?: React.MouseEvent<HTMLElement>) => void,
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = ({ target }: Event): void => {
      if (ref.current?.dataset?.isSubmitting === 'true') return;
      if (target && ref.current && !ref.current.contains(target as Node)) {
        callback();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (ref.current?.dataset?.isSubmitting === 'true') return;
      if (event.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [callback]);

  return ref;
}
