// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingPage from '../components/LoadingPage'; // Check the path here

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the LoadingPage
    router.push('/loading');
  }, [router]);

  return <LoadingPage />;
};

export default Index;
