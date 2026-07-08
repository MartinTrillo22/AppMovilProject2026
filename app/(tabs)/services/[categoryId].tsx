import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoriaServicio } from '@/domain/Category';
import { Servicio, getServiceName, getServicePrice } from '@/domain/Service';
import { getCategorias } from '@/infrastructure/service/CategoryApi';
import { getServicios } from '@/infrastructure/service/ServiceApi';
import { useTheme } from '@/src/ThemeContext';

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

export default function ServicesByCategoryScreen() {
  const { categoryId, name } = useLocalSearchParams<{ categoryId: string; name?: string }>();
  const { colors, isDarkMode } = useTheme();
  const { height } = useWindowDimensions();
  const [categories, setCategories] = useState<CategoriaServicio[]>([]);
  const [services, setServices] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const parsedCategoryId = useMemo(() => Number(categoryId), [categoryId]);
  const currentCategory = categories.find((category) => category.id === parsedCategoryId);
  const title = currentCategory?.name || name || 'Servicios';
  const listMaxHeight = Math.min(height * 0.46, 410);

  useEffect(() => {
    getCategorias().then(setCategories).catch(() => { });
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadServices = async () => {
      try {
        setLoading(true);
        setErrorMessage('');
        const result = await getServicios(parsedCategoryId);
        if (isMounted) {
          setServices(result);
        }
      } catch {
        if (isMounted) {
          setErrorMessage('No se pudieron cargar los servicios.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (Number.isFinite(parsedCategoryId)) {
      loadServices();
    }

    return () => {
      isMounted = false;
    };
  }, [parsedCategoryId]);

  const openService = (service: Servicio) => {
    router.push({
      pathname: '/services/detail/[id]',
      params: {
        id: String(service.id),
        name: getServiceName(service),
      },
    });
  };

  const openCategory = (category: CategoriaServicio) => {
    if (!category.id || category.id === parsedCategoryId) {
      return;
    }

    router.replace({
      pathname: '/services/[categoryId]',
      params: {
        categoryId: String(category.id),
        name: category.name,
      },
    });
  };

  return (
    <SafeAreaView className={`flex-1 ${colors.bg}`} edges={['top', 'left', 'right', 'bottom']}>
      <View className="flex-1 px-6 pt-4">
        <View className="flex-row items-center mb-8">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-11 h-11 items-center justify-center"
            activeOpacity={0.75}
          >
            <Feather name="arrow-left" size={26} color={colors.icon} />
          </TouchableOpacity>

          <Text className={`${colors.text} text-3xl font-bold font-radley flex-1 ml-2`} numberOfLines={1}>
            {title}
          </Text>

          <View className="min-w-20 rounded-full border border-[#E9B978]/50 bg-[#E9B978]/10 px-3 py-2 items-center">
            <Text className="text-[#E9B978] text-base font-bold leading-5">{services.length}</Text>
            <Text className={`${colors.text} text-[10px] font-semibold leading-3`}>
              {services.length === 1 ? 'servicio' : 'servicios'}
            </Text>
          </View>
        </View>

        {loading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator color="#E9B978" />
          </View>
        ) : errorMessage ? (
          <View className="flex-1 items-center justify-center px-8">
            <Text className={`${colors.subText} text-center text-base`}>{errorMessage}</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={services}
              keyExtractor={(item) => String(item.id)}
              numColumns={2}
              columnWrapperStyle={{ gap: 14 }}
              contentContainerStyle={{ gap: 14, paddingBottom: 20 }}
              scrollEnabled={services.length > 4}
              style={services.length > 4 ? { maxHeight: listMaxHeight } : undefined}
              renderItem={({ item }) => {
                const price = getServicePrice(item);

                return (
                  <Pressable
                    onPress={() => openService(item)}
                    className="flex-1 overflow-hidden rounded-md bg-[#B59668]"
                    style={{ aspectRatio: 0.9 }}
                  >
                    <View
                      className={`flex-1 items-center justify-center ${
                        isDarkMode ? 'bg-[#1C1C1E]' : 'bg-[#D8D8D8]'
                      }`}
                    >
                      <Feather name="image" size={32} color={isDarkMode ? '#5B5B5F' : '#9B8C78'} />
                    </View>

                    <View className="min-h-12 items-center justify-center px-2 py-2">
                      <Text className="text-white text-center text-xs font-bold" numberOfLines={2}>
                        {getServiceName(item)}
                      </Text>
                      {typeof price === 'number' && (
                        <Text className="text-[#2b1d3f] text-xs font-bold mt-1">
                          S/ {price.toFixed(2)}
                        </Text>
                      )}
                    </View>
                  </Pressable>
                );
              }}
              ListEmptyComponent={
                <View className="items-center justify-center py-20">
                  <Text className={`${colors.subText} text-center`}>
                    No hay servicios disponibles.
                  </Text>
                </View>
              }
            />

            {categories.length > 0 && (
              <View
                className={`rounded-full border px-2 py-2 mb-7 ${
                  isDarkMode ? 'bg-[#0E0E0E] border-[#2A2418]' : 'bg-[#EEE7DC] border-[#D2B383]'
                }`}
              >
                <View className="flex-row items-center justify-between">
                  {categories.map((category) => {
                    const active = category.id === parsedCategoryId;

                    return (
                      <TouchableOpacity
                        key={category.id}
                        className={`items-center justify-center gap-1 flex-1 rounded-full py-2 ${
                          active ? 'bg-[#F4BF75]' : ''
                        }`}
                        onPress={() => openCategory(category)}
                        activeOpacity={0.8}
                      >
                        {getCategoryIcon(category.name, active)}
                        <Text
                          className={`text-[11px] font-bold ${
                            active ? 'text-[#2b1d3f]' : colors.text
                          }`}
                          numberOfLines={1}
                        >
                          {category.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            )}

            <TouchableOpacity
              className="h-14 rounded-full bg-[#F4BF75] items-center justify-center mb-4"
              activeOpacity={0.85}
            >
              <Text className="text-[#2b1d3f] text-2xl font-bold font-radley">Avanzar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
