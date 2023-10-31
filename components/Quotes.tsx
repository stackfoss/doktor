import React, { useState, useEffect } from 'react';
import {
  Center,
  Box,
  Heading,
  Text,
  Spinner,
  Divider,
} from '@chakra-ui/react';

const HealthQuotes = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a random health-related quote
    fetch('https://api.quotable.io/random?tags=health')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching health quotes:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Center>
      <Box
        mt={15}
        p={6}
        maxW="400px"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.02)' }}
      >
        <Heading as="h2" size="lg" mb={2} color="teal.500">
          Health Quotes
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Inspirational quotes related to health.
        </Text>
        <Divider mb={4} />
        {loading ? (
          <Spinner size="lg" color="teal.500" />
        ) : (
          <Text fontSize="lg" fontStyle="italic">
            &ldquo;{quote}&rdquo;
          </Text>
        )}
      </Box>
    </Center>
  );
};

export default HealthQuotes;

