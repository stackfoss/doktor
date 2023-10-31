import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

const QuitSmokingSavingsCalculator: React.FC = () => {
  const [cigarettesPerDay, setCigarettesPerDay] = useState<number | null>(null);
  const [costPerPack, setCostPerPack] = useState<number | null>(null);
  const [yearsSmokeFree, setYearsSmokeFree] = useState<number | null>(null);
  const [savings, setSavings] = useState<number | null>(null);

  const calculateSavings = () => {
    if (cigarettesPerDay && costPerPack && yearsSmokeFree) {
      const cigarettesSmoked = cigarettesPerDay * 365 * yearsSmokeFree;
      const savingsPerPack = costPerPack * cigarettesPerDay;
      const totalSavings = savingsPerPack * (cigarettesSmoked / 20);

      setSavings(totalSavings);
    }
  };

  return (
    <Box p={4}>
      <Input
        type="number"
        placeholder="Cigarettes per day"
        value={cigarettesPerDay || ''}
        onChange={(e) => setCigarettesPerDay(parseFloat(e.target.value))}
      />
      <Input
        type="number"
        placeholder="Cost per pack"
        value={costPerPack || ''}
        onChange={(e) => setCostPerPack(parseFloat(e.target.value))}
      />
      <Input
        type="number"
        placeholder="Years smoke-free"
        value={yearsSmokeFree || ''}
        onChange={(e) => setYearsSmokeFree(parseFloat(e.target.value))}
      />
      <Button mt={4} onClick={calculateSavings}>
        Calculate Savings
      </Button>
      {savings !== null && (
        <Text mt={4}>
          Potential Savings: ${savings.toFixed(2)}
        </Text>
      )}
    </Box>
  );
};

export default QuitSmokingSavingsCalculator;

