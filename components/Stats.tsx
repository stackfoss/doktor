import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { FaUsers, FaTwitter } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

interface StatData {
  label: string;
  score: string;
  icon: React.ReactElement;
}

const statData: StatData[] = [
  {
    label: 'Weekly Appointments',
    score: '> 500',
    icon: <BsPerson size={24} color="#FF5733" />,
  },
  {
    label: 'Positive Reviews',
    score: '4.9/5',
    icon: <AiFillStar size={24} color="#f2de76" />,
  },
  {
    label: 'Satisfied Patients',
    score: ' > 11.2K',
    icon: <FaUsers size={24} color="#68d391" />,
  },
  {
    label: 'Twitter Followers',
    score: '23K',
    icon: <FaTwitter size={24} color="#3182ce" />,
  },
];

const Stats = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const tealColor = useColorModeValue("teal.600", "teal.500");

  return (
    <Container maxW="5xl" p={{ base: 4, sm: 10 }}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
        <Stack spacing={4}>
          <chakra.h1
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            color={tealColor}
          >
            Our Achievements
          </chakra.h1>
          <Text fontSize="md" color={textColor} maxW="480px">
            We take immense pride in our journey of providing top-notch
            healthcare services and transforming lives. Our commitment to
            excellence and patient satisfaction drives our success.
          </Text>
        </Stack>
        <SimpleGrid columns={2} spacing={6} pt={8} pl={{ base: 0, md: 10 }}>
          {statData.map((data, index) => (
            <Stack
              key={index}
              p={4}
              border="1px solid"
              borderColor={textColor}
              borderRadius="md"
              align="center"
              spacing={1}
              bg={tealColor}
            >
              <Box fontSize="2xl" fontWeight="bold" color={textColor}>
                {data.score}
              </Box>
              <Box fontSize="lg" color={tealColor}>
                {data.icon}
              </Box>
              <Text fontSize="md" color={textColor}>
                {data.label}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Stats;

