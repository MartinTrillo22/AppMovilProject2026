import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Servicio,
  getServiceDescription,
  getServiceName,
  getServicePrice,
} from '@/domain/Service';
import { getServicioById } from '@/infrastructure/service/ServiceApi';
import { useTheme } from '@/src/ThemeContext';

export default function ServiceDetailScreen() {
  const { id, name } = useLocalSearchParams<{ id: string; name?: string }>();
  const { colors, isDarkMode } = useTheme();
  const [service, setService] = useState<Servicio | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadService = async () => {
      try {
        setLoading(true);
        setErrorMessage('');
        const result = await getServicioById(Number(id));
        if (isMounted) {
          setService(result);
        }
      } catch {
        if (isMounted) {
          setErrorMessage('No se pudo cargar este servicio.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadService();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const price = service ? getServicePrice(service) : undefined;

  return (
    <SafeAreaView className={`flex-1 ${colors.bg}`} edges={['top', 'left', 'right', 'bottom']}>
      <View className="flex-1 px-6 pt-4">
        <View className="flex-row items-center mb-8">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-11 h-11 items-center justify-center mr-2"
            activeOpacity={0.75}
          >
            <Feather name="arrow-left" size={26} color={colors.icon} />
          </TouchableOpacity>
          <Text className={`${colors.text} text-3xl font-bold font-radley flex-1`} numberOfLines={1}>
            {service ? getServiceName(service) : name || 'Servicio'}
          </Text>
        </View>

        {loading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator color="#E9B978" />
          </View>
        ) : errorMessage ? (
          <View className="flex-1 items-center justify-center px-8">
            <Text className={`${colors.subText} text-center text-base`}>{errorMessage}</Text>
          </View>
        ) : service ? (
          <View className="flex-1">
            <View
              className={`w-full rounded-md items-center justify-center mb-8 ${
                isDarkMode ? 'bg-[#1C1C1E]' : 'bg-[#D8D8D8]'
              }`}
              style={{ aspectRatio: 1.1 }}
            >
              <Feather name="image" size={42} color={isDarkMode ? '#5B5B5F' : '#9B8C78'} />
            </View>

            <Text className={`${colors.text} text-4xl font-bold font-radley mb-3`}>
              {getServiceName(service)}
            </Text>
            <Text className={`${colors.subText} text-base leading-6 mb-5`}>
              {getServiceDescription(service)}
            </Text>

            {typeof price === 'number' && (
              <Text className="text-[#E9B978] text-2xl font-bold mb-8">S/ {price.toFixed(2)}</Text>
            )}

            <TouchableOpacity
              className="h-14 rounded-full bg-[#F4BF75] items-center justify-center mt-auto mb-4"
              activeOpacity={0.85}
            >
              <Text className="text-[#2b1d3f] text-2xl font-bold font-radley">Avanzar</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
