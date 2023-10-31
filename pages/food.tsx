import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  Spinner,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  VStack,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type Product = {
  code: string;
  product_name: string;
  quantity: string;
  packaging: string;
  brands: string;
  categories: string;
  labels_tags: string[];
  manufacturing_places: string;
  link: string;
  stores: string[];
  countries: string[];
  nutriments: Record<string, string>;
};

const FoodSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&json=1`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching food data:', error);
          setLoading(false);
        });
    }
  }, [searchTerm]);

  const getNutrientValue = (product: Product, nutrientName: string) => {
    if (product.nutriments && product.nutriments[nutrientName]) {
      return product.nutriments[nutrientName];
    }
    return 'N/A';
  };

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} minH="100vh">
      <NavBar />
      <Center>
        <Box width="100%" maxW="lg" boxShadow="lg" rounded="lg" p={6} mt={8}>
          <Heading as="h2" size="xl" mb={4} color={colorMode === 'light' ? 'gray.700' : 'teal.500'}>
            Medicine and Nutrition Information
          </Heading>
          <Text fontSize="lg" color={colorMode === 'light' ? 'gray.600' : 'gray.400'} mb={4}>
            Search for detailed information about medicines, nutrition, and food products.
          </Text>
          <Input
            placeholder="Search for food products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="md"
            mb={4}
          />
          <Button
            leftIcon={<SearchIcon />}
            onClick={() => setSearchTerm(searchTerm)}
            colorScheme="teal"
            size="md"
            mb={4}
          >
            Search
          </Button>
          {loading ? (
            <Center>
              <Spinner size="lg" mt={4} />
            </Center>
          ) : (
            <VStack spacing={4} align="stretch">
              {searchResults.map((product) => (
                <Accordion key={product.code} defaultIndex={[]} allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Text>{product.product_name || 'N/A'}</Text>
                    </AccordionButton>
                    <AccordionPanel>
                      <Table variant="striped">
                        <Thead>
                          <Tr>
                            <Th>Property</Th>
                            <Th>Value</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>Barcode:</Td>
                            <Td>{product.code || 'N/A'}</Td>
                          </Tr>
                          <Tr>
                            <Td>Common name:</Td>
                            <Td>{product.product_name || 'N/A'}</Td>
                          </Tr>
                          <Tr>
                            <Td>Quantity:</Td>
                            <Td>{product.quantity || 'N/A'}</Td>
                          </Tr>
                          <Tr>
                            <Td>Packaging:</Td>
                            <Td>{product.packaging || 'N/A'}</Td>
                          </Tr>
                          <Tr>
                            <Td>Brands:</Td>
                            <Td>{product.brands || 'N/A'}</Td>
                          </Tr>
                          <Tr>
                            <Td>Categories:</Td>
                            <Td>{product.categories || 'N/A'}</Td>
                          </Tr>
                          <Tr>
                            <Td>Labels, certifications, awards:</Td>
                            <Td>
                              {product.labels_tags ? product.labels_tags.join(', ') : 'N/A'}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Manufacturing or processing places:</Td>
                            <Td>{product.manufacturing_places || 'N/A'}</Td>
                          </Tr>
                          <Tr>
                            <Td>Link to the product page:</Td>
                            <Td>
                              <Link href={product.link} isExternal>
                                {product.link ? (
                                  <>
                                    Official Site <ExternalLinkIcon mx="2px" />
                                  </>
                                ) : (
                                  'N/A'
                                )}
                              </Link>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Stores:</Td>
                            <Td>
                              {Array.isArray(product.stores) ? product.stores.join(', ') : 'N/A'}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Countries where sold:</Td>
                            <Td>
                              {Array.isArray(product.countries)
                                ? product.countries.join(', ')
                                : 'N/A'}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Nutrition facts</Td>
                            <Td>
                              <Table variant="striped" size="sm">
                                <Thead>
                                  <Tr>
                                    <Th>Nutrient</Th>
                                    <Th>Value</Th>
                                  </Tr>
                                </Thead>
                                <Tbody>
                                  <Tr>
                                    <Td>Energy (kcal)</Td>
                                    <Td>
                                      {getNutrientValue(product, 'energy-kcal') + ' kcal' || 'N/A'}
                                    </Td>
                                  </Tr>
                                  <Tr>
                                    <Td>Energy (kJ)</Td>
                                    <Td>
                                      {getNutrientValue(product, 'energy-kj') + ' kJ' || 'N/A'}
                                    </Td>
                                  </Tr>
                                  <Tr>
                                    <Td>Fat (g)</Td>
                                    <Td>{getNutrientValue(product, 'fat') || 'N/A'}</Td>
                                  </Tr>
                                  <Tr>
                                    <Td>Saturated fat (g)</Td>
                                    <Td>{getNutrientValue(product, 'saturated-fat') || 'N/A'}</Td>
                                  </Tr>
                                  <Tr>
                                    <Td>Carbohydrates (g)</Td>
                                    <Td>{getNutrientValue(product, 'carbohydrates') || 'N/A'}</Td>
                                  </Tr>
                                  <Tr>
                                    <Td>Sugars (g)</Td>
                                    <Td>{getNutrientValue(product, 'sugars') || 'N/A'}</Td>
                                  </Tr>
                                  <Tr>
                                    <Td>Fiber (g)</Td>
                                    <Td>{getNutrientValue(product, 'fiber') || 'N/A'}</Td>
                                  </Tr>
                                  <Tr>
                                    <Td>Proteins (g)</Td>
                                    <Td>{getNutrientValue(product, 'proteins') || 'N/A'}</Td>
                                  </Tr>
                                  <Tr>
                                    <Td>Salt (g)</Td>
                                    <Td>{getNutrientValue(product, 'salt') || 'N/A'}</Td>
                                  </Tr>
                                  <Tr>
                                    <Td>Fruits, vegetables, nuts, and oils (%)</Td>
                                    <Td>
                                      {getNutrientValue(
                                        product,
                                        'fruits-vegetables-nuts-estimate-from-ingredients-list-analysis'
                                      ) || 'N/A'}
                                    </Td>
                                  </Tr>
                                </Tbody>
                              </Table>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </VStack>
          )}
        </Box>
      </Center>
      <Footer />
    </Box>
  );
};

export default FoodSearch;

