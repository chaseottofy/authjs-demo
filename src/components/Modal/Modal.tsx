// Modal.tsx
import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

import Icons from '../Icons/Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  description?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  description,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { Close } = Icons;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element) => {
        if (!contentRef.current?.contains(element as Node)) {
          (element as HTMLElement).setAttribute('aria-hidden', 'true');
          (element as HTMLElement).setAttribute('inert', '');
        }
      });
    } else {
      const elementsToRestore = document.querySelectorAll('[aria-hidden="true"], [inert]');

      elementsToRestore.forEach((element) => {
        (element as HTMLElement).removeAttribute('aria-hidden');
        (element as HTMLElement).removeAttribute('inert');
      });
    }
  }, [isOpen]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      ref={modalRef}
      onClick={handleOverlayClick}
      aria-hidden="true"
    >
      <div
        className={styles.modal}
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={description ? 'modal-description' : undefined}
      >
        <div
          className={styles['modal-header']}
        >
          <h2 id="modal-title">{title}</h2>
          {description && <p id="modal-description">{description}</p>}

          <button className={'btn-icon1'} onClick={onClose} aria-label="Close">
            <Close className='svg-4' />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;