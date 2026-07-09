import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CategoriaServicio } from '@/domain/Category';
import { useTheme } from '@/src/ThemeContext';

type CategoryNavigatorProps = {
  categories: CategoriaServicio[];
  activeCategoryId: number;
  onSelectCategory: (category: CategoriaServicio) => void;
};

const getCategoryIcon = (name: string, active: boolean) => {
  const color = active ? '#2b1d3f' : '#E9B978';
  const normalized = name.toLowerCase();

  if (normalized.includes('corte')) {
    return <Feather name="scissors" size={18} color={color} />;
  }
  if (normalized.includes('barba')) {
    return <MaterialCommunityIcons name="mustache" size={20} color={color} />;
  }
  if (normalized.includes('tinte')) {
    return <MaterialCommunityIcons name="palette" size={20} color={color} />;
  }
  if (normalized.includes('ceja')) {
    return <MaterialCommunityIcons name="eye-outline" size={20} color={color} />;
  }

  return <Feather name="tag" size={18} color={color} />;
};

export default function CategoryNavigator({
  categories,
  activeCategoryId,
  onSelectCategory,
}: CategoryNavigatorProps) {
  const { colors, isDarkMode } = useTheme();

  if (categories.length === 0) {
    return null;
  }

  return (
    <View
      className={`mb-7 rounded-full border px-2 py-2 ${
        isDarkMode ? 'border-[#2A2418] bg-[#0E0E0E]' : 'border-[#D2B383] bg-[#EEE7DC]'
      }`}
    >
      <View className="flex-row items-center justify-between">
        {categories.map((category) => {
          const active = category.id === activeCategoryId;

          return (
            <TouchableOpacity
              key={category.id}
              className={`flex-1 items-center justify-center gap-1 rounded-full py-2 ${
                active ? 'bg-[#F4BF75]' : ''
              }`}
              onPress={() => onSelectCategory(category)}
              activeOpacity={0.8}
            >
              {getCategoryIcon(category.name, active)}
              <Text
                className={`text-[11px] font-bold ${active ? 'text-[#2b1d3f]' : colors.text}`}
                numberOfLines={1}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
