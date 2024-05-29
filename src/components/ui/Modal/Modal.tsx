'use client';

import React, { useCallback } from 'react';

import { useClickOutside } from '@/hooks';
import type { ModalProps } from '@/models/interfaces';

import Icon from '../../Icons/Icon';
import Button from '../Button/Button';

import styles from './Modal.module.css';

export default function Modal({
  isOpen,
  onClose,
  content,
}: ModalProps) {
  const modalRef = useClickOutside<HTMLDivElement>(onClose) as React.RefObject<HTMLDivElement>;
  const handleOverlayClick = useCallback(
    (event: React.MouseEvent) => {
      if (event.target === modalRef.current) {
        onClose();
      }
    },
    [onClose, modalRef],
  );
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      ref={modalRef}
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
    >
      <div
        className={styles.modal}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
      >
        <div
          className={styles['modal-header']}
        >
          <h2
            id='modal-title'
            className={styles['modal-title']}
          >
            --
          </h2>
          <Button
            className='btn-4'
            onClick={onClose}
            aria-label='Close'
          >
            <Icon title='Close' className='svg-4' />
          </Button>
        </div>
        <div
          className={styles['modal-content']}
          data-custom-scrollbar

        >
          {content(onClose)}
        </div>
      </div>
    </div>
  );
}
