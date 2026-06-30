import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const HomeHeader = () => {
    return (
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
                <Text className="text-white text-base font-normal ml-3">
                    Bienvenido, Usuario
                </Text>
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
    );
};

export default HomeHeader;