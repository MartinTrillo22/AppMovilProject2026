import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

const SearchBar1 = () => {
    return (
        <View className="bg-[#1C1C1E] flex-row items-center px-4 py-3 rounded-xl mx-4 my-2">
            <Feather name="search" size={20} color="#6B7280" />
            <TextInput
                placeholder="Buscar..."
                placeholderTextColor="#6B7280"
                className="text-white ml-3 text-sm flex-1"
            // keyboardAppearance="dark" // Opcional: hace que el teclado en iOS sea oscuro
            />
        </View>
    );
};

export default SearchBar1;