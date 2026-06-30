import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const NextAppointmentCard = () => {
    // Cuando conectes tu base de datos, aquí validarás si hay una cita activa.
    // Ejemplo: if (!hasActiveAppointment) return null;

    return (
        <View className="bg-[#1C1C1E] mx-4 my-2 p-4 rounded-2xl border border-yellow-600/20">
            <Text className="text-gray-400 text-xs font-bold tracking-wider mb-2 uppercase">
                Tu próxima cita
            </Text>

            <View className="flex-row justify-between items-center">
                <View className="flex-1 pr-4">
                    <Text className="text-white text-base font-semibold">
                        Mañana, 12:00 PM
                    </Text>
                    <Text className="text-[#EAB308] text-sm mt-1 font-medium">
                        con Shelby
                    </Text>
                </View>

                <TouchableOpacity
                    className="bg-[#2C2C2E] px-4 py-2 rounded-xl flex-row items-center"
                    activeOpacity={0.7}
                >
                    <Text className="text-white font-bold text-xs mr-1">VER</Text>
                    <Feather name="chevron-right" size={16} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NextAppointmentCard;