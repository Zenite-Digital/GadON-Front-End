import React from "react";
import { Stack } from "expo-router";
import Colors from "@constants/Colors";

export default function AnimaisLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="cadastro" />
    </Stack>
  );
}
