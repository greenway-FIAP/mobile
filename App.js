import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";
import Home from "./src/pages";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Home/>
    </NativeBaseProvider>
  );
}