import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import MainLayout from '@/Layouts/MainLayout';
import UserProfileComponent from '@/Features/Account/Components/UserProfile';

const UserProfile: React.FC = () => {
  return (
    <MainLayout>
      <VStack justifyContent="center" height="full" gap={3}>
        <VStack>
          <Text fontSize="3xl" fontWeight="normal">
            Personal Info
          </Text>
          <Text as="span" fontSize="md" color="gray.500" fontWeight="300">
            Basic info, like your name and photo
          </Text>
        </VStack>
        <UserProfileComponent width="600px" maxW="95%" />
      </VStack>
    </MainLayout>
  );
};

export default UserProfile;
