import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        {children}
        <button onClick={onClose} className="text-blue-500 cursor-pointer">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
