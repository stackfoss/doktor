import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

const IVFluidRateCalculator: React.FC = () => {
  const [volume, setVolume] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const [infusionRate, setInfusionRate] = useState<number | null>(null);

  const calculateInfusionRate = () => {
    if (volume && time) {
      const infusionRateValue = (volume / time).toFixed(2);
      setInfusionRate(parseFloat(infusionRateValue));
    }
  };

  return (
    <Box p={4}>
      <Input
        type="number"
        placeholder="Volume (mL)"
        value={volume || ''}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />
      <Input
        type="number"
        placeholder="Time (hours)"
        value={time || ''}
        onChange={(e) => setTime(parseFloat(e.target.value))}
      />
      <Button mt={4} onClick={calculateInfusionRate}>
        Calculate Infusion Rate
      </Button>
      {infusionRate && (
        <Text mt={4}>
          Infusion Rate: {infusionRate} mL/hour
        </Text>
      )}
    </Box>
  );
};

export default IVFluidRateCalculator;

