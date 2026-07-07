import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../../src/context/AuthContext';
import GoldButton from '../../../src/components/ui/GoldButton';
import InputField from '../../../src/components/ui/InputField';
import { useTheme } from '../../../src/ThemeContext';

const toTitleCase = (str: string) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function EditProfileScreen() {
  const router = useRouter();
  const { user, updateUser } = useAuth();

  const [fullName, setFullName] = useState(toTitleCase(user?.fullName || ''));
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [password, setPassword] = useState('');

  const handleSave = async () => {
    if (!user) return;
    await updateUser({
      id: user.id,
      fullName: toTitleCase(fullName.trim()),
      email,
      password: password || '123456',
      role: user.role,
      phone,
      isActive: user.isActive
    });
    router.back();
  };
  const { colors, isDarkMode } = useTheme();

  return (
    <SafeAreaView className={`flex-1 ${colors.bg}`} edges={['top', 'left', 'right']}>
      {/* Header */}
      <View className="flex-row items-center px-6 pt-6 pb-4 gap-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.icon} />
        </TouchableOpacity>
        <Text className={`${colors.text} text-2xl font-bold`}>Editar perfil</Text>
      </View>

      <ScrollView
        className="flex-1 px-8"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Avatar Section */}
        <View className="items-center mt-6 mb-8">
          <View className="relative">
            <Image
              source={require('../../../assets/images/photoAdmin1.jpg')}
              className={`w-28 h-28 rounded-full border ${isDarkMode ? 'border-gray-800' : 'border-[#e9b978]'}`}
            />
            <TouchableOpacity className={`absolute bottom-0 right-0 bg-[#e9b978] w-8 h-8 rounded-full items-center justify-center border-2 ${isDarkMode ? 'border-black' : 'border-[#E5E5E5]'}`}>
              <Ionicons name="camera" size={16} color="#2b1d3f" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="mt-3">
            <Text className="text-[#e9b978] text-sm font-semibold">Cambiar foto de perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View className="gap-5">
          <View className="gap-1.5">
            <Text className={`${colors.subText} text-xs font-semibold uppercase tracking-wider pl-1`}>
              Nombre completo
            </Text>
            <InputField
              value={fullName}
              onChangeText={setFullName}
              placeholder="Nombre completo"
            />
          </View>

          <View className="gap-1.5">
            <Text className={`${colors.subText} text-xs font-semibold uppercase tracking-wider pl-1`}>
              Correo electrónico
            </Text>
            <InputField
              value={email}
              onChangeText={setEmail}
              placeholder="Correo electrónico"
              keyboardType="email-address"
            />
          </View>

          <View className="gap-1.5">
            <Text className={`${colors.subText} text-xs font-semibold uppercase tracking-wider pl-1`}>
              Número de teléfono
            </Text>
            <InputField
              value={phone}
              onChangeText={setPhone}
              placeholder="Número de teléfono"
              keyboardType="phone-pad"
            />
          </View>

          <View className="gap-1.5">
            <Text className={`${colors.subText} text-xs font-semibold uppercase tracking-wider pl-1`}>
              Contraseña nueva
            </Text>
            <InputField
              value={password}
              onChangeText={setPassword}
              placeholder="Nueva contraseña"
              secureTextEntry={true}
            />
          </View>
        </View>

        {/* Save Button */}
        <View className="items-center mt-10">
          <GoldButton
            title="Guardar cambios"
            onPress={handleSave}
            className="w-full py-[14px]"
            textClassName="text-lg"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
