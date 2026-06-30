import React from 'react';
import { Image, Text, View } from 'react-native';

const LocationCard = () => {
    return (
        <View className="mt-4 mb-8">
            <Text className="text-gray-400 text-sm px-4 mb-3">
                Donde estamos localizados
            </Text>
            <Image
                // Ajustamos la ruta relativa según la nueva ubicación del archivo
                source={require('../../../assets/images/localbarberia.png')}
                className="w-full h-52"
                resizeMode="cover"
            />
            <View className="px-4 py-4 bg-black">
                <Text className="text-white font-bold text-lg mb-1">PEDROSHOP.</Text>
                <Text className="text-gray-400 text-sm mb-1">Av. Peru 123, Los Olivos</Text>
                <Text className="text-gray-400 text-sm">Abierto - 08:00 h</Text>
            </View>
        </View>
    );
};

export default LocationCard;