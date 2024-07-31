// src/utils/helpers/toast/Toast.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IToast from '../../types/interfaces/components/toast/IToastComp';

const Toast = (props:IToast) => {

    const backgroundColor = 
    props.type === 'success' ? 'green' :
    props.type === 'error' ? 'red' :
    props.type === 'warning' ? 'orange' :
    'blue';
  return (
    <View style={styles.toastWrapper} pointerEvents="box-none">
      <View style={[styles.toastContainer, { backgroundColor }]}>
        <Text style={styles.toastText}>{props.message}</Text>
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
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  toastText: {
    color: 'white',
  },
});

export default Toast;
