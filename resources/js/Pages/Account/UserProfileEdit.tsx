import React from 'react';
import { Button, VStack } from '@chakra-ui/react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import MainLayout from '@/Layouts/MainLayout';
import UserProfileEditComponent from '@/Features/Account/Components/UserProfileEdit';

const UserProfileEdit: React.FC = () => {
  return (
    <MainLayout>
      <VStack justifyContent="center" height="full" gap={3}>
        <VStack alignItems="start" width="600px" maxW="95%">
          <Button
            pl={1}
            leftIcon={<ChevronLeftIcon fontSize={18} />}
            as={InertiaLink}
            href="/account/profile"
            size="sm"
            variant="ghost"
            colorScheme="twitter"
            fontWeight="normal"
          >
            Back
          </Button>
          <UserProfileEditComponent w="full" />
        </VStack>
      </VStack>
    </MainLayout>
  );
};

export default UserProfileEdit;
