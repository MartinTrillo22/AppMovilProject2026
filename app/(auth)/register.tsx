import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoldButton from '../../src/components/ui/GoldButton';
import InputField from '../../src/components/ui/InputField';

export default function RegisterScreen() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mt-4 self-start"
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text className="text-white text-base ml-2">Volver</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-white text-4xl font-normal font-radley text-center mt-8 mb-8">
          Cree su Cuenta
        </Text>

        {/* Form Fields */}
        <View className="w-full">
          <InputField
            placeholder="Nombre del usuario"
            containerClassName="mb-4"
          />
          <InputField
            placeholder="Email"
            keyboardType="email-address"
            containerClassName="mb-4"
          />
          <InputField
            placeholder="Celular"
            keyboardType="phone-pad"
            containerClassName="mb-4"
          />
          <InputField
            placeholder="Fecha de nascimento"
            containerClassName="mb-4"
          />
          <InputField
            placeholder="Sexo"
            containerClassName="mb-4"
          />
          <InputField
            placeholder="confirme su fecha"
            containerClassName="mb-6"
          />
        </View>

        {/* Terms and Conditions Checkbox */}
        <View className="flex-row items-center justify-center px-4 mb-8">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setAgreed(!agreed)}
            className={`w-6 h-6 border-[2px] border-white justify-center items-center mr-3 rounded-[4px] ${agreed ? 'bg-white' : 'bg-transparent'}`}
          >
            {agreed && <Ionicons name="checkmark" size={16} color="black" />}
          </TouchableOpacity>
          <Text className="text-white text-xs flex-1 leading-5">
            Estoy de acuerdo con los{" "}
            <Text className="text-[#e9b978] font-bold">Términos y Condiciones de Uso.</Text>
          </Text>
        </View>

        {/* Register Button */}
        <View className="items-center mb-8">
          <GoldButton
            title="Registrarse"
            onPress={() => { }}
            className="w-[70%] py-[14px]"
            textClassName="text-lg"
          />
        </View>

        {/* Bottom Login Link */}
        <View className="flex-row justify-center items-center">
          <Text className="text-[#8e8e93] text-sm">¿Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
            <Text className="text-white text-sm font-bold underline">Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
