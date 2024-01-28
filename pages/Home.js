// pages/Home.js
import React from 'react';
import { Flex, Image, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  // Function to handle Instagram button click
  const handleInstagramButtonClick = () => {
    // Replace 'your-instagram-link' with your actual Instagram link
    window.location.href = 'https://www.instagram.com/vvsmodss/';
  };

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      bg="black"
      color="white"
      direction="column"
    >
      {/* Your logo */}
      <Image src="/logo.png" alt="Your Logo" mb="4" height={200} width={200}/>

      {/* Instagram button */}
      <Button
        variant="outline"
        color="white"
        onClick={handleInstagramButtonClick}
        mb="4"
      >
        Instagram
      </Button>

    </Flex>
  );
};

export default Home;
