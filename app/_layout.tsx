import { Radley_400Regular, Radley_400Regular_Italic, useFonts } from '@expo-google-fonts/radley';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";

SplashScreen.preventAutoHideAsync();

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
  },
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Radley_400Regular,
    Radley_400Regular_Italic,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={MyDarkTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
      </Stack>
    </ThemeProvider>
  );
}