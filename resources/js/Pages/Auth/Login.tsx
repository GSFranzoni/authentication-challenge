import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import LoginForm from '@/Features/Auth/Components/LoginForm';

const Login: React.FC = () => {
  return (
    <Box as={Flex} alignItems="center" justifyContent="center" height="100%">
      <LoginForm w={500} />
    </Box>
  );
};

export default Login;
