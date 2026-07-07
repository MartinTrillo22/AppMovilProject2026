import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../ThemeContext';

const NextAppointmentCard = () => {
    const { colors, isDarkMode } = useTheme();

    return (
        <View className={`${colors.cardBg} mx-4 my-2 p-4 rounded-2xl border ${isDarkMode ? 'border-yellow-600/20' : 'border-[#e9b978]'}`}>
            <Text className={`${colors.subText} text-xs font-bold tracking-wider mb-2 uppercase`}>
                Tu próxima cita
            </Text>

            <View className="flex-row justify-between items-center">
                <View className="flex-1 pr-4">
                    <Text className={`${colors.text} text-base font-semibold`}>
                        Mañana, 12:00 PM
                    </Text>
                    <Text className="text-[#EAB308] text-sm mt-1 font-medium">
                        con Shelby
                    </Text>
                </View>

                <TouchableOpacity
                    className={`${isDarkMode ? 'bg-[#2C2C2E]' : 'bg-[#E5E5E5]'} px-4 py-2 rounded-xl flex-row items-center border ${colors.border}`}
                    activeOpacity={0.7}
                >
                    <Text className={`${colors.text} font-bold text-xs mr-1`}>VER</Text>
                    <Feather name="chevron-right" size={16} color={colors.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NextAppointmentCard;