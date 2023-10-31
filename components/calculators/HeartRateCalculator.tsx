import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

const HeartRateCalculator: React.FC = () => {
  const [age, setAge] = useState<number | null>(null);
  const [targetHeartRateRange, setTargetHeartRateRange] = useState<string | null>(null);

  const calculateHeartRate = () => {
    if (age) {
      const maxHeartRate = 220 - age;
      const lowerTargetHeartRate = Math.round(0.5 * maxHeartRate);
      const upperTargetHeartRate = Math.round(0.85 * maxHeartRate);
      setTargetHeartRateRange(`${lowerTargetHeartRate} - ${upperTargetHeartRate}`);
    }
  };

  return (
    <Box p={4}>
      <Input
        type="number"
        placeholder="Age"
        value={age || ''}
        onChange={(e) => setAge(parseFloat(e.target.value))}
      />
      <Button mt={4} onClick={calculateHeartRate}>
        Calculate Target Heart Rate
      </Button>
      {targetHeartRateRange && (
        <Text mt={4}>
          Recommended Target Heart Rate Range: {targetHeartRateRange} bpm
        </Text>
      )}
    </Box>
  );
};

export default HeartRateCalculator;

