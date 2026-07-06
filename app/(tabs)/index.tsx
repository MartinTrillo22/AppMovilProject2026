import LocationCard from '@/src/components/barber/LocationCard';
import NextAppointmentCard from '@/src/components/barber/NextAppointmentCard';
import ServiceCategories from '@/src/components/barber/ServiceCategories';
import StaffCarousel from '@/src/components/barber/StaffCarousel';
import HomeHeader from '@/src/components/ui/HomeHeader';
import OfferBanner from '@/src/components/ui/OfferBanner';
import SearchBar1 from '@/src/components/ui/SearchBar1';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeIndex = () => {
  return (
    <SafeAreaView className="flex-1 bg-black pt-4 px-4" edges={['top', 'left', 'right', 'bottom']}>
      <ScrollView className="flex-1 bg-black" showsVerticalScrollIndicator={false}>

        {/* Header Superior */}
        <HomeHeader />

        {/* Buscador */}
        <SearchBar1 />

        {/* Banner de Oferta */}
        <OfferBanner />

        {/* Fila de Categorías */}
        <ServiceCategories />

        {/* Cita siguiente */}
        <NextAppointmentCard />

        {/* Carrusel de Barberos */}
        <StaffCarousel />

        {/* Sección de Localización */}
        <LocationCard />

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeIndex;