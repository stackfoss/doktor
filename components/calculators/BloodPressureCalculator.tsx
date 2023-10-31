import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

const BloodPressureCalculator: React.FC = () => {
  const [systolic, setSystolic] = useState<number | null>(null);
  const [diastolic, setDiastolic] = useState<number | null>(null);
  const [classification, setClassification] = useState<string | null>(null);

  const classifyBloodPressure = () => {
    if (systolic && diastolic) {
      if (systolic < 90 || diastolic < 60) {
        setClassification('Hypotension (Low Blood Pressure)');
      } else if (systolic >= 90 && systolic <= 120 && diastolic >= 60 && diastolic <= 80) {
        setClassification('Normal Blood Pressure');
      } else if (systolic > 120 && systolic <= 129 && diastolic <= 80) {
        setClassification('Elevated Blood Pressure');
      } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
        setClassification('Stage 1 Hypertension');
      } else if (systolic >= 140 || diastolic >= 90) {
        setClassification('Stage 2 Hypertension');
      }
    }
  };

  return (
    <Box p={4}>
      <Input
        type="number"
        placeholder="Systolic Blood Pressure"
        value={systolic || ''}
        onChange={(e) => setSystolic(parseFloat(e.target.value))}
      />
      <Input
        type="number"
        placeholder="Diastolic Blood Pressure"
        value={diastolic || ''}
        onChange={(e) => setDiastolic(parseFloat(e.target.value))}
      />
      <Button mt={4} onClick={classifyBloodPressure}>
        Classify Blood Pressure
      </Button>
      {classification && (
        <Text mt={4}>
          Blood Pressure Classification: {classification}
        </Text>
      )}
    </Box>
  );
};

export default BloodPressureCalculator;

