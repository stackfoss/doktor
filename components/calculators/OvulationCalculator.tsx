import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { addDays, subDays, format } from 'date-fns';

const OvulationCalculator: React.FC = () => {
  const [menstrualCycleLength, setMenstrualCycleLength] = useState<number | null>(null);
  const [lastMenstrualPeriod, setLastMenstrualPeriod] = useState<Date | null>(null);
  const [ovulationWindowStart, setOvulationWindowStart] = useState<Date | null>(null);
  const [ovulationWindowEnd, setOvulationWindowEnd] = useState<Date | null>(null);

  const calculateOvulationWindow = () => {
    if (menstrualCycleLength && lastMenstrualPeriod) {
      const cycleStartDate = subDays(lastMenstrualPeriod, menstrualCycleLength - 1);
      const ovulationWindowStartDate = addDays(cycleStartDate, Math.floor(menstrualCycleLength / 2) - 4);
      const ovulationWindowEndDate = addDays(ovulationWindowStartDate, 10);

      setOvulationWindowStart(ovulationWindowStartDate);
      setOvulationWindowEnd(ovulationWindowEndDate);
    }
  };

  return (
    <Box p={4}>
      <Input
        type="number"
        placeholder="Menstrual Cycle Length (days)"
        value={menstrualCycleLength || ''}
        onChange={(e) => setMenstrualCycleLength(parseFloat(e.target.value))}
      />
      <Input
        type="date"
        value={lastMenstrualPeriod?.toISOString().substr(0, 10) || ''}
        onChange={(e) => setLastMenstrualPeriod(new Date(e.target.value))}
      />
      <Button mt={4} onClick={calculateOvulationWindow}>
        Calculate Ovulation Window
      </Button>
      {ovulationWindowStart && ovulationWindowEnd && (
        <Text mt={4}>
          Ovulation Window: {format(ovulationWindowStart, 'MMMM d')} - {format(ovulationWindowEnd, 'MMMM d')}
        </Text>
      )}
    </Box>
  );
};

export default OvulationCalculator;

