import React, { useState } from 'react';
import { Box, Input, Button, Text, RadioGroup, Radio, VStack } from '@chakra-ui/react';

const GFRCalculator: React.FC = () => {
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string>('male');
  const [serumCreatinine, setSerumCreatinine] = useState<number | null>(null);
  const [gfr, setGFR] = useState<number | null>(null);

  const calculateGFR = () => {
    if (age && serumCreatinine) {
      let gfrValue;
      if (gender === 'male') {
        gfrValue = 141 * Math.min(Math.pow(serumCreatinine / 0.9, -0.411) * Math.pow(0.993, age), 1);
      } else {
        gfrValue = 141 * Math.min(Math.pow(serumCreatinine / 0.7, -0.329) * Math.pow(0.993, age), 1);
      }
      setGFR(Math.round(gfrValue));
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
      <RadioGroup value={gender} onChange={(value) => setGender(value)}>
        <VStack alignItems="start">
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </VStack>
      </RadioGroup>
      <Input
        type="number"
        placeholder="Serum Creatinine (mg/dL)"
        value={serumCreatinine || ''}
        onChange={(e) => setSerumCreatinine(parseFloat(e.target.value))}
      />
      <Button mt={4} onClick={calculateGFR}>
        Calculate GFR
      </Button>
      {gfr && (
        <Text mt={4}>
          Estimated GFR: {gfr} mL/min/1.73m²
        </Text>
      )}
    </Box>
  );
};

export default GFRCalculator;

