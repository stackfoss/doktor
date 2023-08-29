import React, { useState } from 'react';
import { Box, Input, Button, Text, RadioGroup, Radio, VStack } from '@chakra-ui/react';

const DiabetesRiskCalculator: React.FC = () => {
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string>('male');
  const [bmi, setBMI] = useState<number | null>(null);
  const [familyHistory, setFamilyHistory] = useState<string>('no');
  const [physicalActivity, setPhysicalActivity] = useState<string>('low');
  const [riskScore, setRiskScore] = useState<number | null>(null);

  const calculateRisk = () => {
    if (age && bmi) {
      let risk = 0;

      if (gender === 'male') {
        risk += 2.33717422;
      }

      risk += 0.203216151 * age;
      risk += 0.509276672 * (familyHistory === 'yes' ? 1 : 0);
      risk += 0.127083297 * (physicalActivity === 'high' ? 0 : 1);
      risk += 0.087373717 * bmi;

      setRiskScore(Math.round((1 - Math.pow(0.9361, Math.exp(risk - 23.9802))) * 100));
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
        placeholder="BMI"
        value={bmi || ''}
        onChange={(e) => setBMI(parseFloat(e.target.value))}
      />
      <RadioGroup value={familyHistory} onChange={(value) => setFamilyHistory(value)}>
        <VStack alignItems="start">
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </VStack>
      </RadioGroup>
      <RadioGroup value={physicalActivity} onChange={(value) => setPhysicalActivity(value)}>
        <VStack alignItems="start">
          <Radio value="high">High</Radio>
          <Radio value="low">Low</Radio>
        </VStack>
      </RadioGroup>
      <Button mt={4} onClick={calculateRisk}>
        Calculate Diabetes Risk
      </Button>
      {riskScore !== null && (
        <Text mt={4}>
          Estimated Diabetes Risk: {riskScore}%
        </Text>
      )}
    </Box>
  );
};

export default DiabetesRiskCalculator;

