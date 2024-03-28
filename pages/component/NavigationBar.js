import React from 'react';
import { Flex, Image, Box } from '@chakra-ui/react';
import Link from 'next/link'; // Import Link from Next.js

import DropdownMenu from './DropdownMenu';

const NavigationBar = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="70px"
      bg="black"
      justifyContent="space-between"
      alignItems="center"
      zIndex="2"
      px="20px"
    >
      {/* Link to home page */}
      <Link href="/Home">
        
          {/* Logo */}
          <Box>
            <Image src="logo.png" alt="Your Logo" height="40px" cursor="pointer" />
          </Box>
        
      </Link>

      {/* Include the DropdownMenu component */}
      <DropdownMenu />
    </Flex>
  );
};

export default NavigationBar;
