# React Native Toast Message

This repository contains a simple and effective implementation of toast messages in React Native using `DeviceEventEmitter`. Toast messages are a great way to provide quick feedback to users in your application.

## Overview

Toast messages are used to display brief notifications to users. This project provides a basic setup for implementing toast notifications in React Native, allowing you to easily show success and error messages with customizable styling.

## Features

- **Easy Integration**: Add toast notifications to any React Native app with minimal setup.
- **Event-Driven Architecture**: Uses `DeviceEventEmitter` to manage toast events efficiently.
- **Customizable**: Change the appearance and behavior of toast messages to fit your app's design.

## Preview Video

Check out the quick preview of the toast message component on YouTube:

[![Toast Message Preview](https://img.youtube.com/vi/O8jXE0OAAek/0.jpg)](https://youtube.com/shorts/O8jXE0OAAek)

## Getting Started

Follow these steps to see the toast message component in action:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/farunurisonmez/react-native-toast-message.git
    cd react-native-toast-message
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the app:**

    ```bash
    npm start
    ```

## Usage

Here's a basic example of how to use the toast message component in your React Native application:

```tsx
import React from 'react';
import { View, Button } from 'react-native';
import { ToastProvider } from './src/utils/helpers/toast/ToastContext';
import { showSuccessToast, showErrorToast } from './src/utils/helpers/toast/ToastManager';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Show Success Toast"
          onPress={() => showSuccessToast('Success message')}
        />
        <Button
          title="Show Error Toast"
          onPress={() => showErrorToast('Error message')}
        />
      </View>
    </ToastProvider>
  );
};

export default App;
