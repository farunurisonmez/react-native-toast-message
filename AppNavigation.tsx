import React from "react";
import { View, Button } from "react-native";
import { useToast } from "./src/context/toast/ToastContext";

const AppNavigation = () => {
    const { showToast } = useToast();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Show Success Toast"
          onPress={() => showToast({message: 'Success message', type: 'success'})}
        />
        <Button
          title="Show Error Toast"
          onPress={() => showToast({message: 'Error message', type: 'error'})}
        />
        <Button
          title="Show Info Toast"
          onPress={() => showToast({message: 'Error message', type: 'info'})}
        />
         <Button
          title="Show Warning Toast"
          onPress={() => showToast({message: 'Error message', type: 'warning'})}
        />
      </View>
    )
}

export default AppNavigation;