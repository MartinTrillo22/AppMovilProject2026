import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GoogleIcon from '../../assets/icons/google.svg';
import GoldButton from '../../src/components/ui/GoldButton';

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <StatusBar barStyle="light-content" backgroundColor="#000000" />

            <View className="flex-1  px-6 ">

                {/* Top Area: Logo & Title */}
                <View className="items-center mt-6 mb-10">
                    {/* Circular Logo Container */}
                    <View className="w-[200px] h-[200px] bg-black rounded-full border border-white overflow-hidden mb-8 justify-center items-center">
                        <Image
                            source={require('../../assets/images/logo - recortado.jpeg')}
                            className="w-full h-full"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="text-white text-4xl font-normal font-radley text-center">
                        Cree su Cuenta
                    </Text>
                </View>

                {/* Middle Area: Social Buttons & Separator */}
                <View className="w-full">
                    <View className="space-y-4 mb-8">
                        {/* Facebook Button (Visual Only) */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            className="flex-row items-center bg-[#1c1c1e] h-[54px] rounded-full px-5 w-full mb-4"
                        >
                            <View className="w-9 h-9 rounded-full items-center justify-center mr-4">
                                <FacebookIcon width={24} height={24} />
                            </View>
                            <Text className="text-white text-base font-semibold">
                                Continuar con Facebook
                            </Text>
                        </TouchableOpacity>

                        {/* Google Button (Visual Only) */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            className="flex-row items-center bg-[#1c1c1e] h-[54px] rounded-full px-5 w-full"
                        >
                            <View className="w-9 h-9 mr-4 items-center justify-center">
                                {/* El SVG renderizará el logo oficial de Google con sus 4 colores exactos */}
                                <GoogleIcon width={24} height={24} />
                            </View>
                            <Text className="text-white text-base font-semibold">
                                Continuar con Google
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Separator */}
                    <View className="flex-row items-center w-full px-6 my-8">
                        <View className="flex-1 h-[1px] bg-[#e9b978]" />
                        <View className="w-2.5 h-2.5 rounded-full border border-[#e9b978] mx-4" />
                        <View className="flex-1 h-[1px] bg-[#e9b978]" />
                    </View>

                    {/* Email Register Button */}
                    <View className="items-center mt-10">
                        <GoldButton
                            title="Regístrate con tu correo"
                            onPress={() => router.push('../(auth)/register')}
                            className="w-[70%] py-[14px]"
                            textClassName="text-lg"
                        />
                    </View>
                </View>

                {/* Bottom Area: Login Link */}
                <View className="flex-row justify-center items-center mt-10 mb-4">
                    <Text className="text-[#8e8e93] text-lg">
                        ¿Ya tienes una cuenta?{" "}
                    </Text>
                    <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                        <Text className="text-white text-lg font-bold underline">
                            Inicia sesión
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}
