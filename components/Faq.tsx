import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Faq = () => {
  return (
    <Container maxW="container.lg" mt={16} mb={16}>
      <Box textAlign="center">
        <Heading as="h2" size="xl" mb={8} color={useColorModeValue('teal.600', 'teal.300')}>
          Frequently Asked Questions
        </Heading>
      </Box>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What services do you offer?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
              We offer a wide range of medical services including general
              check-ups, specialized consultations, diagnostics, vaccinations, and
              more. Feel free to contact us for specific inquiries.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How do I book an appointment?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
              Booking an appointment is easy. You can call our reception at
              +1 (123) 456-7890 or use our online appointment booking system on
              our website.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Are virtual consultations available?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
              Yes, we offer virtual consultations for certain medical issues.
              Please reach out to us to schedule a virtual appointment.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What insurance plans do you accept?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
              We accept a wide range of insurance plans. Please provide us with
              your insurance information during the appointment booking process,
              and we can verify coverage for you.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        {/* Add more FAQ items as needed */}
      </Accordion>
    </Container>
  );
};

export default Faq;

