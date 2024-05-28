'use client';

import * as React from 'react';

import { useState } from 'react';

import styles from './LogInForm.module.css';

import {
  MAX_TIMEOUT,
  MAX_INPUT_LENGTHS,
  MIN_PASSWORD_LENGTH
} from '@/data/constants';

import { FormProps, Warning } from '@/models/interfaces';

import {
  determineInputAlertProps,
  handleKeyDownPassword,
} from '@/utils';

// import useForm

import Input from '../ui/Input/Input';
import Label from '../ui/Label/Label';
import Button from '../ui/Button/Button';
import PasswordButton from '../ui/PasswordButton/PasswordButton';
import LoadingDots from '../ui/LoadingDots/LoadingDots';
import Spinner from '../ui/Spinner/Spinner';
import InputAlert from '../ui/InputAlert/InputAlert';

export interface LogInFormValues {
  email: string;
  password: string;
}

export default function LogInForm() {
  const {
    password: MAX_PASSWORD_LENGTH,
    email: MAX_EMAIL_LENGTH,
  } = MAX_INPUT_LENGTHS;
  const [emailWarning, setEmailWarning] = useState<Warning>({ active: false, message: '' });
  const [passWarning, setPassWarning] = useState<Warning>({ active: false, message: '' });
  const [revealPass, setRevealPass] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // create temp form state for input values

  const [formState, setFormState] = useState<LogInFormValues>({
    email: '',
    password: '',
  }) as [LogInFormValues, React.Dispatch<React.SetStateAction<LogInFormValues>>];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const {
  //   errors,
  //   getValues,
  //   handleSubmit,
  //   isSubmitting,
  // } = useForm<FormProps>({
  //   mode: 'onBlur',
  //   reValidateMode: 'onChange',
  // });

  return (
    <>
      {isSubmitting && <Spinner timeoutVal={MAX_TIMEOUT} />}
      <form
        className={styles.form}
        data-is-submitting={isSubmitting}
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmitting(true);
          setTimeout(() => {
            setIsSubmitting(false);
          }, MAX_TIMEOUT);
        }}
      >
        {/* email */}
        <div className={styles.fieldset}>
          <Label htmlFor='email'>email *</Label>
          <Input
            autoFocus
            autoComplete='email'
            className='input-1'
            // data-has-error={errors?.email !== undefined}
            data-has-warn={emailWarning.active}
            disabled={isSubmitting}
            name='email'
            id='email'
            required
            type='email'
            value={formState.email}
            onFocus={() => setEmailWarning({ active: false, message: '' })}
            onChange={(e) => handleInput(e)}
            maxLength={MAX_EMAIL_LENGTH}
          />
          <br />
          {/* <InputAlert
          {...determineInputAlertProps(emailWarning)}
        /> */}
        </div>

        <div className={styles.fieldset}>
          <Label htmlFor='password'>password *</Label>
          <span className='relative-wrapper'>
            <Input
              autoComplete='new-password'
              className='input-1'
              name='password'
              // data-has-error={errors?.p assword !== undefined}
              disabled={isSubmitting}
              data-has-warn={passWarning.active}
              data-reveal={revealPass}
              id='password'
              required
              value={formState.password}
              onChange={(e) => handleInput(e)}
              type={revealPass ? 'text' : 'password'}
              onFocus={() => setPassWarning({ active: false, message: '' })}
              maxLength={MAX_PASSWORD_LENGTH}
              minLength={MIN_PASSWORD_LENGTH}
            // onKeyDown={(e) => {
            //   handleKeyDownPassword(
            //     e,
            //     formState.password.length,
            //     setRevealPass,
            //     setPassWarning,
            //   );
            // }}
            />
            <br />
            <PasswordButton revealPass={revealPass} setRevealPass={setRevealPass} />
          </span>
        </div>

        <div className={styles.fieldset}>
          <Button
            className={`${styles.submit} btn-primary1`}
            // disabled={isSubmitting || !isValid}
            disabled={isSubmitting}
            type='submit'
            title='Submit'
            onClick={(e) => {
              e.preventDefault();
              setIsSubmitting(true);
              setTimeout(() => {
                setIsSubmitting(false);
              }, MAX_TIMEOUT);
            }}
          >
            {isSubmitting ? <LoadingDots text='Loading' /> : 'Submit'}
          </Button>
        </div>
      </form>
    </>
  );
}
