import { Box, Container, Heading, Grid, GridItem, Divider, Text, Flex } from '@chakra-ui/react';
import { FaCalculator } from 'react-icons/fa';
import { IoMdFlower, IoIosMedkit, IoIosHeart, IoIosWater, IoIosBody } from 'react-icons/io';
import { GiBabyBottle, GiWeightLiftingUp, GiSmokingOrb } from 'react-icons/gi';
import { AiOutlineRise, AiOutlinePercentage } from 'react-icons/ai';
import type { NextPage } from 'next';

// Import all calculator components
import NavBar from '../components/NavBar';
import BmiCalculator from '../components/calculators/BmiCalculator';
import CalorieCalculator from '../components/calculators/CalorieCalculator';
import PregnancyDueDateCalculator from '../components/calculators/PregnancyDueDateCalculator';
import MedicationDosageCalculator from '../components/calculators/MedicationDosageCalculator';
import HeartRateCalculator from '../components/calculators/HeartRateCalculator';
import BloodPressureCalculator from '../components/calculators/BloodPressureCalculator';
import IVFluidRateCalculator from '../components/calculators/IVFluidRateCalculator';
import GFRCalculator from '../components/calculators/GFRCalculator';
import IdealBodyWeightCalculator from '../components/calculators/IdealBodyWeightCalculator';
import OvulationCalculator from '../components/calculators/OvulationCalculator';
import DiabetesRiskCalculator from '../components/calculators/DiabetesRiskCalculator';
import BmiPercentileCalculator from '../components/calculators/BmiPercentileCalculator';
import QuitSmokingSavingsCalculator from '../components/calculators/QuitSmokingSavingsCalculator';
import Footer from '../components/Footer';

const Calculator: NextPage = () => {
  return (
    <div>
      <main>
        <Box as="main" p={6}>
          <NavBar />
          <Container maxW="container.md" mt={16} mb={16}>
            <Heading as="h2" size="xl" mb={4} textAlign="center" color="teal.400">
              Medical Calculators
            </Heading>
            <Text fontSize="lg" textAlign="center" mb={4}>
              Explore a variety of medical and health calculators.
            </Text>
            <Divider mb={8} />
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
          <Footer />
        </Box>
      </main>
    </div>
  );
};

interface CalculatorCardProps {
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, icon, component }) => (
  <Box boxShadow="md" p={4} borderRadius="md" bg="teal">
    <Flex alignItems="center" justifyContent="center" fontSize="2xl" mb={3}>
      {icon}
    </Flex>
    <Text fontWeight="semibold" textAlign="center" mb={2}>
      {title}
    </Text>
    {component}
  </Box>
);

export default Calculator;

