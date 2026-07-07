import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../ThemeContext';

const LocationCard = () => {
    const { colors } = useTheme();

    return (
        <View className="mt-4 mb-8">
            <Text className={`${colors.subText} text-sm px-4 mb-3`}>
                Donde estamos localizados
            </Text>
            <Image
                // Ajustamos la ruta relativa según la nueva ubicación del archivo
                source={require('../../../assets/images/localbarberia.png')}
                className="w-full h-52"
                resizeMode="cover"
            />
            <View className={`px-4 py-4 ${colors.bg}`}>
                <Text className={`${colors.text} font-bold text-lg mb-1`}>PEDROSHOP.</Text>
                <Text className={`${colors.subText} text-sm mb-1`}>Av. Peru 123, Los Olivos</Text>
                <Text className={`${colors.subText} text-sm`}>Abierto - 08:00 h</Text>
            </View>
        </View>
    );
};

export default LocationCard;