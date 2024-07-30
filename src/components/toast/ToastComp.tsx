import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, DeviceEventEmitter } from 'react-native';

interface ToastProps {
  message: string;
}

const ToastComp: React.FC<ToastProps> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <View style={styles.toastWrapper} pointerEvents="box-none">
      <View style={styles.toastContainer}>
        <Text style={styles.toastText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toastWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 9999,
    pointerEvents: 'box-none',
  },
  toastContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  toastText: {
    color: 'white',
  },
});

export default ToastComp;
