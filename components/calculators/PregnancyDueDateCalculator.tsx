import { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { addWeeks } from 'date-fns';

const PregnancyDueDateCalculator: React.FC = () => {
  const [lastMenstrualPeriod, setLastMenstrualPeriod] = useState<Date | null>(null);
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const calculateDueDate = () => {
    if (lastMenstrualPeriod) {
      const estimatedDueDate = addWeeks(lastMenstrualPeriod, 40);
      setDueDate(estimatedDueDate);
    }
  };

  return (
    <Box p={4}>
      <Input
        type="date"
        value={lastMenstrualPeriod?.toISOString().substr(0, 10) || ''}
        onChange={(e) => setLastMenstrualPeriod(new Date(e.target.value))}
      />
      <Button mt={4} onClick={calculateDueDate}>
        Calculate Due Date
      </Button>
      {dueDate && (
        <Text mt={4}>
          Estimated Due Date: {dueDate.toDateString()}
        </Text>
      )}
    </Box>
  );
};

export default PregnancyDueDateCalculator;

