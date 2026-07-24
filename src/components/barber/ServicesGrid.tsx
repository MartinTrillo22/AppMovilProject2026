import { Servicio } from '@/domain/Service';
import { useTheme } from '@/src/ThemeContext';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

type ServicesGridProps = {
  services: Servicio[];
  maxHeight: number;
  selectedServiceIds?: number[];
  onToggleSelect: (service: Servicio) => void;
};

export default function ServicesGrid({
  services,
  maxHeight,
  selectedServiceIds = [],
  onToggleSelect,
}: ServicesGridProps) {
  const { colors, isDarkMode } = useTheme();

  return (
    <FlatList
      data={services}
      keyExtractor={(item) => String(item.id)}
      numColumns={2}
      columnWrapperStyle={{ gap: 14 }}
      contentContainerStyle={{ gap: 14, paddingBottom: 20 }}
      scrollEnabled={services.length > 4}
      style={services.length > 4 ? { maxHeight } : undefined}
      renderItem={({ item }) => {
        const isSelected = selectedServiceIds.includes(item.id);
        const price = item.price;

        return (
          <Pressable
            onPress={() => onToggleSelect(item)}
            className={`flex-1 overflow-hidden rounded-md border-2 ${
              isSelected ? 'border-[#F4BF75]' : 'border-transparent'
            }`}
            style={{ aspectRatio: 0.9 }}
          >
            <View
              className="flex-1 relative items-center justify-center"
              style={{ backgroundColor: isDarkMode ? '#1C1C1E' : '#D8D8D8' }}
            >
              <View
                className={`absolute top-2 left-2 z-10 w-6 h-6 rounded items-center justify-center border ${
                  isSelected ? 'bg-[#F4BF75] border-[#F4BF75]' : 'bg-black/40 border-white/70'
                }`}
              >
                {isSelected && <Feather name="check" size={16} color="#2b1d3f" />}
              </View>

              <Feather name="image" size={32} color={isDarkMode ? '#5B5B5F' : '#9B8C78'} />
            </View>

            <View className="min-h-12 items-center justify-center px-2 py-2 bg-[#B59668]">
              <Text className="text-center text-xs font-bold text-white" numberOfLines={2}>
                {item.name}
              </Text>
              {typeof price === 'number' && (
                <Text className="mt-1 text-xs font-bold text-[#2b1d3f]">S/ {price.toFixed(2)}</Text>
              )}
            </View>
          </Pressable>
        );
      }}
      ListEmptyComponent={
        <View className="items-center justify-center py-20">
          <Text className={`${colors.subText} text-center`}>No hay servicios disponibles.</Text>
        </View>
      }
    />
  );
}


