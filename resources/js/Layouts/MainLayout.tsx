import React, { PropsWithChildren } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import AppHeader from '@/Components/AppHeader';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <VStack>
      <AppHeader />
      <Box as="main" w="full" flex={1}>
        {children}
      </Box>
    </VStack>
  );
};

export default MainLayout;
