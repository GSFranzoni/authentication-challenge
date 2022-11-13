import React from 'react';
import { HStack, Image, Link } from '@chakra-ui/react';
import FacebookLogo from '@/Assets/Images/Facebook.svg';
import GoogleLogo from '@/Assets/Images/Google.svg';
import TwitterLogo from '@/Assets/Images/Twitter.svg';
import GithubLogo from '@/Assets/Images/Github.svg';

const SocialProviders = () => {
  return (
    <HStack gap={2}>
      <Link href="/auth/social/facebook" rounded="full">
        <Image src={FacebookLogo} />
      </Link>
      <Link href="/auth/social/google" rounded="full">
        <Image src={GoogleLogo} />
      </Link>
      <Link href="/auth/social/twitter" rounded="full">
        <Image src={TwitterLogo} />
      </Link>
      <Link href="/auth/social/github" rounded="full">
        <Image src={GithubLogo} />
      </Link>
    </HStack>
  );
};

export default SocialProviders;
