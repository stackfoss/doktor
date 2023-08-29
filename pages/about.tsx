import React from 'react';
import { useRouter } from 'next/router';
import { Container, VStack, Text, Heading, Box, Avatar, Button } from '@chakra-ui/react';
import { FaCalendarAlt } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push('/contact'); // Navigate to the contact page
  };

  return (
    <>
      <NavBar />
      <Container maxW="3xl" mt={10} mb={10} centerContent>
        <VStack spacing={10} align="stretch">
          <Heading size="xl" textAlign="center" color="gray.700">
            About Dr. Smith
          </Heading>
          <Box>
            <Avatar size="xl" name="Dr. Smith" src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" mb={4} />
            <Text fontSize="lg" color="gray.600">
              Dr. Jane Smith is a renowned expert in internal medicine with over
              20 years of experience. Her dedication to patient care and
              well-being has earned her a reputation as a trusted healthcare
              provider.
            </Text>
            <Text fontSize="lg" color="gray.600" mt={4}>
              At Dr. Smith&apos;s Medical Center, we are committed to delivering
              personalized and compassionate medical services to our patients.
              Our state-of-the-art facilities and experienced medical staff ensure
              that you receive the highest quality care.
            </Text>
            <Button
              leftIcon={<FaCalendarAlt />}
              colorScheme="teal"
              variant="solid"
              mt={6}
              alignSelf="center"
              onClick={handleBookAppointment}
            >
              Book Appointment
            </Button>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;

