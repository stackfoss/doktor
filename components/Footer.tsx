import React from 'react';
import {
  Flex,
  Heading,
  Link,
  Box,
  Stack,
  Icon,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();

  const links = [
    {
      href: 'https://www.facebook.com/',
      title: 'Facebook',
      icon: FaFacebook,
    },
    {
      href: 'https://twitter.com/',
      title: 'Twitter',
      icon: FaTwitter,
    },
    {
      href: 'https://www.linkedin.com/',
      title: 'LinkedIn',
      icon: FaLinkedin,
    },
  ];

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} py={8} >
      <Flex direction="column" align="center">
        <Heading size="lg" color={colorMode === 'light' ? 'gray.700' : 'white'}>
          Dr. Smith&rsquo;s Medical Center
        </Heading>
        <Stack direction="row" spacing={6} mt={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          
        </Stack>
        <Stack direction="row" spacing={4} mt={6}>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              color={colorMode === 'light' ? 'gray.700' : 'gray.300'}
            >
              <Icon as={link.icon} boxSize={6} />
            </Link>
          ))}
        </Stack>
      </Flex>
      <Flex align="center" justify="center" mt={8}>
        <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
          &copy; {new Date().getFullYear()} Dr. Smith&rsquo;s Medical Center. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;

