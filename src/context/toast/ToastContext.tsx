import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DeviceEventEmitter } from 'react-native';
import ToastComp from '../../components/toast/ToastComp';

interface IToast {
  message: string;
  type: 'success' | 'error';
}

interface ToastContextType {
  showToast: (message: string, type: 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<IToast | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    DeviceEventEmitter.emit('SHOW_TOAST', { message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <ToastComp message={toast.message} />}
    </ToastContext.Provider>
  );
};
