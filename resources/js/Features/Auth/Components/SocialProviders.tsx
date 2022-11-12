import React from 'react';
import { HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import FacebookLogo from '@/Assets/Images/Facebook.svg';
import GoogleLogo from '@/Assets/Images/Google.svg';
import TwitterLogo from '@/Assets/Images/Twitter.svg';
import GithubLogo from '@/Assets/Images/Github.svg';

const SocialProviders = () => {
  return (
    <HStack gap={2}>
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
  );
};

export default SocialProviders;
