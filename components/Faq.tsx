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
} from '@chakra-ui/react';

const Faq = () => {
  return (
    <Container maxW="container.lg" mt={16} mb={16}>
      <Box textAlign="center">
        <Heading as="h2" size="xl" mb={8}>
          Frequently Asked Questions
        </Heading>
      </Box>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What services do you offer?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We offer a wide range of medical services including general
            check-ups, specialized consultations, diagnostics, vaccinations, and
            more. Feel free to contact us for specific inquiries.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do I book an appointment?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Booking an appointment is easy. You can call our reception at
            +1 (123) 456-7890 or use our online appointment booking system on
            our website.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Are virtual consultations available?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, we offer virtual consultations for certain medical issues.
            Please reach out to us to schedule a virtual appointment.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What insurance plans do you accept?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We accept a wide range of insurance plans. Please provide us with
            your insurance information during the appointment booking process,
            and we can verify coverage for you.
          </AccordionPanel>
        </AccordionItem>
        {/* Add more FAQ items as needed */}
      </Accordion>
    </Container>
  );
};

export default Faq;

