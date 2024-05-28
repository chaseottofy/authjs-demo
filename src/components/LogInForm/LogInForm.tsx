'use client';

import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import { createClient } from '@/server/supabase/server';

import styles from './LogInForm.module.css';

import { type FormData } from '@/models/schema';
import { validateForm } from '@/validation/validateForm';
import {
  MAX_TIMEOUT,
  MAX_INPUT_LENGTHS,
  MIN_PASSWORD_LENGTH
} from '@/data/constants';

import Icons from '../Icons/Icons';
import Input from '../ui/Input/Input';
import Label from '../ui/Label/Label';
import Button from '../ui/Button/Button';
import PasswordButton from '../ui/PasswordButton/PasswordButton';
import { useModal } from '@/hooks';
import Spinner from '../ui/Spinner/Spinner';

const {
  password: MAX_PASSWORD_LENGTH,
  email: MAX_EMAIL_LENGTH,
} = MAX_INPUT_LENGTHS;

export default function LogInForm({
  onClose
}: {
  onClose: () => void;
}) {
  const router = useRouter();
  const { updateModal } = useModal();
  const { Mail, GithubIcon } = Icons;
  const [chooseEmail, setChooseEmail] = useState<boolean>(false) as [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [revealPass, setRevealPass] = useState<boolean>(false);
  const [inputWarn, setInputWarn] = useState<string>('') as [string, React.Dispatch<React.SetStateAction<string>>];
  const [serverMessage, setServerMessage] = useState<string>('') as [string, React.Dispatch<React.SetStateAction<string>>];

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    isSignUp: false,
  }) as [FormData, React.Dispatch<React.SetStateAction<FormData>>];
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string | undefined>>>({
    email: undefined,
    password: undefined,
    isSignUp: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, validity } = e.target;
    const { typeMismatch, tooLong, tooShort } = validity;
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: typeMismatch
        ? 'Invalid email'
        : tooLong
          ? 'Input is too long'
          : tooShort
            ? 'Input is too short'
            : undefined,
    }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (formErrors.email || formErrors.password) return;
    e.preventDefault();
    setIsSubmitting(true);
    const { isValid, errors } = validateForm(formData);
    if (Object.keys(errors).length > 0 || isValid === false) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    const { email, password, isSignUp } = formData;

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, isSignUp }),
      });

      if (response.ok) {
        updateModal(() => (
          <div className={styles['form-error']}>
            <h2>USER: {email}</h2>
            <span>Success! Redirecting.</span>
          </div>
        ));
        setTimeout(() => {
          onClose();
          router.push('/dashboard');
        }, 2_000);
      } else {
        const errorData = await response.json();
        setServerMessage(errorData.error);
        if ('input' in errorData) setInputWarn(errorData.input);
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsSubmitting(false);
      updateModal(() => (
        <div className={styles['form-error']}>
          <span>Something went wrong with server response.</span>
          <span>Please try again later.</span>
        </div>
      ));
      return;
    }
  };

  return (
    <>
      {isSubmitting && <Spinner timeoutVal={MAX_TIMEOUT} />}
      <form
        className={styles.form}
        data-is-submitting={isSubmitting}
        onSubmit={handleSubmit}
      >
        <div
          className={styles['server-message']}
          hidden={!serverMessage.length}
        >
          <span className={styles.message}>{serverMessage}</span>
        </div>

        <div className={styles.fieldset}>
          <Button
            autoFocus
            className={`${styles.auth} btn-4`}
            type='button'
            title='Continue with Github'
          >
            <span><GithubIcon className='svg-5' /></span>
            <span>Continue with Github</span>
          </Button>
        </div>
        <div className={styles.fieldset} hidden={chooseEmail}>
          <Button
            className={`${styles.auth} btn-4`}
            type='button'
            title='Continue with Email'
            onClick={() => setChooseEmail(true)}
          >
            <span><Mail className='svg-5' /></span>
            <span>Continue with Email</span>
          </Button>
        </div>
        <br />
        <div
          className={styles['fieldset-wrapper']}
          hidden={!chooseEmail}
        >
          <div className={styles.fieldset}>
            <Label htmlFor='email'>email *</Label>
            <Input
              autoFocus
              autoComplete='email'
              className='input-1'
              data-has-warn={(formErrors.email !== undefined)}
              data-has-error={inputWarn === 'email'}
              disabled={isSubmitting}
              name='email'
              id='email'
              required
              type='email'
              value={formData.email}
              onChange={handleChange}
              maxLength={MAX_EMAIL_LENGTH}
            />
            <br />
          </div>

          <div
            className={styles.fieldset}
            data-fieldset='password'
          >
            <Label htmlFor='password'>password *</Label>
            <span className='relative-wrapper'>
              <Input
                autoComplete='new-password'
                className='input-1'
                name='password'
                disabled={isSubmitting}
                data-has-warn={(formErrors.password !== undefined)}
                data-has-error={inputWarn === 'password'}
                data-reveal={revealPass}
                id='password'
                required
                value={formData.password}
                onChange={handleChange}
                type={revealPass ? 'text' : 'password'}
                minLength={MIN_PASSWORD_LENGTH}
                maxLength={MAX_PASSWORD_LENGTH}
              />
              <br />
              <PasswordButton revealPass={revealPass} setRevealPass={setRevealPass} />
            </span>
            <br />
          </div>

          <div
            className={styles.fieldset}
            data-fieldset='submit'
          >
            {['log in', 'sign up'].map((type) => (
              <Button
                className={`${styles.submit} btn-primary2`}
                disabled={isSubmitting}
                type='submit'
                title={type}
                name={type}
                key={type}
                role='button'
                onClick={() => setFormData((prevData) => ({ ...prevData, isSignUp: type === 'sign up' }))}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </form>
    </>
  );
}
