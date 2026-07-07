import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../src/ThemeContext';

export default function SettingsScreen() {
  const router = useRouter();
  const { isDarkMode, toggleTheme, colors } = useTheme();

  const bgClass = colors.bg;
  const textClass = colors.text;
  const subTextClass = colors.subText;
  const iconColor = colors.icon;
  const dividerClass = colors.divider;

  return (
    <SafeAreaView className={`flex-1 ${bgClass} pt-4 px-4`} edges={['top', 'left', 'right']}>
      {/* Header */}
      <View className="flex-row items-center px-6 pt-6 pb-4 gap-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={iconColor} />
        </TouchableOpacity>
        <Text className={`${textClass} text-2xl font-bold`}>Configuraciones</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View className="items-center mt-6 mb-8">
          <Image
            source={require('../../../assets/images/photoAdmin1.jpg')}
            className={`w-28 h-28 rounded-full mb-4 border ${isDarkMode ? 'border-gray-800' : 'border-[#e9b978]'}`}
          />
          <Text className={`${textClass} text-lg font-semibold mb-1`}>Miguel Angel</Text>
          <Text className={`${subTextClass} text-sm`}>admin@gmail.com</Text>
        </View>

        {/* Divider Line */}
        <View className={`h-[1px] w-full ${dividerClass}`} />

        {/* Settings Options */}
        <View className="px-8 py-2">

          <TouchableOpacity 
            onPress={() => router.push('/settings/edit-profile')}
            className="flex-row items-center justify-between py-5"
          >
            <View className="flex-row items-center gap-4">
              <Ionicons name="person-outline" size={22} color={iconColor} />
              <Text className={`${textClass} text-base`}>Editar perfil</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={iconColor} />
          </TouchableOpacity>

          {/* Notificaciones */}
          <TouchableOpacity className="flex-row items-center justify-between py-5">
            <View className="flex-row items-center gap-4">
              <Ionicons name="notifications-outline" size={22} color={iconColor} />
              <Text className={`${textClass} text-base`}>Notificaciones</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={iconColor} />
          </TouchableOpacity>

          {/* Pagos */}
          <TouchableOpacity className="flex-row items-center justify-between py-5">
            <View className="flex-row items-center gap-4">
              <Ionicons name="card-outline" size={22} color={iconColor} />
              <Text className={`${textClass} text-base`}>Pagos</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={iconColor} />
          </TouchableOpacity>

          <TouchableOpacity 
            activeOpacity={0.8}
            onPress={toggleTheme}
            className="flex-row items-center justify-between py-5"
          >
            <View className="flex-row items-center gap-4">
              <Ionicons name="eye-outline" size={22} color={iconColor} />
              <Text className={`${textClass} text-base`}>Modo Oscuro</Text>
            </View>
            {/* Custom Gold Switch Toggle */}
            <View className={`w-11 h-6 rounded-full border border-[#EAB308] justify-center px-1 ${
              isDarkMode ? 'bg-black items-end' : 'bg-gray-200 items-start'
            }`}>
              <View className="w-4 h-4 rounded-full bg-[#EAB308]" />
            </View>
          </TouchableOpacity>

          {/* Seguridad */}
          <TouchableOpacity className="flex-row items-center justify-between py-5">
            <View className="flex-row items-center gap-4">
              <Ionicons name="lock-closed-outline" size={22} color={iconColor} />
              <Text className={`${textClass} text-base`}>Seguridad</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={iconColor} />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
