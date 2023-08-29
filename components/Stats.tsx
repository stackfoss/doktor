import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, Icon, Flex } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { FaUsers, FaTwitter, FaDownload } from 'react-icons/fa';
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
    icon: <AiFillStar size={24} color="#00A3FF" />,
  },
  {
    label: 'Satisfied Patients',
    score: ' > 11.2K',
    icon: <FaUsers size={24} color="#00C48C" />,
  },
  {
    label: 'Twitter Followers',
    score: '23K',
    icon: <FaTwitter size={24} color="#1DA1F2" />,
  },
];

const Stats = () => {
  return (
    <Container maxW="5xl" p={{ base: 4, sm: 10 }}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
        <Stack spacing={4}>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
            Our Achievements
          </chakra.h1>
          <Text fontSize="md" color="gray.500" maxW="480px">
            We take immense pride in our journey of providing top-notch healthcare services and
            transforming lives. Our commitment to excellence and patient satisfaction drives our
            success.
          </Text>
        </Stack>
        <SimpleGrid columns={2} spacing={6} pt={8} pl={{ base: 0, md: 10 }}>
          {statData.map((data, index) => (
            <Stack
              key={index}
              p={4}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              align="center"
              spacing={1}
            >
              <Box fontSize="2xl" fontWeight="bold" color="gray.600">
                {data.score}
              </Box>
              <Box fontSize="lg" color="gray.400">
                {data.icon}
              </Box>
              <Text fontSize="md" color="gray.600">
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

