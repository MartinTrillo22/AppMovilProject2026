import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const HomeIndex = () => {
  return (
    <SafeAreaView className="flex-1 bg-black" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* Header Superior */}
        <View className="flex-row justify-between items-center px-4 py-4 mt-2">
          <View className="flex-row items-center">
            {/* Checkerboard Avatar */}
            <View className="w-12 h-12 rounded-full overflow-hidden bg-white flex-row flex-wrap border border-gray-800">
              {Array.from({ length: 16 }).map((_, index) => {
                const row = Math.floor(index / 4);
                const col = index % 4;
                const isBlack = (row + col) % 2 === 0;
                return (
                  <View 
                    key={index} 
                    className={`w-3 h-3 ${isBlack ? 'bg-black' : 'bg-white'}`} 
                  />
                );
              })}
            </View>
            <Text className="text-white text-base font-normal ml-3">Bienvenido, Usuario</Text>
          </View>
          
          <View className="flex-row items-center gap-4">
            <TouchableOpacity>
              <Feather name="bell" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="user-plus" size={26} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Buscador */}
        <View className="bg-[#1C1C1E] flex-row items-center px-4 py-3 rounded-xl mx-4 my-2">
          <Feather name="search" size={20} color="#6B7280" />
          <Text className="text-gray-500 ml-3 text-sm">Buscar...</Text>
        </View>

        {/* Banner de Oferta */}
        <View className="bg-[#BCECE0] rounded-3xl p-5 mx-4 my-4 flex-row justify-between items-stretch">
          <View className="flex-1 pr-4 justify-between">
            <Text className="text-[#4F7C77] font-bold text-xs tracking-wider uppercase">OFERTA</Text>
            <Text className="text-[#28534E] font-bold text-xl mt-1">Solo hoy aproveche</Text>
            <Text className="text-[#33645F] text-xs mt-2 leading-relaxed font-semibold">
              ¡Córtate el pelo y tiñelo con descuento . ¡SOLO HOY!
            </Text>
          </View>
          <View className="justify-center items-center">
            <Text className="text-[#4F7C77] font-black text-4xl">30%</Text>
          </View>
        </View>

        {/* Fila de Categorías */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          className="my-6"
          contentContainerStyle={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 16 }}
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

          {/* tinte */}
          <View className="items-center mx-2">
            <TouchableOpacity className="bg-[#1C1C1E] w-14 h-14 rounded-full items-center justify-center mb-2">
              <MaterialCommunityIcons name="palette" size={24} color="#EAB308" />
            </TouchableOpacity>
            <Text className="text-gray-400 text-xs font-medium">tinte</Text>
          </View>

          {/* Cejas */}
          <View className="items-center mx-2">
            <TouchableOpacity className="bg-[#1C1C1E] w-14 h-14 rounded-full items-center justify-center mb-2">
              <MaterialCommunityIcons name="eye-outline" size={24} color="#EAB308" />
            </TouchableOpacity>
            <Text className="text-gray-400 text-xs font-medium">Cejas</Text>
          </View>
        </ScrollView>

        {/* Sección de Localización */}
        <View className="mt-4 mb-8">
          <Text className="text-gray-400 text-sm px-4 mb-3">Donde estamos localizados</Text>
          <Image 
            source={require('../../assets/images/localbarberia.png')} 
            className="w-full h-52"
            resizeMode="cover"
          />
          <View className="px-4 py-4 bg-black">
            <Text className="text-white font-bold text-lg mb-1">PEDROSHOP.</Text>
            <Text className="text-gray-400 text-sm mb-1">Av. Peru 123, Los Olivos</Text>
            <Text className="text-gray-400 text-sm">Abierto - 08:00 h</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeIndex;