import { createContext } from 'react';

import { ModalContextProps } from '@/models/interfaces';

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
