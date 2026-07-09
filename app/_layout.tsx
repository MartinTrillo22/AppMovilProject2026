import { Radley_400Regular, Radley_400Regular_Italic, useFonts } from '@expo-google-fonts/radley';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import "../global.css";
import { ThemeProviderWrapper, useTheme } from '../src/ThemeContext';
import { AuthProvider } from '../src/context/AuthContext';

SplashScreen.preventAutoHideAsync();

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
  },
};

function RootNavigator() {
  const { isDarkMode } = useTheme();

  const currentTheme = {
    ...MyDarkTheme,
    colors: {
      ...MyDarkTheme.colors,
      background: isDarkMode ? '#000000' : '#E5E5E5',
    },
  };

  return (
    <ThemeProvider value={currentTheme}>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: isDarkMode ? '#000000' : '#E5E5E5' } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
      </Stack>
    </ThemeProvider>
  );
}

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
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AuthProvider>
        <ThemeProviderWrapper>
          <RootNavigator />
        </ThemeProviderWrapper>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
