import { useEffect, useState } from 'react';
import {
  Heading,
  Grid,
  GridItem,
  Divider,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spinner,
  Box,
  Link,
  Image,
} from '@chakra-ui/react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type Podcast = {
  collectionId: number;
  collectionName: string;
  artworkUrl100: string;
  collectionViewUrl: string;
};

const HealthPodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);

  useEffect(() => {
    fetch('https://itunes.apple.com/search?term=health&media=podcast')
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(data.results);
        setLoading(false);
      });
  }, []);

  const handlePodcastClick = (podcast: Podcast) => {
    setSelectedPodcast(podcast);
  };

  return (
    <>
      <NavBar />
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        p={6}
        borderRadius="lg"
      >
        <Heading fontSize="4xl" fontWeight="bold" mb={2} color="teal.500">
          Explore Health Podcasts
        </Heading>
        <Text fontSize="lg" mb={6} color="teal.600">
          Discover the latest health and wellness podcasts.
        </Text>
        <Divider mb={6} />
        {loading ? (
          <Spinner size="xl" color="teal.500" />
        ) : (
          <Grid templateColumns="1fr" gap={4}>
            {podcasts.map((podcast) => (
              <GridItem
                key={podcast.collectionId}
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                w="100%"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.02)' }}
              >
                <Image
                  src={podcast.artworkUrl100}
                  alt={podcast.collectionName}
                  boxSize="50px"
                  borderRadius="md"
                />
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  cursor="pointer"
                  color="teal.500"
                  onClick={() => handlePodcastClick(podcast)}
                >
                  {podcast.collectionName}
                </Text>
                <Flex align="center" justify="space-between">
                  <Link
                    href={selectedPodcast === podcast ? selectedPodcast.collectionViewUrl : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="teal.500"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Listen on Apple Podcasts
                  </Link>
                  {selectedPodcast === podcast && (
                    <Link
                      href={selectedPodcast.collectionViewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="teal.500"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      View on Apple Podcasts
                    </Link>
                  )}
                </Flex>
              </GridItem>
            ))}
          </Grid>
        )}
      </Flex>
      <Footer />
    </>
  );
};

export default HealthPodcasts;

