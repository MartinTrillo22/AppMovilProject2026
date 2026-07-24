import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaymentSuccessScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black justify-between items-center py-10 px-6">
      <View />

      {/* Checkmark Circle y Textos */}
      <View className="items-center w-full">
        <View className="w-56 h-56 rounded-full border-2 border-white items-center justify-center mb-10">
          <Feather name="check" size={110} color="#FFFFFF" />
        </View>

        <Text className="text-white text-3xl font-bold text-center leading-[42px] mb-4 font-radley">
          ¡Pago{'\n'}realizado con{'\n'}éxito!
        </Text>

        <View className="border-b border-gray-600 pb-1 px-4">
          <Text className="text-gray-300 text-sm text-center">
            ¡Su cita ha sido confirmada!
          </Text>
        </View>
      </View>

      {/* Botones de acción */}
      <View className="flex-row items-center justify-center gap-6 w-full px-4 mb-4">
        <TouchableOpacity
          onPress={() => router.replace('/(tabs)')}
          className="flex-1 h-12 rounded-full bg-[#F4BF75] items-center justify-center"
          activeOpacity={0.85}
        >
          <Text className="text-[#2b1d3f] text-xl font-bold font-radley">OK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace('/(tabs)')}
          className="flex-1 h-12 rounded-full bg-[#F4BF75] items-center justify-center"
          activeOpacity={0.85}
        >
          <Text className="text-[#2b1d3f] text-xl font-bold font-radley">Ver recibo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
