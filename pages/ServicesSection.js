// ServicesSection.js
import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';

const ServicesSection = () => {
  // Define an array of services
  const services = [
    {
      name: 'Ambient Lights',
      url: 'https://example.com/ambient-lights',
      image: 'about-image.jpg',
    },
    {
      name: 'CarPlay',
      url: 'https://example.com/carplay',
      image: 'CarPlay.jpg',
    },
    {
      name: 'Digital RearView Mirror with CarPlay',
      url: 'https://example.com/rearview-mirror',
      image: 'dashcam-apple.jpg',
    },
    {
      name: 'Speakers',
      url: 'https://example.com/speakers',
      image: 'speakers.jpg',
    },
    {
      name: 'Wrapping',
      url: 'https://example.com/wrapping',
      image: 'wrapping.jpg',
    },
    {
      name: 'Reverse Camera',
      url: 'https://example.com/wrapping',
      image: 'Reverse.jpg',
    },
    {
      name: 'Starlight Roofing',
      url: 'https://example.com/wrapping',
      image: 'Starlight-Roofing.jpg',
    },
  ];

  return (
    <Box py={8} minH="100vh">
      <Heading as="h2" size="xl" textAlign="center" mb={6} mt={20} >
        Services
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center" >
        {services.map((service, index) => (
          <Box
            key={index}
            p={4}
            m={2}
            width={['100%', '45%', '30%']} // Adjust width for responsiveness
            textAlign="center"
            position="relative"
            cursor="pointer"
            onClick={() => window.open(service.url, '_blank')}
            _hover={{
              '.service-image': {
                filter: 'brightness(10%)',
              },
              '.service-name': {
                color: 'red',
                
              },
            }}
          >
            <Box
              className="service-image"
              bgImage={`url(${service.image})`}
              filter="brightness(60%)"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              height={300}
              borderRadius="lg"
              boxShadow="md"
              
            />
            <Box
               className="service-name"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="white"
              fontSize="xl"
              fontWeight="bold"
              
            >
              {service.name}
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ServicesSection;
