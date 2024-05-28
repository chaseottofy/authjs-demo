import * as React from 'react';

import Icon from '@/components/Icons/Icon';
import { SetStateType } from '@/models/interfaces';
import Button from '../Button/Button';
import styles from './PasswordButton.module.css';

function PasswordButton({
  revealPass,
  setRevealPass,
}: {
  revealPass: boolean;
  setRevealPass: SetStateType<boolean>;
}) {
  return (
    <Button
      className={`${styles['pass-reveal']}`}
      type='button'
      onClick={() => setRevealPass((prev) => !prev)}
      title={revealPass ? 'Hide password' : 'Show password'}
    >
      {revealPass ? <Icon title='EyeIconOff' /> : <Icon title='EyeIcon' />}
    </Button>
  );
}

export default PasswordButton;
