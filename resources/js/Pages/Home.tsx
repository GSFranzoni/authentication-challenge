import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import MainLayout from '@/Layouts/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Box as={Flex} alignItems="center" justifyContent="center" height="100%">
        Home
      </Box>
    </MainLayout>
  );
};

export default Home;
