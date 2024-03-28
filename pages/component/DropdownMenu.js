// DropdownMenu.js
import React, { useState } from 'react';
import { Box, Text, Menu, MenuButton, MenuList, MenuItem,Button,  } from '@chakra-ui/react';
import { ChevronDownIcon,HamburgerIcon ,LockIcon} from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import Link from 'next/link';
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="fixed" top="20px" right="20px" zIndex="1">
    <Link href='https://calendar.app.google/WnTRLGUUpQiaxbrU9' target='_blank'>
    <Button colorScheme="red" size="sm"  mr="5px" rightIcon={<LockIcon />}>
      Book Your Car
    </Button>
    </Link>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MenuButton
       
        
          bg="#E53E3E"
          px={2}
          pb={1}
          borderRadius={5}
          
          _hover={{ color: 'white' }}
          _active={{ bg: 'black' }}
          
          onClick={handleMenuToggle}
        >
          <HamburgerIcon/>
        </MenuButton>
        <MenuList color={"black"}>
            <MenuItem>Home</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Contact Us</MenuItem>
          <MenuItem>Shop</MenuItem>
          
        </MenuList>
      </Menu>
    </Box>
  );
};

export default DropdownMenu;
