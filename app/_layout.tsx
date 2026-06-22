import { Stack } from 'expo-router';
import 'react-native-reanimated';
import "../global.css";

export default function RootLayout() {

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}