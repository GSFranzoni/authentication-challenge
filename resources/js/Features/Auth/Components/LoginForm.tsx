import React from 'react';
import {
  Button,
  Image,
  InputLeftElement,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { InertiaLink } from '@inertiajs/inertia-react';
import AppCard, { AppCardProps } from '@/Components/AppCard';
import DevChallengeLogoDark from '@/Assets/Images/devchallenges.svg';
import DevChallengeLogoLight from '@/Assets/Images/devchallenges-light.svg';
import AppTextField from '@/Components/AppTextField';
import useLogin from '@/Features/Auth/Hooks/useLogin';
import SocialProviders from '@/Features/Auth/Components/SocialProviders';

const LoginForm: React.FC<AppCardProps> = ({ ...props }) => {
  const AppLogo = useColorModeValue(
    DevChallengeLogoDark,
    DevChallengeLogoLight
  );

  const {
    processing,
    values: { email, password },
    setFieldValue,
    handleSubmit,
    errors,
  } = useLogin();

  return (
    <AppCard {...props} p={10} py={12} borderRadius={20}>
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
        <Text fontSize="lg" fontWeight="medium">
          Login
        </Text>
        <VStack w="full" gap={2}>
          <AppTextField
            placeholder="Email"
            type="email"
            value={email}
            isReadOnly={processing}
            hint={errors.email as string}
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
            hint={errors.password as string}
            onChange={(e) => setFieldValue('password', e.target.value)}
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
          Login
        </Button>
        <VStack w="full" alignItems="center" gap={3}>
          <Text fontSize="sm" color="gray.500">
            or continue with these social profile
          </Text>
          <SocialProviders />
          <Text fontSize="sm" color="gray.500">
            Don&apos;t have an account?{' '}
            <InertiaLink href="/auth/register">
              <Text as="span" color="blue.600" fontWeight="medium">
                Register
              </Text>
            </InertiaLink>
          </Text>
        </VStack>
      </VStack>
    </AppCard>
  );
};

export default LoginForm;
