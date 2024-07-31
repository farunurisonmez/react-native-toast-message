// src/utils/helpers/toast/ToastContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DeviceEventEmitter } from 'react-native';
import ToastComp from '../../components/toast/ToastComp';
import IToast from '../../types/interfaces/components/toast/IToastComp';

interface ToastContextType {
  showToast: (props:IToast) => void;
}

// Create a Context for the Toast
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Hook to use Toast Context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Toast Provider Component
export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<IToast | null>(null);

  // Function to show toast
  const showToast = (props:IToast) => {
    setToast({ message: props.message, type: props.type });
    DeviceEventEmitter.emit('SHOW_TOAST', { message: props.message, type: props.type });
  };

  // Subscribe to toast events
  useEffect(() => {
    const listener = DeviceEventEmitter.addListener('SHOW_TOAST', ({ message, type }: IToast) => {
      setToast({ message, type });
      setTimeout(() => setToast(null), 3000); // Auto-dismiss toast after 3 seconds
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <ToastComp message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
};
