import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';
import { useTheme } from '../../ThemeContext';

const SearchBar1 = () => {
    const { colors, isDarkMode } = useTheme();

    return (
        <View className={`${colors.cardBg} flex-row items-center px-4 py-3 rounded-xl mx-4 my-2 border ${colors.border}`}>
            <Feather name="search" size={20} color={isDarkMode ? '#6B7280' : '#2b1d3f'} />
            <TextInput
                placeholder="Buscar..."
                placeholderTextColor={isDarkMode ? '#6B7280' : '#684920'}
                className={`${colors.text} ml-3 text-sm flex-1`}
            />
        </View>
    );
};

export default SearchBar1;