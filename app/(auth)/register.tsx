import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoldButton from '../../src/components/ui/GoldButton';
import InputField from '../../src/components/ui/InputField';
import { registro } from '../../infrastructure/service/AuthApi';

export default function RegisterScreen() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await registro({ name, email, password, phoneNumber });
      Alert.alert('Éxito', 'Cuenta creada correctamente.', [
        { text: 'Aceptar', onPress: () => router.replace('/(auth)/login') }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Hubo un error al registrar el usuario.');
    }
  };

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
        <Text className="text-white text-4xl font-normal font-radley text-center mt-16 mb-8">
          Cree su Cuenta
        </Text>

        {/* Form Fields */}
        <View className="w-full gap-4 mb-6">
          <InputField
            placeholder="Nombre del usuario"
            value={name}
            onChangeText={setName}
          />
          <InputField
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            placeholder="Celular"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <InputField
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Terms and Conditions Checkbox */}
        <View className="flex-row items-center justify-center px-4 mb-8 mt-6">
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
        <View className="items-center mb-8 mt-4">
          <GoldButton
            title="Registrarse"
            onPress={handleRegister}
            className="w-[70%] py-[14px]"
            textClassName="text-lg"
          />
        </View>

        {/* Bottom Login Link */}
        <View className="flex-row justify-center items-center mb-6">
          <Text className="text-[#8e8e93] text-sm">¿Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
            <Text className="text-white text-sm font-bold underline">Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
