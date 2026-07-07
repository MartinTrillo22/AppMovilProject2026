import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../ThemeContext';
import { useAuth } from '../../context/AuthContext';

const toTitleCase = (str: string) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const HomeHeader = () => {
    const { user } = useAuth();
    const userName = toTitleCase(user?.fullName || "Usuario");
    const initial = userName.charAt(0).toUpperCase();
    const { colors, isDarkMode } = useTheme();

    return (
        <View className="flex-row justify-between items-center px-4 py-4 mt-2">
            <View className="flex-row items-center">
                {/* Initial Letter Avatar */}
                <View className={`w-12 h-12 rounded-full bg-[#e9b978] items-center justify-center border ${isDarkMode ? 'border-gray-800' : 'border-[#e9b978]'}`}>
                    <Text className="text-[#2b1d3f] text-2xl font-bold font-radley">
                        {initial}
                    </Text>
                </View>
                <View className="ml-3">
                    <Text className={`${colors.subText} text-xs font-normal`}>
                        Bienvenido
                    </Text>
                    <Text className={`${colors.text} text-2xl font-bold font-radley`}>
                        {userName}
                    </Text>
                </View>
            </View>

            <View className="flex-row items-center gap-4">
                <TouchableOpacity>
                    <Feather name="bell" size={26} color={colors.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="user-plus" size={26} color={colors.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeHeader;