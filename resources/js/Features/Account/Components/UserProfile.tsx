import React from 'react';
import { Button, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import AppCard, { AppCardProps } from '@/Components/AppCard';

export const UserProfile: React.FC<AppCardProps> = ({ ...props }) => {
  const {
    auth: {
      user: { name, avatar, email, bio, phone },
    },
  } = usePage().props as never;
  return (
    <AppCard
      {...props}
      p={0}
      shadow={['none', 'lg']}
      borderWidth={['none', '1px']}
      borderRadius={['none', 'lg']}
    >
      <HStack justifyContent="space-between" py={[2, 5]} px={[2, 8]}>
        <VStack alignItems="start">
          <Text fontSize="2xl" fontWeight="normal">
            Profile
          </Text>
          <Text fontSize="sm" color="gray.500" fontWeight="300">
            Some info may be visible to other people
          </Text>
        </VStack>
        <Button
          variant="outline"
          fontWeight="normal"
          rounded="lg"
          size="sm"
          py={3}
          px={8}
          onClick={() => {
            Inertia.visit('/account/profile/edit');
          }}
        >
          Edit
        </Button>
      </HStack>
      <Divider w="full" display={['none', 'block']} />
      <VStack alignItems="start" w="full">
        <HStack
          p={5}
          px={[2, 8]}
          w="full"
          pb={2}
          justifyContent={['space-between', 'start']}
        >
          <Text
            fontSize="xs"
            color="gray.400"
            fontWeight="300"
            width={[75, 150]}
          >
            PHOTO
          </Text>
          <Image src={avatar} borderRadius="md" w={12} />
        </HStack>
        <Divider w="full" />
        <HStack
          p={5}
          px={[2, 8]}
          w="full"
          justifyContent={['space-between', 'start']}
        >
          <Text
            fontSize="xs"
            fontWeight="300"
            color={name ? 'gray.400' : 'red.400'}
            width={[75, 150]}
          >
            NAME
          </Text>
          <Text
            fontSize="sm"
            color={name ? 'gray.400' : 'red.400'}
            fontWeight="normal"
            noOfLines={1}
          >
            {name}
          </Text>
        </HStack>
        <Divider w="full" />
        <HStack
          p={5}
          px={[2, 8]}
          w="full"
          justifyContent={['space-between', 'start']}
        >
          <Text
            fontSize="xs"
            color={bio ? 'gray.400' : 'red.400'}
            fontWeight="300"
            width={[75, 150]}
          >
            BIO
          </Text>
          <Text
            fontSize="sm"
            color={bio ? 'gray.400' : 'red.400'}
            fontWeight="normal"
            noOfLines={1}
          >
            {bio || '-'}
          </Text>
        </HStack>
        <Divider w="full" />
        <HStack
          p={5}
          px={[2, 8]}
          w="full"
          justifyContent={['space-between', 'start']}
        >
          <Text
            fontSize="xs"
            color={phone ? 'gray.400' : 'red.400'}
            fontWeight="300"
            width={[75, 150]}
          >
            PHONE
          </Text>
          <Text
            fontSize="sm"
            color={phone ? 'gray.400' : 'red.400'}
            fontWeight="normal"
            noOfLines={1}
          >
            {phone || '-'}
          </Text>
        </HStack>
        <Divider w="full" />
        <HStack
          p={5}
          px={[2, 8]}
          w="full"
          justifyContent={['space-between', 'start']}
        >
          <Text
            fontSize="xs"
            color="gray.400"
            fontWeight="300"
            width={[75, 150]}
          >
            EMAIL
          </Text>
          <Text fontSize="sm" fontWeight="normal" noOfLines={1}>
            {email}
          </Text>
        </HStack>
        <Divider w="full" />
        <HStack
          p={5}
          px={[2, 8]}
          w="full"
          justifyContent={['space-between', 'start']}
        >
          <Text
            fontSize="xs"
            color="gray.400"
            fontWeight="300"
            width={[75, 150]}
          >
            PASSWORD
          </Text>
          <Text fontSize="sm" fontWeight="normal" noOfLines={1}>
            ********
          </Text>
        </HStack>
        <Divider w="full" />
      </VStack>
    </AppCard>
  );
};

export default UserProfile;
