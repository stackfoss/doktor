import { Box, Text, Button, useColorModeValue, Center, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import axios from 'axios';

const HealthTips = () => {
  const [healthTip, setHealthTip] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchHealthTip = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const advice = response.data.slip.advice;
      setHealthTip(advice);
    } catch (error) {
      console.error('Error fetching health tips:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHealthTip();
  }, []);

  return (
    <Box
      bg={useColorModeValue('teal.200', 'teal.900')}
      p={4}
      rounded="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Health Tip of the Day
      </Text>
      <Text fontSize="md" mb={4}>
        {healthTip}
      </Text>
      <Center>
        <Button
          colorScheme="teal"
          size="sm"
          isLoading={loading}
          onClick={fetchHealthTip}
        >
          Get a New Tip
        </Button>
      </Center>
      <Center mt={4}>
        <Icon as={FaRegLightbulb} w={8} h={8} color="teal.500" />
        <Text fontSize="sm" color="teal.500">
          Daily Health Tips
        </Text>
      </Center>
    </Box>
  );
};

export default HealthTips;

