import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoldButton from '../src/components/ui/GoldButton';
import { useTheme } from '../src/ThemeContext';

export default function IndexScreen() {
    const router = useRouter();
    const { colors, isDarkMode } = useTheme();

    return (
        <SafeAreaView className={`flex-1 ${colors.bg}`}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? '#000000' : '#E5E5E5'} />

            <View className="flex-1 px-6 pb-5">
                {/* Logo Section - Top Area */}
                <View className="flex-[4] justify-center items-center w-full mb-8 mt-16">
                    <Image
                        source={require('../assets/images/logo.jpeg')}
                        className="flex-[1] h-full"
                        resizeMode="contain"
                    />
                </View>

                {/* Text Section - Middle Area (Vertically Centered) */}
                <View className="flex-[6] mt-10 items-center">
                    <Text className={`${colors.text} text-4xl text-center mb-3 font-normal font-radley`}>
                        Bienvenido
                    </Text>
                    <Text className={`${colors.subText} text-xl text-center font-light leading-10 mt-6 font-radley w-4/5 mx-auto mb-2`}>
                        Tu próxima cita está a solo un toque de distancia.
                    </Text>

                    <GoldButton
                        title="Continuar"
                        onPress={() => router.push('../(auth)/welcome')}
                        className="w-[50%] mt-12 mx-auto"
                    />
                </View>
            </View>
        </SafeAreaView >
    );
}
