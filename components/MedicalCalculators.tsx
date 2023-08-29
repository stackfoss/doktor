import { Box, Container, Heading, Grid, Text, Flex } from '@chakra-ui/react';
import { FaCalculator } from 'react-icons/fa';
import { IoMdFlower, IoIosMedkit, IoIosHeart, IoIosWater, IoIosBody } from 'react-icons/io';
import { GiBabyBottle, GiWeightLiftingUp, GiSmokingOrb } from 'react-icons/gi';
import { AiOutlineRise, AiOutlinePercentage } from 'react-icons/ai';
import type { NextPage } from 'next';

// Import all calculator components
import BmiCalculator from './calculators/BmiCalculator';
import CalorieCalculator from './calculators/CalorieCalculator';
import PregnancyDueDateCalculator from './calculators/PregnancyDueDateCalculator';
import MedicationDosageCalculator from './calculators/MedicationDosageCalculator';
import HeartRateCalculator from './calculators/HeartRateCalculator';
import BloodPressureCalculator from './calculators/BloodPressureCalculator';
import IVFluidRateCalculator from './calculators/IVFluidRateCalculator';
import GFRCalculator from './calculators/GFRCalculator';
import IdealBodyWeightCalculator from './calculators/IdealBodyWeightCalculator';
import OvulationCalculator from './calculators/OvulationCalculator';
import DiabetesRiskCalculator from './calculators/DiabetesRiskCalculator';
import BmiPercentileCalculator from './calculators/BmiPercentileCalculator';
import QuitSmokingSavingsCalculator from './calculators/QuitSmokingSavingsCalculator';

const MedicalCalculators: NextPage = () => {
  return (
    <Box p={6}>
      <Container maxW="container.md" mt={16} mb={16}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Medical Calculators
        </Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
          <CalculatorCard title="BMI Calculator" icon={<FaCalculator />} component={<BmiCalculator />} />
          <CalculatorCard title="Calorie Calculator" icon={<IoMdFlower />} component={<CalorieCalculator />} />
          <CalculatorCard title="Pregnancy Due Date Calculator" icon={<GiBabyBottle />} component={<PregnancyDueDateCalculator />} />
          <CalculatorCard title="Medication Dosage Calculator" icon={<IoIosMedkit />} component={<MedicationDosageCalculator />} />
          <CalculatorCard title="Heart Rate Calculator" icon={<IoIosHeart />} component={<HeartRateCalculator />} />
          <CalculatorCard title="Blood Pressure Calculator" icon={<IoIosWater />} component={<BloodPressureCalculator />} />
          <CalculatorCard title="IV Fluid Rate Calculator" icon={<IoIosWater />} component={<IVFluidRateCalculator />} />
          <CalculatorCard title="GFR Calculator" icon={<GiWeightLiftingUp />} component={<GFRCalculator />} />
          <CalculatorCard title="Ideal Body Weight Calculator" icon={<IoIosBody />} component={<IdealBodyWeightCalculator />} />
          <CalculatorCard title="Ovulation Calculator" icon={<IoMdFlower />} component={<OvulationCalculator />} />
          <CalculatorCard title="Diabetes Risk Calculator" icon={<AiOutlineRise />} component={<DiabetesRiskCalculator />} />
          <CalculatorCard title="BMI Percentile Calculator" icon={<AiOutlinePercentage />} component={<BmiPercentileCalculator />} />
          <CalculatorCard title="Quit Smoking Savings Calculator" icon={<GiSmokingOrb />} component={<QuitSmokingSavingsCalculator />} />
        </Grid>
      </Container>
    </Box>
  );
};

interface CalculatorCardProps {
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, icon, component }) => (
  <Box border="1px solid #E2E8F0" borderRadius="md" p={4} bg="white">
    <Flex alignItems="center" justifyContent="center" fontSize="2xl" mb={3}>
      {icon}
    </Flex>
    <Text fontWeight="semibold" textAlign="center" mb={2}>
      {title}
    </Text>
    {component}
  </Box>
);

export default MedicalCalculators;

