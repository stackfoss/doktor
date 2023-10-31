import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Center,
  List,
  ListItem,
  Spinner,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Button,
  Text,
  Select,
} from '@chakra-ui/react';
import { CalendarIcon, InfoIcon, ViewIcon, ChevronDownIcon } from '@chakra-ui/icons';

interface Holiday {
  date: string;
  name: string;
  localName: string;
  fixed: boolean;
}

const COUNTRY_CODES = ['US', 'CA', 'GB', 'DE']; // Add more country codes as needed
const COUNTRY_NAMES: Record<string, string> = {
  US: 'USA',
  CA: 'Canada',
  GB: 'United Kingdom',
  DE: 'Germany',
}; // Map country codes to country names

const PublicHolidays: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState(true);
  const [showHolidays, setShowHolidays] = useState(false);

  useEffect(() => {
    fetchHolidayData(selectedCountry);
  }, [selectedCountry]);

  const fetchHolidayData = (countryCode: string) => {
    const holidayAPI = `https://date.nager.at/Api/v2/NextPublicHolidaysWorldwide?countryCode=${countryCode}`;
    
    fetch(holidayAPI)
      .then((response) => response.json())
      .then((data: Holiday[]) => {
        setHolidays(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching holiday data:', error);
        setLoading(false);
      });
  };

  const toggleShowHolidays = () => {
    setShowHolidays(!showHolidays);
  };

  return (
    <Center>
      <Box
        width="80%"
        padding="20px"
        borderRadius="8px"
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" mb={4} textAlign="center" color="teal.500">
          {COUNTRY_NAMES[selectedCountry as keyof typeof COUNTRY_NAMES]} Public Holidays
        </Heading>
        <Select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          mb={4}
        >
          {COUNTRY_CODES.map((countryCode) => (
            <option key={countryCode} value={countryCode}>
              {COUNTRY_NAMES[countryCode as keyof typeof COUNTRY_NAMES]}
            </option>
          ))}
        </Select>
        <Button
          colorScheme="teal"
          size="sm"
          onClick={toggleShowHolidays}
          mb={4}
          leftIcon={showHolidays ? <ChevronDownIcon /> : <ViewIcon />}
        >
          {showHolidays ? 'Hide Holidays' : 'Show Holidays'}
        </Button>
        {showHolidays && (
          <Accordion allowToggle>
            {loading ? (
              <Center>
                <Spinner size="lg" mt={4} color="teal.500" />
              </Center>
            ) : holidays.length > 0 ? (
              holidays.map((holiday) => (
                <AccordionItem key={holiday.date}>
                  <h2>
                    <AccordionButton
                      backgroundColor="teal.500"
                      color="white"
                      _hover={{ backgroundColor: 'teal.600' }}
                    >
                      <Box flex="1" textAlign="left">
                        <CalendarIcon mr={2} />
                        <strong>
                          {holiday.date} - {holiday.name}
                        </strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <List spacing={3}>
                      <ListItem>
                        <Text fontWeight="bold">Date:</Text> {holiday.date}
                      </ListItem>
                      <ListItem>
                        <Text fontWeight="bold">Name:</Text> {holiday.name}
                      </ListItem>
                      <ListItem>
                        <Text fontWeight="bold">Local Name:</Text> {holiday.localName}
                      </ListItem>
                      <ListItem>
                        <Text fontWeight="bold">Fixed:</Text> {holiday.fixed ? 'Yes' : 'No'}
                      </ListItem>
                    </List>
                  </AccordionPanel>
                  <Divider />
                </AccordionItem>
              ))
            ) : (
              <Box textAlign="center" mt="4">
                <InfoIcon w={10} h={10} color="teal.500" />
                <Text>No data available.</Text>
              </Box>
            )}
          </Accordion>
        )}
      </Box>
    </Center>
  );
};

export default PublicHolidays;

