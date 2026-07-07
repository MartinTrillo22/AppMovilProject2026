import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/src/ThemeContext';

export default function BookmarksScreen() {
  const { colors } = useTheme();

  return (
    <View className={`flex-1 ${colors.bg} justify-center items-center`}>
      <Text className={`${colors.text} text-lg font-bold font-radley`}>Marcadores</Text>
    </View>
  );
}
