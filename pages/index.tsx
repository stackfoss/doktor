import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import ContactInfo from '../components/ContactInfo';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AppointmentFeatures from '../components/AppointmentFeatures';
import FAQ from '../components/Faq';
import Testimonials from '../components/Testimonials';
import MedicalCalculators from '../components/MedicalCalculators';
import HealthTips from '../components/HealthTips';
import Quotes from '../components/Quotes';
import PublicHolidays from '../components/PublicHolidays';
import BookAppointment from '../components/BookAppointment';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Box as="main">
        <ContactInfo />
          <NavBar />
          <Hero />
          <Stats />
          <AppointmentFeatures />
          <FAQ />
          <Testimonials />
          <MedicalCalculators />
          <HealthTips />
          <Quotes />
          <PublicHolidays />
          <div id="BookAppointment">
          <BookAppointment />
          </div>
          <Footer />
        </Box>
      </main>
    </div>
  );
};

export default Home;

