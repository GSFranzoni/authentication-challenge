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

const LoginForm: React.FC = () => {
  const AppLogo = useColorModeValue(
    DevChallengeLogoDark,
    DevChallengeLogoLight
  );
  return (
    <AppCard w="full" p={10} py={12} borderRadius={20}>
      <VStack w="full" alignItems="start" gap={5}>
        <Image src={AppLogo} />
        <Text fontSize="lg" fontWeight="medium">
          Login
        </Text>
        <VStack w="full" gap={2}>
          <AppTextField placeholder="Email" type="email">
            <InputLeftElement>
              <EmailIcon fontSize={18} />
            </InputLeftElement>
          </AppTextField>
          <AppTextField placeholder="Password" type="password">
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
        >
          Login
        </Button>
        <VStack w="full" alignItems="center" gap={3}>
          <Text fontSize="sm" color="gray.500">
            or continue with these social profile
          </Text>
          <HStack gap={3}>
            <Link href="/">
              <Image src={FacebookLogo} />
            </Link>
            <Link href="/">
              <Image src={GoogleLogo} />
            </Link>
            <Link href="/">
              <Image src={TwitterLogo} />
            </Link>
            <Link href="/">
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
