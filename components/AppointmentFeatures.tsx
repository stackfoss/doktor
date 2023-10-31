import { Container, Box, chakra, Text, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { MdEventAvailable, MdAssignment, MdLocalHospital, MdLibraryBooks } from 'react-icons/md';

interface IFeature {
  heading: string;
  content: string;
  icon: React.ElementType;
}

const features: IFeature[] = [
  {
    heading: 'Easy Appointments',
    content:
      'Book appointments with ease using our intuitive scheduling system, available 24/7.',
    icon: MdEventAvailable,
  },
  {
    heading: 'Quick Consultations',
    content: 'Get quick consultations with experienced doctors to discuss your health concerns.',
    icon: MdAssignment,
  },
  {
    heading: 'Expert Medical Care',
    content:
      'Access personalized and expert medical care from our team of experienced doctors and specialists.',
    icon: MdLocalHospital,
  },
  {
    heading: 'Access Medical Resources',
    content: 'Access a library of medical resources, FAQs, and health tips.',
    icon: MdLibraryBooks,
  },
];

const AppointmentFeatures = () => {
  const headingColor = useColorModeValue("teal.600", "teal.200");
  const textColor = useColorModeValue("gray.500", "gray.300");
  const iconColor = useColorModeValue("blue.400", "teal.400");
  const titleSize = "4xl";
  const contentSize = "md";

  return (
    <Box py={{ base: 8, md: 16 }}>
      <Container maxW="6xl" p={{ base: 5, md: 10 }}>
        <chakra.h3 fontSize={titleSize} fontWeight="bold" mb={3} textAlign="center" color={headingColor}>
          Why Choose Us?
        </chakra.h3>
        <chakra.p fontSize={contentSize} color={textColor} mb={8} textAlign="center">
          Discover the benefits of our services that make us stand out.
        </chakra.p>
        <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={4} mb={8}>
          {features.map((feature, index) => (
            <Box key={index} textAlign="center">
              <Icon as={feature.icon} w={10} h={10} color={iconColor} />
              <chakra.h3 fontWeight="semibold" fontSize="2xl">
                {feature.heading}
              </chakra.h3>
              <Text fontSize={contentSize} color={textColor}>{feature.content}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AppointmentFeatures;

