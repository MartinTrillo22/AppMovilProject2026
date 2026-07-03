import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { getCategorias } from '../../../infrastructure/service/CategoryApi';
import { CategoriaServicio } from '../../../domain/Category';

const getCategoryIcon = (name: string) => {
    const normalized = name.toLowerCase();
    if (normalized.includes('corte')) {
        return <Feather name="scissors" size={22} color="#EAB308" />;
    }
    if (normalized.includes('barba')) {
        return <MaterialCommunityIcons name="mustache" size={24} color="#EAB308" />;
    }
    if (normalized.includes('ceja')) {
        return <MaterialCommunityIcons name="eye-outline" size={24} color="#EAB308" />;
    }
    return <Feather name="tag" size={22} color="#EAB308" />;
};

const ServiceCategories = () => {
    const [categories, setCategories] = useState<CategoriaServicio[]>([]);

    useEffect(() => {
        getCategorias().then(setCategories).catch(() => {});
    }, []);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="my-6"
            contentContainerStyle={{
                flexGrow: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingHorizontal: 16
            }}
        >
            {categories.map((cat) => (
                <View key={cat.id} className="items-center mx-2">
                    <TouchableOpacity className="bg-[#1C1C1E] w-14 h-14 rounded-full items-center justify-center mb-2">
                        {getCategoryIcon(cat.name)}
                    </TouchableOpacity>
                    <Text className="text-gray-400 text-xs font-medium">{cat.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default ServiceCategories;