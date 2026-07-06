import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-black pt-4 px-4" edges={['top', 'left', 'right']}>
      {/* Header */}
      <View className="flex-row items-center px-6 pt-6 pb-4 gap-4">
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Configuraciones</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View className="items-center mt-6 mb-8">
          <Image
            source={require('../../../assets/images/photoAdmin1.jpg')}
            className="w-28 h-28 rounded-full mb-4 border border-gray-800"
          />
          <Text className="text-white text-lg font-semibold mb-1">Miguel Angel</Text>
          <Text className="text-gray-400 text-sm">admin@gmail.com</Text>
        </View>

        {/* Divider Line */}
        <View className="h-[1px] bg-[#EAB308] opacity-50 w-full" />

        {/* Settings Options */}
        <View className="px-8 py-2">

          <TouchableOpacity 
            onPress={() => router.push('/settings/edit-profile')}
            className="flex-row items-center justify-between py-5"
          >
            <View className="flex-row items-center gap-4">
              <Ionicons name="person-outline" size={22} color="white" />
              <Text className="text-white text-base">Editar perfil</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          {/* Notificaciones */}
          <TouchableOpacity className="flex-row items-center justify-between py-5">
            <View className="flex-row items-center gap-4">
              <Ionicons name="notifications-outline" size={22} color="white" />
              <Text className="text-white text-base">Notificaciones</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          {/* Pagos */}
          <TouchableOpacity className="flex-row items-center justify-between py-5">
            <View className="flex-row items-center gap-4">
              <Ionicons name="card-outline" size={22} color="white" />
              <Text className="text-white text-base">Pagos</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          {/* Modo Oscuro */}
          <View className="flex-row items-center justify-between py-5">
            <View className="flex-row items-center gap-4">
              <Ionicons name="eye-outline" size={22} color="white" />
              <Text className="text-white text-base">Modo Oscuro</Text>
            </View>
            {/* Custom Gold Switch Toggle */}
            <View className="w-11 h-6 rounded-full border border-[#EAB308] bg-black justify-center items-end px-1">
              <View className="w-4 h-4 rounded-full bg-[#EAB308]" />
            </View>
          </View>

          {/* Seguridad */}
          <TouchableOpacity className="flex-row items-center justify-between py-5">
            <View className="flex-row items-center gap-4">
              <Ionicons name="lock-closed-outline" size={22} color="white" />
              <Text className="text-white text-base">Seguridad</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
