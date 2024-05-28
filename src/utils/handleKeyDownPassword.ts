import type {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
} from 'react';

import { INVALID_CHARS } from '../data/constants';

const handleKeyDownPassword = (
  e: KeyboardEvent<HTMLInputElement>,
  passwordLength: number,
  setRevealPassword: Dispatch<SetStateAction<boolean>>,
  setPassWarning: Dispatch<SetStateAction<{ active: boolean; message: string; }>>,
) => {
  const { key } = e;

  if (key === 'Backspace') return;

  if (passwordLength >= passwordLength) {
    setPassWarning({
      active: true,
      message: `Max password length is ${passwordLength}`,
    });

    if (key === 'Backspace') {
      setRevealPassword(false);
      setPassWarning({ active: false, message: '' });
    } else {
      e.preventDefault();
    }

    setTimeout(() => {
      setPassWarning({ active: false, message: '' });
    }, 2_000);
  }

  if (INVALID_CHARS[key]) {
    e.preventDefault();
    setPassWarning({
      active: true,
      message: `Invalid character: ${INVALID_CHARS[key]}`,
    });
    setTimeout(() => {
      setPassWarning({ active: false, message: '' });
    }, 2_000);
  }
};

export default handleKeyDownPassword;
