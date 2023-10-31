import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
      setMessage('Please enter valid values.');
      setBmiResult('');
      return;
    }

    const bmi = weightValue / Math.pow(heightValue / 100, 2);
    const bmiRounded = bmi.toFixed(2);

    let bmiMessage = '';
    if (bmi < 18.5) bmiMessage = 'Underweight';
    else if (bmi < 24.9) bmiMessage = 'Normal weight';
    else if (bmi < 29.9) bmiMessage = 'Overweight';
    else bmiMessage = 'Obese';

    setMessage('');
    setBmiResult(`Your BMI: ${bmiRounded}`);
    setMessage(`BMI Category: ${bmiMessage}`);
  };

  return (
    <Container maxW="container.md" mt={16} mb={16}>
      <Box textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          BMI Calculator
        </Heading>
        <Text mb={4}>Calculate your Body Mass Index (BMI)</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          mb={4}
        />
        <Input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          mb={4}
        />
        <Button onClick={calculateBMI}>
          Calculate BMI
        </Button>
        {bmiResult && <Text mt={4}>{bmiResult}</Text>}
        {message && <Text color="red.500" mt={2}>{message}</Text>}
      </Box>
    </Container>
  );
};

export default BmiCalculator;

