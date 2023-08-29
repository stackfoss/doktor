import React, { useState } from 'react';
import { Box, Input, Button, Text, RadioGroup, Radio, VStack } from '@chakra-ui/react';

interface MockPercentiles {
  male: number[];
  female: number[];
}

const BmiPercentileCalculator: React.FC = () => {
  const [ageYears, setAgeYears] = useState<number | null>(null);
  const [gender, setGender] = useState<'male' | 'female'>('male'); // Provide type annotation
  const [heightCm, setHeightCm] = useState<number | null>(null);
  const [weightKg, setWeightKg] = useState<number | null>(null);
  const [bmiPercentile, setBmiPercentile] = useState<number | null>(null);

  const calculateBmiPercentile = () => {
    if (ageYears && heightCm && weightKg) {
      const bmi = weightKg / ((heightCm / 100) ** 2);
      // Mock data for BMI percentiles
      const mockPercentiles: MockPercentiles = {
        male: [10, 25, 50, 75, 90], // Example percentiles
        female: [10, 25, 50, 75, 90], // Example percentiles
      };
      // Assuming percentile data is available for both genders
      const percentiles = mockPercentiles[gender];
      const bmiPercentileValue = calculatePercentile(bmi, percentiles);

      setBmiPercentile(bmiPercentileValue);
    }
  };

  const calculatePercentile = (value: number, data: number[]) => {
    // Calculate the closest percentile value based on the data array
    const sortedData = [...data].sort((a, b) => a - b);
    let percentile = 0;
    for (let i = 0; i < sortedData.length; i++) {
      if (value <= sortedData[i]) {
        percentile = (i / (sortedData.length - 1)) * 100;
        break;
      }
    }
    return Math.round(percentile);
  };

  return (
    <Box p={4}>
      {/* Input fields and calculations */}
    </Box>
  );
};

export default BmiPercentileCalculator;

