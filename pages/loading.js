// pages/loading.js
import React, { useEffect } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import styles from '../styles/loading.module.css';

const LoadingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const delay = setTimeout(() => {
      // Redirect to the Home page after the delay
      router.push('/Home');
    }, 5000); // 5000 milliseconds (5 seconds)

    return () => {
      clearTimeout(delay); // Clear the timeout if the component is unmounted
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
      <div className={styles.logoContainer}>
        {/* Your logo */}
        <Image src="/logo.png" alt="Your Logo" className={styles.logo} />
      </div>
    </Flex>
  );
};

export default LoadingPage;
