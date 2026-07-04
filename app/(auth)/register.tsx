import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
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
  const [isLoading, setIsLoading] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNameChange = (text: string) => {
    const limited = text.slice(0, 30);
    setName(limited);
    if (!limited) {
      setNameError('El nombre de usuario es requerido.');
    } else if (limited !== limited.trim()) {
      setNameError('El nombre no debe tener espacios al inicio ni al final.');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (!text) {
      setEmailError('El correo electrónico es requerido.');
    } else if (!text.includes('@')) {
      setEmailError('El correo electrónico debe contener una "@".');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneNumberChange = (text: string) => {
    const cleanText = text.replace(/[^0-9]/g, '');
    setPhoneNumber(cleanText);
    if (!cleanText) {
      setPhoneNumberError('El celular es requerido.');
    } else if (cleanText.length !== 9) {
      setPhoneNumberError('El celular debe tener exactamente 9 dígitos.');
    } else {
      setPhoneNumberError('');
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (!text) {
      setPasswordError('La contraseña es requerida.');
    } else if (text.length < 6) {
      setPasswordError('La contraseña debe tener mínimo 6 caracteres.');
    } else {
      setPasswordError('');
    }
  };

  const handleRegister = async () => {
    if (isLoading) {
      return;
    }
    const trimmedName = name.trim();
    if (!trimmedName || name !== name.trim() || name.length > 30) {
      setNameError('El nombre de usuario no es válido.');
      return;
    }
    if (!email || !email.includes('@')) {
      setEmailError('El correo electrónico no es válido.');
      return;
    }
    if (!phoneNumber || phoneNumber.length !== 9) {
      setPhoneNumberError('El celular debe tener 9 dígitos.');
      return;
    }
    if (!password || password.length < 6) {
      setPasswordError('La contraseña debe tener mínimo 6 caracteres.');
      return;
    }
    if (!agreed) {
      Alert.alert('Términos', 'Debe aceptar los términos y condiciones.');
      return;
    }

    try {
      setIsLoading(true);
      await registro({ name: trimmedName, email, password, phoneNumber });
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Error', 'Hubo un error al registrar el usuario.');
      setIsLoading(false);
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
          <View>
            <InputField
              placeholder="Nombre del usuario"
              value={name}
              onChangeText={handleNameChange}
            />
            {nameError ? (
              <Text className="text-red-500 text-xs mt-1 ml-1">{nameError}</Text>
            ) : null}
          </View>

          <View>
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={handleEmailChange}
            />
            {emailError ? (
              <Text className="text-red-500 text-xs mt-1 ml-1">{emailError}</Text>
            ) : null}
          </View>

          <View>
            <InputField
              placeholder="Celular"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
            {phoneNumberError ? (
              <Text className="text-red-500 text-xs mt-1 ml-1">{phoneNumberError}</Text>
            ) : null}
          </View>

          <View>
            <InputField
              placeholder="Contraseña"
              secureTextEntry={true}
              value={password}
              onChangeText={handlePasswordChange}
            />
            {passwordError ? (
              <Text className="text-red-500 text-xs mt-1 ml-1">{passwordError}</Text>
            ) : null}
          </View>
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
      {isLoading && (
        <View className="absolute inset-0 bg-black/85 justify-center items-center z-50">
          <ActivityIndicator size="large" color="#e9b978" />
          <Text className="text-white text-lg font-light mt-4 tracking-wider">
            Creando tu cuenta...
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
