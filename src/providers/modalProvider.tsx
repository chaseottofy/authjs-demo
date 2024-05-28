'use client';

import React, { useCallback, useMemo, useState } from 'react';

import Modal from '@/components/ui/Modal/Modal';
import { ModalContext } from '@/context/modalContext';
import { ModalContent, ModalProps } from '@/models/interfaces';

export default function ModalProvider({
  children,
}: React.PropsWithChildren<object>) {
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const hideModal = useCallback(() => {
    setModalProps(null);
  }, []);

  const showModal = useCallback((content: ModalContent) => {
    setModalProps({ 
      isOpen: true, 
      onClose: hideModal,
      content,
    });
  }, [hideModal]);

  const updateModal = useCallback((content: ModalContent) => {
    if (modalProps) {
      setModalProps({ ...modalProps, content });
    }
  }, [modalProps]);

  const value = useMemo(() => ({
    showModal,
    updateModal,
    hideModal,
  }), [showModal, updateModal, hideModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalProps && <Modal {...modalProps} />}
    </ModalContext.Provider>
  );
}
