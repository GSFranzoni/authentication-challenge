import React from 'react';
import {
  Button,
  HStack,
  Image,
  InputLeftElement,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { InertiaLink } from '@inertiajs/inertia-react';
import { FaUser } from 'react-icons/all';
import AppCard, { AppCardProps } from '@/Components/AppCard';
import DevChallengeLogoDark from '@/Assets/Images/devchallenges.svg';
import DevChallengeLogoLight from '@/Assets/Images/devchallenges-light.svg';
import AppTextField from '@/Components/AppTextField';
import SocialProviders from '@/Features/Auth/Components/SocialProviders';
import useRegister from '@/Features/Auth/Hooks/useRegister';

const LoginRegister: React.FC<AppCardProps> = ({ ...props }) => {
  const AppLogo = useColorModeValue(
    DevChallengeLogoDark,
    DevChallengeLogoLight
  );
  const {
    processing,
    values: { email, name, password, confirmPassword },
    setFieldValue,
    handleSubmit,
    errors,
    touched,
  } = useRegister();
  return (
    <AppCard {...props} p={[2, 10]} py={[6, 12]} borderRadius={20}>
      <VStack
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        w="full"
        alignItems="start"
        gap={5}
      >
        <Image src={AppLogo} />
        <VStack gap={2}>
          <Text fontSize="lg" fontWeight="medium">
            Join thousands of learners from around the world
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </Text>
        </VStack>
        <VStack w="full" gap={2}>
          <AppTextField
            placeholder="Name"
            type="name"
            value={name}
            isReadOnly={processing}
            hint={touched.name && (errors.name as string)}
            onChange={(e) => setFieldValue('name', e.target.value)}
          >
            <InputLeftElement>
              <FaUser />
            </InputLeftElement>
          </AppTextField>
          <AppTextField
            placeholder="Email"
            type="email"
            value={email}
            isReadOnly={processing}
            hint={touched.email && (errors.email as string)}
            onChange={(e) => setFieldValue('email', e.target.value)}
          >
            <InputLeftElement>
              <EmailIcon fontSize={18} />
            </InputLeftElement>
          </AppTextField>
          <AppTextField
            placeholder="Password"
            type="password"
            value={password}
            isReadOnly={processing}
            hint={touched.password && (errors.password as string)}
            onChange={(e) => setFieldValue('password', e.target.value)}
          >
            <InputLeftElement>
              <LockIcon fontSize={18} />
            </InputLeftElement>
          </AppTextField>
          <AppTextField
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            isReadOnly={processing}
            hint={touched.confirmPassword && (errors.confirmPassword as string)}
            onChange={(e) => setFieldValue('confirmPassword', e.target.value)}
          >
            <InputLeftElement>
              <LockIcon fontSize={18} />
            </InputLeftElement>
          </AppTextField>
        </VStack>
        <Button
          bg="blue.600"
          colorScheme="blue"
          size="sm"
          w="full"
          color="white"
          fontWeight="medium"
          isLoading={processing}
          type="submit"
        >
          Start coding now
        </Button>
        <VStack w="full" alignItems="center" gap={3}>
          <Text fontSize="sm" color="gray.500">
            or continue with these social profile
          </Text>
          <SocialProviders />
          <Text fontSize="sm" color="gray.500">
            Already a member?{' '}
            <InertiaLink href="/auth/login">
              <Text as="span" color="blue.600" fontWeight="medium">
                Login
              </Text>
            </InertiaLink>
          </Text>
        </VStack>
      </VStack>
    </AppCard>
  );
};

export default LoginRegister;
