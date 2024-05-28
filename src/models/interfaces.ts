import type { HTMLAttributes, JSX } from 'react';

/**
 * @fileoverview Interfaces
 * List:
 * - FormElementNames
 * - FormProps
 * - GetUsersResponsePayload
 * - IconsInterface
 * - IconProps
 * - Inputs
 * - ModalContent
 * - ModalContextProps
 * - ModalProps
 * - ModalProviderProps
 * - NavLinkProps
 * - SetStateType
 * - TimeoutId
 * - UserInterface
 * - Warning
 */

export type FormElementNames = 'email' | 'password' | 'remember';

export interface FormProps {
  onClose: () => void;
}

export interface GetUsersResponsePayload {
  id: number;
  content: string | null;
  done: string | null;
}

export type IconsInterface = Record<string, (props?: IconProps) => JSX.Element>;

export type IconProps = HTMLAttributes<SVGElement>;

export interface Inputs {
  email: string;
  password: string;
  remember: boolean;
}

export type ModalContent = (onClose: () => void) => React.ReactNode;

export interface ModalContextProps {
  hideModal: () => void;
  showModal: (content: ModalContent) => void;
  updateModal: (content: ModalContent) => void;
}

export interface ModalProps {
  isOpen: boolean;
  content: ModalContent;
  onClose: () => void;
}

export interface ModalProviderProps {
  children: React.ReactNode;
}

export type NavLinkProps = Record<string, { name: string; href: string; target: string; }>;

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export type TimeoutId = ReturnType<typeof setTimeout>;

export interface UserInterface {
  id: number;
  email: string;
  remember: boolean;
  password: string;
}

export interface Warning {
  active: boolean;
  message: string;
}
