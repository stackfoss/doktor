import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AppointmentFeatures from '../components/AppointmentFeatures';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import MedicalCalculators from '../components/MedicalCalculators';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import FAQ from '../components/Faq'; // Import your FAQ component

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Box as="main">
          <NavBar />
          <Hero />
          <Stats />
          <AppointmentFeatures />
          <Testimonials />
          <MedicalCalculators />
          <FAQ/ > 
          <NewsLetter />
          <Footer />
        </Box>
      </main>
    </div>
  );
};

export default Home;

