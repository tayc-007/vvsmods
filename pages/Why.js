
import { Flex, Image, Box, Text, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from '../styles/home.module.css'; // Import the CSS module for styling
import GetInTouch from './component/GetInTouch';
const Why = () => {
  // Check if the screen width is less than 768px (tablet/mobile view)
  const [isMobileView] = useMediaQuery("(max-width: 768px)");
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  return (
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      bg="black"
      color="white"
      py={isMobileView ? "4" : "8"} // Adjust padding for mobile view
      px={isMobileView ? "4" : "0"} // Adjust padding for mobile view
    >
      <Box
        maxWidth="1200px"
        w="100%" // Set width to 100% for mobile view
      >
        <Flex 
          align="center"
          direction={isMobileView ? "column" : "row"} // Change direction for mobile view
          justify="center"
          textAlign={isMobileView ? "center" : "left"} // Adjust text alignment for mobile view
        >
          {/* Text */}
          <Box mb={isMobileView ? "4" : "0"} mr={isMobileView ? "0" : "20"}> {/* Adjust margin for mobile view */}
            <Text fontSize={isMobileView ? "xl" : "30px"} fontWeight="bold" mb="4">Why Choose Us?</Text> {/* Adjust font size for mobile view */}
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ex et massa hendrerit scelerisque. 
              Integer condimentum nisi a eros tincidunt, et bibendum magna pharetra. 
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Nam tincidunt, libero at pellentesque mollis, libero dolor ultricies ligula, ut fermentum metus turpis vitae magna. 
              Mauris nec augue nec neque lacinia viverra.
            </Text>
            <GetInTouch colorScheme={'white'}/>
          </Box>
          
          {/* Image */}
          
            <Image  className={isLogoHovered ? styles.logoHovered : ''}
            borderRadius={4}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            transition="transform 0.3s ease" // Smooth transition
            transform={isLogoHovered ? 'scale(1.1)' : 'scale(1)'} src="/about-image.jpg" alt="About Image" width={isMobileView ? "300px" : "400px"} /> {/* Adjust width for mobile view */}
            
        </Flex>
      </Box>
    </Flex>
  );
};

export default Why;
