import React from 'react';
import { Text, View } from 'react-native';

const OfferBanner = () => {
    return (
        <View className="bg-[#BCECE0] rounded-3xl p-5 mx-4 my-4 flex-row justify-between items-stretch">
            <View className="flex-1 pr-4 justify-between">
                <Text className="text-[#4F7C77] font-bold text-xs tracking-wider uppercase">
                    OFERTA
                </Text>
                <Text className="text-[#28534E] font-bold text-xl mt-1">
                    Solo hoy aproveche
                </Text>
                <Text className="text-[#33645F] text-xs mt-2 leading-relaxed font-semibold">
                    ¡Córtate el pelo y tiñelo con descuento . ¡SOLO HOY!
                </Text>
            </View>
            <View className="justify-center items-center">
                <Text className="text-[#4F7C77] font-black text-4xl">30%</Text>
            </View>
        </View>
    );
};

export default OfferBanner;