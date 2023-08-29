import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
} from '@chakra-ui/react';

const CalorieCalculator = () => {
  const [age, setAge] = useState<number | string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<number | string>('');
  const [height, setHeight] = useState<number | string>('');
  const [activityLevel, setActivityLevel] = useState<
    'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive'
  >('sedentary');
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    // Constants for calculating calories
    const maleCalorieConstant = 66.5;
    const femaleCalorieConstant = 655.1;
    const weightConstant = 13.75;
    const heightConstant = 5.003;
    const ageConstant = 6.75;

    // Calculate BMR (Basal Metabolic Rate)
    let bmr = 0;
    if (gender === 'male') {
      bmr =
        maleCalorieConstant +
        weightConstant * parseFloat(weight.toString()) +
        heightConstant * parseFloat(height.toString()) -
        ageConstant * parseFloat(age.toString());
    } else {
      bmr =
        femaleCalorieConstant +
        weightConstant * parseFloat(weight.toString()) +
        heightConstant * parseFloat(height.toString()) -
        ageConstant * parseFloat(age.toString());
    }

    // Calculate total calories based on activity level
    let activityFactor = 1.2; // Sedentary
    if (activityLevel === 'lightlyActive') {
      activityFactor = 1.375;
    } else if (activityLevel === 'moderatelyActive') {
      activityFactor = 1.55;
    } else if (activityLevel === 'veryActive') {
      activityFactor = 1.725;
    }

    const totalCalories = Math.round(bmr * activityFactor);

    setCalories(totalCalories);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Heading as="h3" size="md" mb={2}>
        Calorie Calculator
      </Heading>
      <FormControl mb={3}>
        <FormLabel>Age</FormLabel>
        <Input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Gender</FormLabel>
        <Select value={gender} onChange={(e) => setGender(e.target.value as 'male' | 'female')}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </FormControl>
      {/* Other form controls ... */}
      <Button onClick={calculateCalories}>
        Calculate Calories
      </Button>
      {calories !== null && (
        <Text mt={3}>
          Estimated daily calories: {calories}
        </Text>
      )}
    </Box>
  );
};

export default CalorieCalculator;

