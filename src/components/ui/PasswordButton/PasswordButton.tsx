import * as React from 'react';

import Icons from '@/components/Icons/Icons';
import { SetStateType } from '@/models/interfaces';
import Button from '../Button/Button'
import styles from './PasswordButton.module.css';

function PasswordButton({
  revealPass,
  setRevealPass,
}: {
  revealPass: boolean;
  setRevealPass: SetStateType<boolean>;
}) {
  const { EyeIcon, EyeIconOff } = Icons;

  return (
    <Button
      className={`${styles['pass-reveal']}`}
      type='button'
      onClick={() => setRevealPass((prev) => !prev)}
      title={revealPass ? 'Hide password' : 'Show password'}
    >
      {revealPass ? <EyeIconOff /> : <EyeIcon />}
    </Button>
  );
}

export default PasswordButton;
