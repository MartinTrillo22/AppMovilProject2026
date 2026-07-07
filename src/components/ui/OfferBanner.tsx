import React from 'react';
import { Text, View } from 'react-native';

const OfferBanner = () => {
    return (
        <View className="bg-[#e9b978] rounded-3xl p-5 mx-4 my-4 flex-row justify-between items-stretch">
            <View className="flex-1 pr-4 justify-between">
                <Text className="text-[#684920] font-bold text-xs tracking-wider uppercase">
                    OFERTA ESPECIAL
                </Text>
                <Text className="text-[#2b1d3f] font-bold text-xl mt-1 font-radley">
                    Solo hoy aproveche
                </Text>
                <Text className="text-[#4e3920] text-xs mt-2 leading-relaxed font-semibold">
                    ¡Córtate el pelo y tiñelo con descuento. ¡SOLO HOY!
                </Text>
            </View>
            <View className="justify-center items-center">
                <Text className="text-[#2b1d3f] font-black text-4xl font-radley">30%</Text>
            </View>
        </View>
    );
};

export default OfferBanner;