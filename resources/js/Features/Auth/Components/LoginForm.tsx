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
import AppCard from '@/Components/AppCard';
import DevChallengeLogoDark from '@/Assets/Images/devchallenges.svg';
import DevChallengeLogoLight from '@/Assets/Images/devchallenges-light.svg';
import AppTextField from '@/Components/AppTextField';
import FacebookLogo from '@/Assets/Images/Facebook.svg';
import GoogleLogo from '@/Assets/Images/Google.svg';
import TwitterLogo from '@/Assets/Images/Twitter.svg';
import GithubLogo from '@/Assets/Images/Github.svg';
import useLogin from '@/Features/Auth/Hooks/useLogin';

const LoginForm: React.FC = () => {
  const AppLogo = useColorModeValue(
    DevChallengeLogoDark,
    DevChallengeLogoLight
  );
  const { email, password, setEmail, setPassword, login, processing } =
    useLogin();
  return (
    <AppCard w="full" p={10} py={12} borderRadius={20}>
      <VStack as="form" onSubmit={login} w="full" alignItems="start" gap={5}>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
          <HStack gap={3}>
            <Link href="/" rounded="full">
              <Image src={FacebookLogo} />
            </Link>
            <Link href="/" rounded="full">
              <Image src={GoogleLogo} />
            </Link>
            <Link href="/" rounded="full">
              <Image src={TwitterLogo} />
            </Link>
            <Link href="/" rounded="full">
              <Image src={GithubLogo} />
            </Link>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            Don&apos;t have an account?{' '}
            <Link href="/" color="blue.600">
              Register
            </Link>
          </Text>
        </VStack>
      </VStack>
    </AppCard>
  );
};

export default LoginForm;
