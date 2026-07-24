import { useTheme } from '@/src/ThemeContext';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom', 'Lu', 'Ma', 'Mie', 'Jue', 'Vie', 'Sab'],
  today: 'Hoy',
};
LocaleConfig.defaultLocale = 'es';

const TIME_SLOTS = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
];

export default function AppointmentScreen() {
  const { servicesData } = useLocalSearchParams<{ servicesData?: string }>();
  const { colors, isDarkMode } = useTheme();

  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [selectedTime, setSelectedTime] = useState<string>('09:00');

  const handleContinuar = () => {
    if (!selectedDate) {
      Alert.alert('Atención', 'Por favor selecciona un día para tu cita.');
      return;
    }
    if (!selectedTime) {
      Alert.alert('Atención', 'Por favor selecciona un horario para tu cita.');
      return;
    }

    const [year, monthStr, dayStr] = selectedDate.split('-');
    const monthIndex = parseInt(monthStr, 10) - 1;
    const monthName = LocaleConfig.locales['es'].monthNames[monthIndex];
    const formattedDate = `${parseInt(dayStr, 10)} de ${monthName} ${year}`;

    router.push({
      pathname: '/services/summary',
      params: {
        servicesData,
        appointmentDate: formattedDate,
        appointmentTime: selectedTime,
      },
    });
  };

  return (
    <SafeAreaView className={`flex-1 ${colors.bg}`} edges={['top', 'left', 'right', 'bottom']}>
      <View className="flex-1 px-6 pt-4">
        {/* Navigation / Header */}
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/services/[categoryId]',
              params: {
                categoryId: '1',
                selections: servicesData,
              },
            })
          }
          className="flex-row items-center mb-6"
          activeOpacity={0.75}
        >
          <Feather name="arrow-left" size={24} color={colors.icon} />
          <Text className={`${colors.text} text-base font-semibold ml-2`}>Regresar</Text>
        </TouchableOpacity>

        <Text className={`${colors.text} text-2xl font-bold font-radley mb-6`}>
          Seleccione el dia que desea el corte
        </Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {/* Calendario con librería react-native-calendars */}
          <View className="mb-6 overflow-hidden rounded-2xl border border-[#2C2C2E]">
            <Calendar
              current={selectedDate}
              onDayPress={(day) => setSelectedDate(day.dateString)}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: '#F4BF75',
                  selectedTextColor: '#2b1d3f',
                },
              }}
              theme={{
                backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF',
                calendarBackground: isDarkMode ? '#1C1C1E' : '#FFFFFF',
                textSectionTitleColor: '#E9B978',
                selectedDayBackgroundColor: '#F4BF75',
                selectedDayTextColor: '#2b1d3f',
                todayTextColor: '#F4BF75',
                dayTextColor: isDarkMode ? '#FFFFFF' : '#1C1C1E',
                textDisabledColor: isDarkMode ? '#444444' : '#CCCCCC',
                dotColor: '#F4BF75',
                selectedDotColor: '#2b1d3f',
                arrowColor: '#E9B978',
                disabledArrowColor: '#444444',
                monthTextColor: isDarkMode ? '#FFFFFF' : '#1C1C1E',
                indicatorColor: '#E9B978',
                textDayFontWeight: '600',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
                textDayFontSize: 16,
                textMonthFontSize: 18,
                textDayHeaderFontSize: 14,
              }}
            />
          </View>

          {/* Horarios */}
          <View className="flex-row items-center justify-between mb-4">
            <Text className={`${colors.text} text-xl font-bold font-radley`}>
              Seleccione el horario
            </Text>
            <Text className="text-gray-400 text-sm">Otros</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8">
            <View className="flex-row gap-3">
              {TIME_SLOTS.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <TouchableOpacity
                    key={time}
                    onPress={() => setSelectedTime(time)}
                    className={`px-5 py-3 rounded-xl border ${
                      isSelected
                        ? 'bg-[#F4BF75] border-[#F4BF75]'
                        : 'bg-[#1C1C1E] border-gray-800'
                    }`}
                    activeOpacity={0.8}
                  >
                    <Text
                      className={`text-base font-bold ${
                        isSelected ? 'text-[#2b1d3f]' : 'text-white'
                      }`}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* Botón Continuar */}
          <TouchableOpacity
            onPress={handleContinuar}
            className="h-14 rounded-full bg-[#F4BF75] items-center justify-center mt-2"
            activeOpacity={0.85}
          >
            <Text className="text-[#2b1d3f] text-2xl font-bold font-radley">Continuar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
