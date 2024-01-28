// pages/loading.js
import React, { useEffect, useState } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const LoadingPage = () => {
  const router = useRouter();
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  useEffect(() => {
    const delay = setTimeout(() => {
      // Redirect to the Home page after the delay
      router.push('/Home');
    }, 5000); // 5000 milliseconds (5 seconds)

    // Optionally, update the loading message during the delay
    const interval = setInterval(() => {
      setLoadingMessage((prevMessage) => prevMessage + '.');
    }, 500); // Update every 0.5 seconds

    return () => {
      clearTimeout(delay); // Clear the timeout if the component is unmounted
      clearInterval(interval); // Clear the interval if the component is unmounted
    };
  }, [router]);

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      bg="black"
      color="white"
      direction="column"
    >
      <Box>
        {/* Your logo */}
        <Image src="/path/to/your/logo.png" alt="Your Logo" mb="4" />

        {/* Loading message */}
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          {loadingMessage}
        </Text>
        {/* Your loading animation or content can go here */}
      </Box>
    </Flex>
  );
};

export default LoadingPage;
