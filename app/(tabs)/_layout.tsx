import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../src/ThemeContext';

export default function TabLayout() {
  const { isDarkMode } = useTheme();
  const insets = useSafeAreaInsets();
  const bottomPadding = Math.max(insets.bottom, 12);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EAB308',
        tabBarInactiveTintColor: isDarkMode ? '#6B7280' : '#684920',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#000000' : '#E5E5E5',
          borderTopWidth: 2,
          borderTopColor: '#EAB308',
          height: 58 + bottomPadding,
          paddingTop: 8,
          paddingBottom: bottomPadding,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: 'Marcadores',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "bookmark" : "bookmark-outline"} size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/edit-profile"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="services/[categoryId]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="services/detail/[id]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="services/appointment"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="services/summary"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="services/success"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
