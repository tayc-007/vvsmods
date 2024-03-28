// components/Layout.js
import { Flex } from '@chakra-ui/react';
import ColorModeToggle from './ColorModeToggle';

const Layout = ({ children }) => {
  return (
    <Flex direction="column" h="100vh">
      <ColorModeToggle />
      {children}
    </Flex>
  );
};

export default Layout;
