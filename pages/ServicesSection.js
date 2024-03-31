import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import NavigationBar from './component/NavigationBar';
import ServicesSection from './ServicesSection'; // Import the ServicesSection component

const Services = () => {
  // Define an array of services
  const services = [
    {
      name: 'Ambient Lights',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus velit vitae est ultrices, eu tempor tortor malesuada.',
      image: '/about-image.jpg',
    },
    {
      name: 'CarPlay',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus velit vitae est ultrices, eu tempor tortor malesuada.',
      image: '/CarPlay.jpg',
    },
    // Add more services as needed
  ];

  return (
    <>
      <NavigationBar />
      <ServicesSection services={services} /> {/* Pass the services array to the ServicesSection component */}
    </>
  );
};

export default Services;
