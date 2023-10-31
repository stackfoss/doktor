import React, { useState } from 'react';
import { Box, Input, Button, Text, RadioGroup, Radio, VStack } from '@chakra-ui/react';

const IdealBodyWeightCalculator: React.FC = () => {
  const [heightCm, setHeightCm] = useState<number | null>(null);
  const [gender, setGender] = useState<string>('male');
  const [idealBodyWeightKg, setIdealBodyWeightKg] = useState<number | null>(null);

  const calculateIdealBodyWeight = () => {
    if (heightCm) {
      let idealWeight;
      if (gender === 'male') {
        idealWeight = 50 + 0.91 * (heightCm - 152.4);
      } else {
        idealWeight = 45.5 + 0.91 * (heightCm - 152.4);
      }
      setIdealBodyWeightKg(Math.round(idealWeight));
    }
  };

  return (
    <Box p={4}>
      <Input
        type="number"
        placeholder="Height (cm)"
        value={heightCm || ''}
        onChange={(e) => setHeightCm(parseFloat(e.target.value))}
      />
      <RadioGroup value={gender} onChange={(value) => setGender(value)}>
        <VStack alignItems="start">
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </VStack>
      </RadioGroup>
      <Button mt={4} onClick={calculateIdealBodyWeight}>
        Calculate Ideal Body Weight
      </Button>
      {idealBodyWeightKg && (
        <Text mt={4}>
          Ideal Body Weight: {idealBodyWeightKg} kg
        </Text>
      )}
    </Box>
  );
};

export default IdealBodyWeightCalculator;

