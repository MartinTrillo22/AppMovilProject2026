import { CategoriaServicio } from '@/domain/Category';
import { Servicio } from '@/domain/Service';
import { getCategorias } from '@/infrastructure/service/CategoryApi';
import { getServicios } from '@/infrastructure/service/ServiceApi';
import CategoryNavigator from '@/src/components/barber/CategoryNavigator';
import ServicesGrid from '@/src/components/barber/ServicesGrid';
import { useTheme } from '@/src/ThemeContext';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ServicesByCategoryScreen() {
  const { categoryId, name } = useLocalSearchParams<{ categoryId: string; name?: string }>();
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  const [categories, setCategories] = useState<CategoriaServicio[]>([]);
  const [services, setServices] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const parsedCategoryId = Number(categoryId);
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
        name: service.name,
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
            <ServicesGrid services={services} maxHeight={listMaxHeight} onSelectService={openService} />

            <CategoryNavigator
              categories={categories}
              activeCategoryId={parsedCategoryId}
              onSelectCategory={openCategory}
            />

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
