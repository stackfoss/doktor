import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const WikipediaSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedArticleUrl, setSelectedArticleUrl] = useState('');

  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${searchQuery}&origin=*`
      );
      const data = await response.json();
      setSearchResults(data[1]);
    } catch (error) {
      console.error('Error searching Wikipedia:', error);
    }
  };

  const handleArticleClick = (url: string) => {
    setSelectedArticleUrl(url);
    onOpen();
  };

  return (
    <>
      <NavBar />
      <Box p={4} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" mb={2} color="teal.500">
          Explore Medical Topics
        </Text>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Find valuable information on various health subjects.
        </Text>
        <Input
          placeholder="Search Health Topics"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="lg"
          borderRadius="full"
          focusBorderColor="teal.500"
        />
        <Button
          colorScheme="teal"
          leftIcon={<SearchIcon />}
          onClick={handleSearch}
          mt={4}
          size="lg"
          borderRadius="full"
        >
          Search
        </Button>
        <Divider my={6} />

        <Accordion allowToggle>
          {searchResults.map((title) => (
            <AccordionItem key={title}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ bg: 'teal.100', color: 'teal.500' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontSize="lg" fontWeight="bold">
                          {title}
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link
                      color="teal.500"
                      onClick={() => handleArticleClick(title)}
                    >
                      Read Article <ExternalLinkIcon />
                    </Link>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{searchQuery}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <iframe
                title={searchQuery}
                src={`https://en.wikipedia.org/wiki/${selectedArticleUrl}`}
                width="100%"
                height="600"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <Footer />
    </>
  );
};

export default WikipediaSearch;

