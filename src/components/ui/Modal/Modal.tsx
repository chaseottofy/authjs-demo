'use client';

import React from 'react';
import { useCallback } from 'react';
import { useClickOutside } from '@/hooks';
import Button from '../Button/Button';
import Icons from '../../Icons/Icons';
import type { ModalProps } from '@/models/interfaces';

import styles from './Modal.module.css';

/**
 * 
 * Used in conjunction with a ModalProvider that wraps app
 * 
 */
export default function Modal({
  isOpen,
  onClose,
  content,
}: ModalProps) {
  if (!isOpen) return null;
  const { Close } = Icons;

  const modalRef = useClickOutside<HTMLDivElement>(onClose) as React.RefObject<HTMLDivElement>;

  const handleOverlayClick = useCallback(
    (event: React.MouseEvent) => {
      if (event.target === modalRef.current) {
        onClose();
      }
    },
    [onClose, modalRef],
  );

  return (
    <div
      className={styles.overlay}
      ref={modalRef}
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className={styles['modal-header']}
        >
          <h2
            id="modal-title"
            className={styles['modal-title']}
          >
            --
          </h2>
          <Button
            className='btn-4'
            onClick={onClose}
            aria-label="Close"
          >
            <Close className='svg-4' />
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
