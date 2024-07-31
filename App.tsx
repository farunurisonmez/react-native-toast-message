import React from "react";
import { ToastProvider } from "./src/context/toast/ToastContext";
import AppNavigation from "./AppNavigation";

const App = () => {

  return (
    <ToastProvider>
      <AppNavigation />
    </ToastProvider>
  )

};

export default App;