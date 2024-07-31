import { DeviceEventEmitter } from 'react-native';

export const showSuccessToast = (message: string) => {
  DeviceEventEmitter.emit('SHOW_TOAST', { message, type: 'success' });
};

export const showErrorToast = (message: string) => {
  DeviceEventEmitter.emit('SHOW_TOAST', { message, type: 'error' });
};
