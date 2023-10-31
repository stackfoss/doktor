import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

const MedicationDosageCalculator: React.FC = () => {
  const [concentration, setConcentration] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [dosage, setDosage] = useState<number | null>(null);

  const calculateDosage = () => {
    if (concentration && weight) {
      const calculatedDosage = (concentration * weight).toFixed(2);
      setDosage(parseFloat(calculatedDosage));
    }
  };

  return (
    <Box p={4}>
      <Input
        type="number"
        placeholder="Medication Concentration"
        value={concentration || ''}
        onChange={(e) => setConcentration(parseFloat(e.target.value))}
      />
      <Input
        type="number"
        placeholder="Patient Weight (kg)"
        value={weight || ''}
        onChange={(e) => setWeight(parseFloat(e.target.value))}
      />
      <Button mt={4} onClick={calculateDosage}>
        Calculate Dosage
      </Button>
      {dosage && (
        <Text mt={4}>
          Recommended Dosage: {dosage} mg
        </Text>
      )}
    </Box>
  );
};

export default MedicationDosageCalculator;

