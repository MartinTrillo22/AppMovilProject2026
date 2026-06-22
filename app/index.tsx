import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import GoldButton from '../src/components/ui/GoldButton';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} className="flex-1 bg-black">
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      <View style={styles.content} className="flex-1 items-center justify-between px-6 py-10">
        {/* Logo Section */}
        <View style={styles.logoContainer} className="flex-[1.2] justify-center items-center w-full">
          <Image
            source={require('../assets/images/logo.jpeg')}
            style={styles.logo}
            className="w-[280px] h-[280px]"
            resizeMode="contain"
          />
        </View>

        {/* Text Section */}
        <View style={styles.textContainer} className="flex-1 justify-center items-center w-full">
          <Text style={styles.title} className="text-white text-4xl text-center mb-6 font-normal">
            Bienvenido
          </Text>
          <Text style={styles.subtitle} className="text-white text-lg text-center font-light leading-7">
            Tu próxima cita está a solo un{"\n"}toque de distancia.
          </Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer} className="w-full pb-5 items-center">
          <GoldButton
            title="Continuar"
            onPress={() => router.push('/(auth)/regsiter')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  logoContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 280,
    height: 280,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 24,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 20,
    alignItems: 'center',
  },
});
