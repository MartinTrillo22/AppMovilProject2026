import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ServiceCategories = () => {
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
            {/* Cortes */}
            <View className="items-center mx-2">
                <TouchableOpacity className="bg-[#1C1C1E] w-14 h-14 rounded-full items-center justify-center mb-2">
                    <Feather name="scissors" size={22} color="#EAB308" />
                </TouchableOpacity>
                <Text className="text-gray-400 text-xs font-medium">Cortes</Text>
            </View>

            {/* Barba */}
            <View className="items-center mx-2">
                <TouchableOpacity className="bg-[#1C1C1E] w-14 h-14 rounded-full items-center justify-center mb-2">
                    <MaterialCommunityIcons name="mustache" size={24} color="#EAB308" />
                </TouchableOpacity>
                <Text className="text-gray-400 text-xs font-medium">Barba</Text>
            </View>

            {/* Cejas */}
            <View className="items-center mx-2">
                <TouchableOpacity className="bg-[#1C1C1E] w-14 h-14 rounded-full items-center justify-center mb-2">
                    <MaterialCommunityIcons name="eye-outline" size={24} color="#EAB308" />
                </TouchableOpacity>
                <Text className="text-gray-400 text-xs font-medium">Cejas</Text>
            </View>
        </ScrollView>
    );
};

export default ServiceCategories;