import { Servicio } from '@/domain/Service';
import { useTheme } from '@/src/ThemeContext';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ServicesSummaryScreen() {
  const { servicesData } = useLocalSearchParams<{ servicesData?: string }>();
  const { colors, isDarkMode } = useTheme();

  const selectedServices: Servicio[] = servicesData ? JSON.parse(servicesData) : [];

  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [appliedCode, setAppliedCode] = useState('');
  const [discountError, setDiscountError] = useState('');

  const subtotal = selectedServices.reduce((sum, service) => sum + (service.price || 0), 0);

  const handleApplyDiscount = () => {
    const trimmed = discountCode.trim().toUpperCase();
    if (!trimmed) {
      setDiscountError('Ingresa un código de descuento.');
      return;
    }

    if (trimmed === 'DESCUENTO10' || trimmed === 'BARBER10') {
      const calculatedDiscount = subtotal * 0.1; // 10% de descuento
      setDiscountAmount(calculatedDiscount);
      setAppliedCode(trimmed);
      setDiscountError('');
    } else if (trimmed === 'PROMO5') {
      const calculatedDiscount = 5; // S/ 5 de descuento
      setDiscountAmount(Math.min(calculatedDiscount, subtotal));
      setAppliedCode(trimmed);
      setDiscountError('');
    } else {
      // Cupón demostrativo general que otorga 15% de descuento
      const calculatedDiscount = subtotal * 0.15;
      setDiscountAmount(calculatedDiscount);
      setAppliedCode(trimmed);
      setDiscountError('');
    }
  };

  const totalPayable = Math.max(0, subtotal - discountAmount);

  const handleConfirmReservation = () => {
    Alert.alert(
      'Reserva Confirmada',
      `¡Tu reserva por un total de S/ ${totalPayable.toFixed(2)} ha sido procesada con éxito!`
    );
  };

  return (
    <SafeAreaView className={`flex-1 ${colors.bg}`} edges={['top', 'left', 'right', 'bottom']}>
      <View className="flex-1 px-6 pt-4">
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-11 h-11 items-center justify-center mr-2"
            activeOpacity={0.75}
          >
            <Feather name="arrow-left" size={26} color={colors.icon} />
          </TouchableOpacity>
          <Text className={`${colors.text} text-3xl font-bold font-radley flex-1`} numberOfLines={1}>
            Resumen de Reserva
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {/* Listado de Servicios Escogidos */}
          <Text className={`${colors.text} text-xl font-bold mb-4 font-radley`}>
            Servicios Seleccionados ({selectedServices.length})
          </Text>

          {selectedServices.length === 0 ? (
            <View className="p-6 rounded-xl bg-black/20 items-center justify-center mb-6">
              <Text className={`${colors.subText} text-base`}>No has seleccionado ningún servicio.</Text>
            </View>
          ) : (
            <View className="gap-3 mb-6">
              {selectedServices.map((service) => (
                <View
                  key={service.id}
                  className={`flex-row items-center justify-between p-4 rounded-xl border ${
                    isDarkMode ? 'bg-[#1C1C1E] border-[#2C2C2E]' : 'bg-white border-gray-200'
                  }`}
                >
                  <View className="flex-1 mr-3">
                    <Text className={`${colors.text} text-lg font-bold font-radley`}>
                      {service.name}
                    </Text>
                  </View>
                  <Text className="text-[#E9B978] text-lg font-bold">
                    S/ {service.price ? service.price.toFixed(2) : '0.00'}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Sección Código de Descuento */}
          <Text className={`${colors.text} text-xl font-bold mb-3 font-radley`}>
            Código de Descuento
          </Text>
          <View className="flex-row items-center gap-3 mb-2">
            <View
              className={`flex-1 flex-row items-center px-4 h-13 rounded-xl border ${
                isDarkMode ? 'bg-[#1C1C1E] border-[#2C2C2E]' : 'bg-white border-gray-300'
              }`}
            >
              <Feather name="tag" size={20} color={colors.subText} />
              <TextInput
                value={discountCode}
                onChangeText={(text) => {
                  setDiscountCode(text);
                  setDiscountError('');
                }}
                placeholder="Ej: BARBER10"
                placeholderTextColor={isDarkMode ? '#666' : '#999'}
                className={`flex-1 ml-3 text-base ${colors.text}`}
                autoCapitalize="characters"
              />
            </View>
            <TouchableOpacity
              onPress={handleApplyDiscount}
              className="h-13 px-5 rounded-xl bg-[#E9B978] items-center justify-center"
              activeOpacity={0.8}
            >
              <Text className="text-[#2b1d3f] font-bold text-base">Aplicar</Text>
            </TouchableOpacity>
          </View>

          {appliedCode ? (
            <Text className="text-green-500 text-sm font-semibold mb-4 ml-1">
              ✓ Código "{appliedCode}" aplicado exitosamente
            </Text>
          ) : discountError ? (
            <Text className="text-red-400 text-sm mb-4 ml-1">{discountError}</Text>
          ) : (
            <View className="mb-4" />
          )}

          {/* Desglose de Precios */}
          <View
            className={`p-5 rounded-xl border ${
              isDarkMode ? 'bg-[#1C1C1E] border-[#2C2C2E]' : 'bg-white border-gray-200'
            } gap-3 mb-6`}
          >
            <View className="flex-row justify-between items-center">
              <Text className={`${colors.subText} text-base`}>Suma Total (Subtotal):</Text>
              <Text className={`${colors.text} text-base font-semibold`}>
                S/ {subtotal.toFixed(2)}
              </Text>
            </View>

            {discountAmount > 0 && (
              <View className="flex-row justify-between items-center">
                <Text className="text-green-500 text-base">Descuento aplicado:</Text>
                <Text className="text-green-500 text-base font-semibold">
                  - S/ {discountAmount.toFixed(2)}
                </Text>
              </View>
            )}

            <View className={`h-[1px] my-1 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

            <View className="flex-row justify-between items-center">
              <Text className={`${colors.text} text-xl font-bold font-radley`}>
                Precio Final a Pagar:
              </Text>
              <Text className="text-[#E9B978] text-2xl font-bold">
                S/ {totalPayable.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* Botón de Confirmación */}
          <TouchableOpacity
            onPress={handleConfirmReservation}
            disabled={selectedServices.length === 0}
            className={`h-14 rounded-full items-center justify-center mt-2 ${
              selectedServices.length > 0 ? 'bg-[#F4BF75]' : 'bg-gray-600 opacity-50'
            }`}
            activeOpacity={0.85}
          >
            <Text className="text-[#2b1d3f] text-2xl font-bold font-radley">Confirmar Reserva</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
