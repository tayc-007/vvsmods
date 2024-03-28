// pages/index.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingPage from './loading'; // Update the path here


const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the LoadingPage
    router.push('/loading');
  }, [router]);

  return <LoadingPage />;
};

export default Index;
