import React, { useState } from 'react';
import Why from './Why';
import About from './About';
import ServicesSection from './ServicesSection';
import { Flex, Image, Button, Box,Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Import Instagram and TikTok icons
import styles from '../styles/home.module.css'; // Import the CSS module for styling

import NavigationBar from './component/NavigationBar';

const Home = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleInstagramButtonClick = () => {
    const InstaLink = 'https://www.instagram.com/vvsmodss?igsh=bzZ5aTRleHJwcm1p&utm_source=qr';
    window.open(InstaLink, '_blank'); // Open link in a new tab
  };
  
  const handleTikTokButtonClick = () => {
    const TiktokLink= 'https://www.tiktok.com/@vvsmodss?_t=8l0zCTU7ivR&_r=1';
    window.open(TiktokLink, '_blank'); // Open link in a new tab
  };
  const handleDropdownItemClick = (route) => {
    router.push(route);
    setIsOpen(false); // Close the dropdown menu after selecting an option
  };


  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <>
      <Flex
        align="center"
        justify="center"
        h="100vh"
        position="relative" // Set position to relative for proper positioning of children
        bgImage="/Background.jpg" // Set the background image
        bgSize="cover" // Ensure the background image covers the container
        bgPosition="center" // Center the background image
        bgRepeat="no-repeat" // Do not repeat the background image
      >
        {/* Semi-transparent black background */}
        <Box
          position="absolute" // Position the black background absolutely
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)" // Semi-transparent black color (rgba(0, 0, 0, 0.5))
          zIndex="0" // Set z-index to 0 to place it behind other elements
        />

        {/* Content */}
        <Flex
          align="center"
          justify="center"
          direction="column"
          color="white"
          zIndex="1" // Set z-index to 1 to place it on top of the black background
        >
        {/* Dropdown Menu */}
      <NavigationBar/>
          {/* Your logo */}
          <Box
            className={isLogoHovered ? styles.logoHovered : ''}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            transition="transform 0.3s ease" // Smooth transition
            transform={isLogoHovered ? 'scale(1.1)' : 'scale(1)'}
          >
            <Image src="/logo-1.png" alt="Your Logo" mb="4" className={styles.fadeIn} />
          </Box>

          {/* Social media buttons */}
          <Flex justify="center" mb="4" className={styles.fadeIn}>
            {/* Instagram button */}
            <Button
              variant="outline"
              color="white"
              onClick={handleInstagramButtonClick}
              mr="2"
              className={styles.button} // Apply button style
            >
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} /> {/* Instagram icon */}
            </Button>

            {/* TikTok button */}
            <Button
              variant="outline"
              color="white"
              onClick={handleTikTokButtonClick}
              className={styles.button} // Apply button style
            >
              <FontAwesomeIcon icon={faTiktok} className={styles.icon} /> {/* TikTok icon */}
            </Button>
            
          </Flex>
          {/* <Text fontSize={'xl'}>Welcome To VVSMods !</Text> */}
        </Flex>
      </Flex>
      <About />
      <Why />
      <ServicesSection/>
    </>
  );
};

export default Home;
