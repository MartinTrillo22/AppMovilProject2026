import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Definimos la estructura de los datos con TypeScript
interface Barber {
    id: string;
    name: string;
    imageUrl: any;
}

// Datos simulados (Mock Data) basados en tus diseños
const mockStaff: Barber[] = [
    {
        id: '1',
        name: 'Mariano',
        imageUrl: require('../../../assets/images/barbero1-Mariano.jpg'),
    },
    {
        id: '2',
        name: 'Luis',
        imageUrl: require('../../../assets/images/barber2-luis.jpg'),
    },
    {
        id: '3',
        name: 'Jose',
        imageUrl: require('../../../assets/images/barber3-jose.jpg'),
    },
];

export default function StaffCarousel() {
    return (
        <View className="mt-6 mb-4 pl-4 justify-center items-center">
            {/* Título de la sección */}
            <Text className="text-white text-lg font-bold mb-3 tracking-widest uppercase">
                Nuestro Staff
            </Text>

            {/* Carrusel Horizontal */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="flex-row"
            >
                {mockStaff.map((barber) => (
                    <TouchableOpacity
                        key={barber.id}
                        className="items-center mr-6"
                        activeOpacity={0.7}
                    >
                        {/* Contenedor de la foto con borde dorado suave */}
                        <View className="w-20 h-20 rounded-full border border-yellow-600/30 overflow-hidden mb-2">
                            <Image
                                source={typeof barber.imageUrl === 'string' ? { uri: barber.imageUrl } : barber.imageUrl}
                                className="w-full h-full object-cover"
                            />
                        </View>

                        {/* Nombre del barbero */}
                        <Text className="text-gray-300 text-sm font-medium">
                            {barber.name}
                        </Text>
                    </TouchableOpacity>
                ))}

                {/* Espaciado extra al final del scroll */}
                <View className="w-4" />
            </ScrollView>
        </View>
    );
}