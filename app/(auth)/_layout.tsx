import { Stack } from 'expo-router';
import { useTheme } from '../../src/ThemeContext';

export default function AuthLayout() {
  const { colors } = useTheme();

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.bg === 'bg-black' ? '#000000' : '#E5E5E5' } }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
