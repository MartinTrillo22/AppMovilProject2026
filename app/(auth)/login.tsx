import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoldButton from '../../src/components/ui/GoldButton';
import InputField from '../../src/components/ui/InputField';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === 'admin@gmail.com' && password === '123456') {

      router.replace('/(tabs)');
    } else {
      Alert.alert('Error', 'El correo o la contraseña son incorrectos.');
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
        {/* Photo */}
        <View className="w-full h-[240px] rounded-2xl overflow-hidden mt-14 mb-8">
          <Image
            source={require('../../assets/images/fotoprincipal.png')}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Title */}
        <Text className="text-white text-3xl font-normal font-radley text-center tracking-wider mb-2">
          BIENVENIDO DE NUEVO
        </Text>

        {/* Subtitle */}
        <Text className="text-[#8e8e93] text-lg text-center font-light mb-8">
          Inicie sesion
        </Text>

        {/* Form Fields */}
        <View className="w-full">
          <InputField
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            containerClassName="mb-4"
          />
          <InputField
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            containerClassName="mb-8"
          />
        </View>

        {/* Login Button */}
        <View className="items-center mb-8">
          <GoldButton
            title="Entrar"
            onPress={handleLogin}
            className="w-[70%] py-[14px]"
            textClassName="text-lg"
          />
        </View>

        {/* Bottom Register Link */}
        <TouchableOpacity
          onPress={() => router.push('/(auth)/register')}
          className="items-center mt-2"
          activeOpacity={0.7}
        >
          <Text className="text-[#8e8e93] text-sm text-center">
            No tienes cuenta?{" "}
            <Text className="text-white font-bold underline">
              Click para crear una nueva cuenta
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
