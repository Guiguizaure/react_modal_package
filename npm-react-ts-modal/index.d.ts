declare module 'npm-react-ts-modal' {
    import { ReactNode } from 'react';
    export interface ModalProps {
      isOpen: boolean;
      onClose: () => void;
      children: ReactNode;
    }
    const Modal: React.FC<ModalProps>;
    export default Modal;
  }
  