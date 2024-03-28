import React from 'react';
import { Flex } from '@chakra-ui/react';
import DropdownMenu from './DropdownMenu';

const NavigationBar = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="70px" // Set the height of the navigation bar
      bg="black" // Set the background color of the navigation bar
      justifyContent="space-between" // Align items to the left and right edges
      alignItems="center" // Center items vertically
      zIndex="2" // Ensure the navigation bar is above other elements
      px="20px" // Add horizontal padding
    >
      {/* Include the DropdownMenu component */}
      <DropdownMenu />
    </Flex>
  );
};

export default NavigationBar;
